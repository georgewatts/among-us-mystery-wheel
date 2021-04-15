const useWheel = () => {
  const mp3 = new Audio('/thewheelhausaudio.mp3');

  const segments = ['Upper Segment', 'Lower Segment', 'third segment'];

  const onWheelClick = () => {
    mp3.play();
  }

  const renderSegments = () => {
    const segmentsCount = segments.length;
    return segments.map((segment, index) => {
      const offset = index * (360 / segmentsCount);
      return (
        <div
          className="wheel-segment"
          style={{ transform: `rotate(${offset}deg)` }}
        >
          <div className="wheel-segment-inner">{segment}</div>
        </div>
      );
    });
  }

  return {
    onWheelClick,
    renderSegments,
  }
};

export default useWheel;
