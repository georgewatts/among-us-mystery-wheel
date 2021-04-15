import React from 'react'
import PropTypes from 'prop-types'

import useWheel from './hooks/useWheel';

import './styles.css';

const Wheel = () => {
  const { renderSegments, onWheelClick } = useWheel();
  return (
    <div>
      <div className="wheel">
        <div className="wheel-inner" style={{transform: 'rotate(1217deg)'}}>
          {renderSegments()}
        </div>
        <div className="spin-button" onClick={onWheelClick}>SPIN</div>
      </div>
    </div>
  )
}

Wheel.propTypes = {

}

export default Wheel
