import { connect } from 'react-redux';
import Score from '../components/Score';

function calcScore(board) {
  let sum = 0;
  board.data.forEach(row => {
    row.forEach(value => {
      if (value > 0) sum += 2 ** value;
    });
  });

  return sum;
}

const mapStateToProps = state => ({
  score: calcScore(state.board.present)
});

export default connect(mapStateToProps)(Score);
