import { ASSETS_MAP, GLOBAL_KEYS, SCENE_KEYS } from '../constants';
import { Enemy } from '../gameobjects/Enemy';
import { Food, getRandomSaturation } from '../gameobjects/Food';
import { Player } from '../gameobjects/Player';
import { playerSettings } from '../settings';
import { logger } from '../utils';

export class GameScene extends Phaser.Scene {
    cursors: Phaser.Types.Input.Keyboard.CursorKeys | null = null;
    player: Player | null = null;
    food: Food | null = null;
    enemy: Enemy | null = null;

    constructor() {
        super(SCENE_KEYS.GAME);
    }

    preload() {
        this.load.image(GLOBAL_KEYS.ENEMY_IMAGE_KEY, ASSETS_MAP.enemyMoveRightImgs[0]);
        this.load.image(GLOBAL_KEYS.FOOD_IMAGE_KEY, ASSETS_MAP.foodImg);

        logger('preload', SCENE_KEYS.GAME, 'scene');
    }

    create() {
        this.cursors = this.input.keyboard.createCursorKeys();
        this.add.image(0, 0, GLOBAL_KEYS.BG_IMAGE_KEY).setScale(2);

        this.player = new Player(this, {
            x: playerSettings.startX,
            y: playerSettings.startY,
            health: playerSettings.startHealth,
            speed: playerSettings.startSpeed,
        });
        this.food = new Food(this, {
            saturation: getRandomSaturation(),
            speed: 0,
        });
        this.enemy = new Enemy(this, {
            speed: 0,
        });

        this.physics.add.overlap(this.player, this.food, (_, obj2) => this.player?.eat(obj2 as Food));
        this.physics.add.overlap(this.player, this.enemy, (_, obj2) => this.player?.setDamage(obj2 as Enemy));
        this.physics.add.overlap(this.enemy, this.food, (_, obj2) => this.enemy?.boost(obj2 as Food));
    }

    update() {
        this.checkPlayerStatus();
        if (this.cursors) {
            this.player?.update(this.cursors);
        }
        this.enemy?.update();
    }

    checkPlayerStatus() {
        if (!this.player) {
            return;
        }

        const isEnd = this.player.getHealth() < 0 ||
            this.player.getSatiety() < .7;

        if (isEnd) {
            this.scene.start(SCENE_KEYS.END);
        }
    }
}
