/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { useState } from 'react';

const useWheel = () => {
  const [rotation, setRotation] = useState(0);
  const mp3 = new Audio('/thewheelhausaudio.mp3');

  const segments = ['Upper Segment', 'Lower Segment', 'third segment', 'third segment', 'third segment'];

  const onWheelClick = () => {
    mp3.play();
    setRotation(rotation + Math.floor(Math.random() * 1500));
  };

  const renderSegments = () => {
    const segmentsCount = segments.length;
    return segments.map((segment, index) => {
      const offset = index * (360 / segmentsCount);
      return (
        <div
          className="wheel-segment"
          style={{ width: '55%', transform: `translateX(40%) rotate(${offset}deg) translateY(-10%)` }}
        >
          <div className="wheel-segment-inner">{segment}</div>
        </div>
      );
    });
  };

  return {
    rotation,
    onWheelClick,
    renderSegments,
  };
};

export default useWheel;
