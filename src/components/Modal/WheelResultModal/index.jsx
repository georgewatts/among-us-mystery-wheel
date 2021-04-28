import React from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import styles from './WheelResultModal.module.css';

const useModalContent = (content) => {
  const players = useSelector((state) => state.players);
  const { userType } = useSelector((state) => state.userSettings);
  const impostorOptions = useSelector((state) => state.impostorOptions);
  if (userType === 'crewmate') {
    const randomPlayer = players[Math.floor(Math.random() * players.length)];
    return content.replace('<random player>', randomPlayer);
  }
  const randomOption = impostorOptions[Math.floor(Math.random() * impostorOptions.length)];
  const player = players[content];
  return randomOption.replace('<random player>', player);
};

const WheelResultModal = ({ content }) => {
  const result = useModalContent(content);
  return (
    <div id="wheel-result-modal" className={styles.container}>
      <div className={styles.content}>{result}</div>
    </div>
  );
};

WheelResultModal.propTypes = {
  content: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
};

export default WheelResultModal;
