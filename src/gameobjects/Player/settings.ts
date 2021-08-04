export const playerSettings = {
    // Коээфициент насыщенности, который высчитывает новые размеры по форумел scale = saturation / saturationQ.
    scaleQ: 100,
    // Коээфициент сытости, которые высчитывает новое значение по формуле satiety = saturation / satietyQ.
    satietyQ: 100,
    // Начальные координаты игрока по оси х.
    startX: 300,
    // Начальные координаты игрока по оси y.
    startY: 300,
    // Начальная скорость игрока.
    startSpeed: 150,
    // Начальное здоровье игрока.
    startHealth: 25,
    // Время, за которое игрока проголодается в мс.
    hungerTime: 15000,
    // Значение голода, который уменьшает нассыщеность.
    hunger: -10,
    // Начальное значение насыщенности.
    startSatiety: 1,
};
