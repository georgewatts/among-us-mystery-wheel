/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { useState } from 'react';

const useWheel = () => {
  const segments = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const initialRotationOffset = (360 / segments.length) / 2;
  const mp3 = new Audio('/thewheelhausaudio.mp3');

  const onWheelClick = () => {
    // if (!spinning) {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 5000);
    mp3.play();
    const randomDegrees = Math.floor(Math.random() * 360) - (360 / segments.length);
    const newRotation = rotation + randomDegrees + 720;
    setRotation(newRotation);
    const actualRotationBetweenSegments = newRotation % 360;
    let selectedSegment = Math.ceil(
      (initialRotationOffset + (360 - actualRotationBetweenSegments)) / (360 / segments.length),
    );
    if (selectedSegment > segments.length) selectedSegment = 1;
    // }
  };

  const renderSegments = () => {
    const segmentsCount = segments.length;
    return segments.map((segment, index) => {
      const offset = index * (360 / segmentsCount);
      return (
        <div className="wheel-segment-container">
          <div
            className="wheel-segment"
            style={{ transform: `rotate(${offset}deg)` }}
          >
            <div className="wheel-segment-inner">{segment}</div>
            <div className="svg-container">
              <svg height="100%" width="100%">
                <line
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  style={{
                    strokeWidth: 10,
                    stroke: 'rgb(0, 0, 0)',
                    transformOrigin: 'bottom',
                    transform: `rotate(${360 / segmentsCount / 2}deg)`,
                  }}
                />
              </svg>
            </div>
          </div>
        </div>
      );
    });
  };

  return {
    spinning,
    rotation,
    onWheelClick,
    renderSegments,
  };
};

export default useWheel;
