export const changeBoardSize = size => ({
  type: 'CHANGE_BOARD_SIZE',
  size
});

export const gameMove = direction => ({
  type: 'GAME_MOVE',
  direction
});

export const MoveDirections = {
  MOVE_LEFT: 'MOVE_LEFT',
  MOVE_RIGHT: 'MOVE_RIGHT',
  MOVE_UP: 'MOVE_UP',
  MOVE_DOWN: 'MOVE_DOWN'
};
