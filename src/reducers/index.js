import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import board from './board';

export default combineReducers({
  board: undoable(board)
});
