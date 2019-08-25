const NULL_TILE = 0;

let defaultBoard = initBoard(4);

const board = (currentState = defaultBoard, action) => {
  switch (action.type) {
    case 'CHANGE_BOARD_SIZE':
      return initBoard(action.size);
    case 'GAME_MOVE':
      return handleMove(currentState, action);
    default:
      return currentState;
  }
};

function handleMove(currentState, action) {
  let state = {
    size: currentState.size,
    data: currentState.data.map(r => r.slice(0))
  };

  applyMove(state, action.direction);

  if (hasEmptyTile(state) && !equalStates(currentState, state)) {
    generateTile(state);
    return state;
  } else {
    return currentState;
  }
}

function applyMove(state, direction) {
  switch (direction) {
    case 'MOVE_LEFT':
      shiftBoard(state);
      break;
    case 'MOVE_RIGHT':
      state.data = state.data.map(r => r.reverse());
      shiftBoard(state);
      state.data = state.data.map(r => r.reverse());
      break;
    case 'MOVE_UP':
      state.data = transpose(state.data);
      shiftBoard(state);
      state.data = transpose(state.data);
      break;
    case 'MOVE_DOWN':
      state.data = transpose(state.data.reverse());
      shiftBoard(state);
      state.data = transpose(state.data).reverse();
      break;
    default:
      return state;
  }

  return state;
}

function hasEmptyTile(board) {
  return board.data.join().indexOf(NULL_TILE) !== -1;
}

function equalStates(state1, state2) {
  return JSON.stringify(state1) === JSON.stringify(state2);
}

function initBoard(size) {
  let board = [...Array(size)].map(x => Array(size).fill(0));

  let state = {
    size: size,
    data: board
  };

  generateTile(state);
  return state;
}

function generateTile(board) {
  while (true) {
    const row = randomInt(0, board.size - 1);
    const col = randomInt(0, board.size - 1);

    if (board.data[row][col] === NULL_TILE) {
      board.data[row][col] = randomInt(0, 2) > 1 ? 2 : 1;
      return board;
    }
  }
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max + 1)) + min;
}

function transpose(board) {
  return board[0].map(function(_, c) {
    return board.map(function(r) {
      return r[c];
    });
  });
}

function shiftBoard(board) {
  for (let i = 0; i < board.size; i++) {
    for (let j = 0; j < board.size; j++) {
      if (board.data[i][j] !== NULL_TILE) {
        for (let k = j + 1; k < board.size; k++) {
          if (board.data[i][k] !== NULL_TILE) {
            if (board.data[i][j] === board.data[i][k]) {
              board.data[i][j] += 1;
              board.data[i][k] = NULL_TILE;
            }
            break;
          }
        }
      }
    }
    board.data[i] = shiftRow(board.data[i], board.size);
  }

  return board;
}

function shiftRow(row, size) {
  let writeCol = 0;
  for (let i = 0; i < size; i++) {
    if (row[i] !== NULL_TILE) {
      row[writeCol] = row[i];
      if (writeCol !== i) {
        row[i] = NULL_TILE;
      }
      writeCol++;
    }
  }

  return row;
}

export function isValidMove(currentState, direction) {
  let state = {
    size: currentState.size,
    data: currentState.data.map(r => r.slice(0))
  };

  applyMove(state, direction);

  return !equalStates(currentState, state);
}

export default board;
