import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { XCircle } from 'react-feather';

import { hideModal } from '../../store/actions';
import SettingsModal from './SettingsModal';
import WheelResultModal from './WheelResultModal';

import './styles.css';
import PlayersModal from './PlayersModal';

export const MODAL_TYPES = {
  SETTINGS: 'SETTINGS',
  WHEEL_RESULT: 'WHEEL_RESULT',
  PLAYERS: 'PLAYERS',
};

const MODALS = {
  [MODAL_TYPES.SETTINGS]: SettingsModal,
  [MODAL_TYPES.WHEEL_RESULT]: WheelResultModal,
  [MODAL_TYPES.PLAYERS]: PlayersModal,
};

const Modal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const ModalComponent = MODALS[modal.type];
  const onClickClose = () => {
    if (modal.closePredicate) {
      dispatch(hideModal());
    }
  };
  return modal.active
    ? (
      <div className="modal-background">
        <div className="modal-container">
          <XCircle onClick={onClickClose} />
          <div style={{ width: '100%' }}>
            <ModalComponent content={modal.content} />
          </div>
        </div>
      </div>
    )
    : null;
};

export default Modal;
