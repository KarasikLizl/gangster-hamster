import Phaser from 'phaser';

const body = document.querySelector('body');
const bodyRect = body?.getBoundingClientRect();
export const gameSettings: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: bodyRect?.width || 0,
    height: bodyRect?.height || 0,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 0 },
        }
    },
};

export const playerSettings = {
    scaleQ: 1000,
    satietyQ: 100,
    width: 32,
    height: 32,
    startX: 300,
    startY: 300,
    startSpeed: 150,
    startHealth: 25,
    hungerTime: 5000,
    hungerQSaturation: -10,
};

export const foodSettings = {
    minSaturation: 10,
    maxSaturation: 25,
    width: 32,
    height: 32,
};

export const enemySettings = {
    width: 36,
    height: 36,
    startPositionOffset: 20,
    edgeOffset: 100,
    speed: 200,
    minDamage: 10,
    maxDamage: 25,
    boostSpeed: 400,
};

export const scoreBoardSettings = {
    offset: 10,
}

export const uiSettings = {
    font: 'Roboto',
    menu: {
        title: {
            fontSize: 100,
            fontColor: '#fff',
            text: 'Добро пожаловать в \n хомячий бедтрип',
        },
        description: {
            fontSize: 25,
            fontColor: '#fff',
            text: '( нажмите в любое место )',
        }
    },
    end: {
        title: {
            fontSize: 100,
            fontColor: '#fff',
            text: 'Вас отпустило',
        },
        description: {
            fontSize: 25,
            fontColor: '#fff',
            text: '( нажмите в любое место, что бы начать заново )',
        }
    }
}
