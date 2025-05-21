// src/components/DQWindowSimple.jsx
import React from 'react';

const DQWindowSimple = ({ children, outerStyle = {}, innerStyle = {} }) => {
  return (
    <div className="dq-window-1" style={outerStyle}>
      <div className="dq-window-2">
        <div className="dq-window-3" style={innerStyle}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DQWindowSimple;