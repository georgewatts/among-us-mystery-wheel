import React from 'react';
import PropTypes from 'prop-types';
import { X, Plus } from 'react-feather';

import styles from './optioninput.module.css';

const OptionInput = ({
  currentValue, onChange, lastInput, onLastInputClick, onRemoveClick,
}) => (
  <div className={styles['option-container']}>
    <input
      className={styles.option}
      value={currentValue}
      onChange={(event) => onChange(event.target.value)}
    />
    <X color="red" onClick={onRemoveClick} />
    {lastInput && <Plus color="green" onClick={onLastInputClick} />}
  </div>
);

OptionInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  lastInput: PropTypes.bool.isRequired,
  currentValue: PropTypes.string.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onLastInputClick: PropTypes.func.isRequired,
};

export default OptionInput;
