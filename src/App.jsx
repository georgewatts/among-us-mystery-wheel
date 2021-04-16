import React from 'react';
import { Settings } from 'react-feather';
import { useDispatch } from 'react-redux';

import Wheel from './components/Wheel';
import { showModal } from './store/actions';
import Modal, { MODAL_TYPES } from './components/Modal';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Modal />
      <div className="header">
        <h1 className="title">Among Us Mystery Wheel v1.0</h1>
        <Settings color="white" onClick={() => dispatch(showModal({ type: MODAL_TYPES.SETTINGS }))} />
      </div>
      <Wheel />
    </div>
  );
};

export default App;
