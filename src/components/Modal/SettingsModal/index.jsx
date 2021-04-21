import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import OptionInput from '../../OptionInput';
import { hideModal, setOptions } from '../../../store/actions';

import styles from './SettingsModal.module.css';

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
