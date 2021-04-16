import React from 'react';
import PropTypes from 'prop-types';

import styles from './WheelResultModal.module.css';

const WheelResultModal = ({ content }) => (
  <div id="wheel-result-modal" className={styles.container}>
    <div className={styles.content}>{content}</div>
  </div>
);

WheelResultModal.propTypes = {
  content: PropTypes.string.isRequired,
};

export default WheelResultModal;
