'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const FONT_GAP = 20;
const COLUMN_GAP = 50;
const BAR_WIDTH = 40;
const BAR_HEIGHT = 150;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr [i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#111';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 3);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 3 + FONT_GAP);
  const maxTime = getMaxElement(times);
  for (let i = 0; i < names.length; i++) {
    names[i] === 'Вы' ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' : ctx.fillStyle = 'hsl(240, 50%, 50%)';
    ctx.fillText(names [i], CLOUD_X + COLUMN_GAP + (COLUMN_GAP + BAR_WIDTH) * i, CLOUD_Y + (GAP * 6) + (FONT_GAP * 2) + BAR_HEIGHT
    );
    ctx.fillRect(CLOUD_X + COLUMN_GAP + (COLUMN_GAP + BAR_WIDTH) * i, GAP * 8 + (BAR_HEIGHT - ((BAR_HEIGHT * times [i]) / maxTime)), BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillText(Math.round(times [i]), CLOUD_X + COLUMN_GAP + (COLUMN_GAP + BAR_WIDTH) * i, CLOUD_Y + (GAP * 2) + (FONT_GAP * 2)
    );
  }
};
