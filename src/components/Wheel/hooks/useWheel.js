/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../../../store/actions';
import { MODAL_TYPES } from '../../Modal';

const ANIMATION_DURATION = 5000;
const useWheel = () => {
  const segments = useSelector((state) => state.options);
  const dispatch = useDispatch();
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const initialRotationOffset = (360 / segments.length) / 2;
  const mp3 = new Audio('/thewheelhausaudio.mp3');

  const onWheelClick = () => {
    if (!spinning) {
      setSpinning(true);
      mp3.play();
      const randomOffset = 360 / segments.length;
      const randomDegrees = Math.floor(Math.random() * 360) - randomOffset;
      const newRotation = rotation + randomDegrees + 720;
      setRotation(newRotation);
      const actualRotationBetweenSegments = newRotation % 360;
      let selectedSegment = Math.ceil(
        (initialRotationOffset + (360 - actualRotationBetweenSegments)) / (360 / segments.length),
      );
      if (selectedSegment > segments.length) selectedSegment = 1;
      setTimeout(() => {
        setSpinning(false);
        dispatch(showModal({
          type: MODAL_TYPES.WHEEL_RESULT,
          content: segments[selectedSegment - 1],
        }));
      }, ANIMATION_DURATION);
    }
  };

  const renderSegments = () => {
    const segmentsCount = segments.length;
    return segments.map((_, index) => {
      const offset = index * (360 / segmentsCount);
      return (
        <div className="wheel-segment-container">
          <div
            className="wheel-segment"
            style={{ transform: `rotate(${offset}deg)` }}
          >
            <div className="wheel-segment-inner">{index + 1}</div>
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
                    strokeLinecap: 'round',
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
