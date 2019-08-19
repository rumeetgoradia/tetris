export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// 0 means empty cell, 'clear' means no tetrominos has collided in this cell
export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; ++y) {
    for (let x = 0; x < player.tetromino[0].length; ++x) {
      // First, check that we are on tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // Then, check that movement is within game area's height
          !stage[y + player.pos.y + moveY] ||
          // Then, check that movement is within game area's width
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // Then, check that cell we're moving to isn't set to clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
        ) {
          return true;
        }
      }
    }
  }
}