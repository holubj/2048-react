import { connect } from 'react-redux';
import Tile from '../components/Tile';

const colors = {
  0: 'cdc1b4',
  1: 'eee3d6',
  2: 'ede0c8',
  3: 'f2b179',
  4: 'f59563',
  5: 'f67e5f',
  6: 'f65e3b',
  7: 'f1d96b',
  8: 'f2cf4d',
  9: 'e5c12b',
  10: 'dfba12',
  11: 'edc501'
};

const mapStateToProps = (state, ownProps) => ({
  bgColor: colors[Math.min(ownProps.exponent, 11)],
  textColor: ownProps.exponent > 2 ? 'f9f6f2' : '776e65'
});

export default connect(mapStateToProps)(Tile);
