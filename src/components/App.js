import React from 'react';
import BoardSize from '../containers/BoardSize';
import Board from '../containers/Board';
import Score from '../containers/Score';
import History from '../containers/History';

const App = () => (
  <div>
    <BoardSize />
    <Score />
    <Board />
    <History />
  </div>
);

export default App;
