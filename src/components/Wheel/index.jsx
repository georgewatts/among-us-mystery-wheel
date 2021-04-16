/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import useWheel from './hooks/useWheel';

import './styles.css';

const Wheel = () => {
  const {
    spinning, rotation, renderSegments, onWheelClick,
  } = useWheel();
  return (
    <div>
      <div className="wheel">
        <div className="wheel-inner" style={{ transform: `rotate(${rotation}deg)` }}>
          {renderSegments()}
        </div>
        <div className="spin-button" onClick={onWheelClick}>{spinning ? 'SPINNING' : 'SPIN'}</div>
      </div>
    </div>
  );
};

export default Wheel;
