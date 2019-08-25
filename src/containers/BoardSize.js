import React from 'react';
import { connect } from 'react-redux';
import { changeBoardSize } from '../actions';

const BoardSize = ({ size, dispatch }) => {
  let input;

  return (
    <div>
      <h2>Change board size:</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          const value = parseInt(input.value.trim());
          if (value < 2 || value > 20) {
            input.value = size;
            return;
          }
          dispatch(changeBoardSize(value));
        }}
      >
        <input ref={node => (input = node)} placeholder="New Size (2 - 20)" />
        <button type="submit">Change</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  size: state.board.present.size
});

export default connect(mapStateToProps)(BoardSize);
