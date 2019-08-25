import React from 'react';

const History = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <div className="history">
    <h2>History</h2>
    <p>
      <button onClick={onUndo} disabled={!canUndo}>
        &lt; Undo
      </button>
      <button onClick={onRedo} disabled={!canRedo}>
        Redo &gt;
      </button>
    </p>
  </div>
);

export default History;
