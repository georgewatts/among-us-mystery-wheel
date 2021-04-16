import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { X, Plus } from 'react-feather';

import styles from './SettingsModal.module.css';
import { hideModal, setOptions } from '../../../store/actions';

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

const SettingsModal = () => {
  const dispatch = useDispatch();
  const options = useSelector((state) => state.options);
  const [currentOptions, setCurrentOptions] = useState(options);
  const onLastInputClick = () => {
    setCurrentOptions([...currentOptions, '']);
  };
  const onRemoveClick = (indexToRemove) => {
    setCurrentOptions(currentOptions.filter((_, index) => index !== indexToRemove));
  };
  const updateOption = (indexToChange, value) => {
    setCurrentOptions(currentOptions.map((option, index) => {
      if (index === indexToChange) {
        return value;
      }
      return option;
    }));
  };
  return (
    <div id="settings-modal">
      <h3 className={styles.title}>SETTINGS</h3>
      <div className={styles.options}>
        {currentOptions.map((option, index) => (
          <OptionInput
            // eslint-disable-next-line react/no-array-index-key
            key={`option-${index}`}
            currentValue={option}
            onChange={(value) => updateOption(index, value)}
            lastInput={index === currentOptions.length - 1 && currentOptions.length < 10}
            onLastInputClick={onLastInputClick}
            onRemoveClick={() => onRemoveClick(index)}
          />
        ))}
        <button
          className={styles.save}
          type="button"
          onClick={() => {
            dispatch(setOptions(currentOptions));
            dispatch(hideModal());
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SettingsModal;
