import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';
import History from '../components/History';

const mapStateToProps = state => {
  return {
    canUndo: state.board.past.length > 0,
    canRedo: state.board.future.length > 0
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
