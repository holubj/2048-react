import React from 'react';
import PropTypes from 'prop-types';
import Tile from '../containers/Tile';
import { MoveDirections } from '../actions';

class Board extends React.Component {
  constructor() {
    super();
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    let direction = null;

    switch (event.keyCode) {
      case 37:
        direction = MoveDirections.MOVE_LEFT;
        break;
      case 38:
        direction = MoveDirections.MOVE_UP;
        break;
      case 39:
        direction = MoveDirections.MOVE_RIGHT;
        break;
      case 40:
        direction = MoveDirections.MOVE_DOWN;
        break;
      default:
        return;
    }

    if (this.props.allowedMoves.includes(direction)) {
      this.props.onMove(direction);
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (
      <div
        className="board"
        style={{
          width: this.props.boardSize * 80 + 'px'
        }}
      >
        {this.props.board.map((row, i) =>
          row.map((col, j) => <Tile key={i + '-' + j} exponent={col} />)
        )}
      </div>
    );
  }
}

Board.propTypes = {
  boardSize: PropTypes.number.isRequired,
  board: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
  ).isRequired,
  allowedMoves: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Board;
