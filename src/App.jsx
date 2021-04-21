import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Wheel from './components/Wheel';
import { showModal } from './store/actions';
import Modal, { MODAL_TYPES } from './components/Modal';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.players);
  if (players.length === 0) {
    dispatch(showModal({ type: MODAL_TYPES.PLAYERS, closePredicate: (players.length > 0) }));
  }
  return (
    <div className="App">
      <Modal />
      <div className="header">
        <h1 className="title">Among Us Mystery Wheel v1.0</h1>
        <div className="save-buttons">
          <button
            className="save"
            type="button"
            onClick={() => {
              dispatch(showModal({ type: MODAL_TYPES.PLAYERS }));
            }}
          >
            Players
          </button>
          {/* <button
            className="save"
            type="button"
            onClick={() => {
              dispatch(showModal({ type: MODAL_TYPES.SETTINGS }));
            }}
          >
            Settings
          </button> */}
        </div>
      </div>
      <Wheel />
    </div>
  );
};

export default App;
