// src/components/DQWindow.jsx
import React from 'react';

const DQWindow = ({ children, style = {} }) => {
  return (
    <div className="dq-window-11" style={style}>
      <div className="dq-window-21">
        <div className="dq-window-31">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DQWindow;