import React from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import styles from './WheelResultModal.module.css';

const WheelResultModal = ({ content }) => {
  const players = useSelector((state) => state.players);
  const randomPlayer = players[Math.floor(Math.random() * players.length)];
  const result = content.replace('<random player>', randomPlayer);
  return (
    <div id="wheel-result-modal" className={styles.container}>
      <div className={styles.content}>{result}</div>
    </div>
  );
};

WheelResultModal.propTypes = {
  content: PropTypes.string.isRequired,
};

export default WheelResultModal;
