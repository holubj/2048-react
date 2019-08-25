import { connect } from 'react-redux';
import { gameMove, MoveDirections } from '../actions';
import Board from '../components/Board';
import { isValidMove } from '../reducers/board';

function getAllowedMoves(state) {
  let allowedMoves = [];

  for (const direction in MoveDirections) {
    if (isValidMove(state.board.present, direction)) {
      allowedMoves.push(direction);
    }
  }

  return allowedMoves;
}

const mapStateToProps = state => ({
  boardSize: state.board.present.size,
  board: state.board.present.data,
  allowedMoves: getAllowedMoves(state)
});

const mapDispatchToProps = dispatch => ({
  onMove: direction => dispatch(gameMove(direction))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
