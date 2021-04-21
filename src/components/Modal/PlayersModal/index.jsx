/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { XCircle } from 'react-feather';
import difference from 'lodash.difference';

import { hideModal, setPlayers } from '../../../store/actions';

import styles from './PlayersModal.module.css';

const USUAL_PLAYERS = [
  'Adam',
  'Alex',
  'Andy',
  'Chris',
  'Figg',
  'George',
  'Hews',
  'James',
  'Jonesy',
  'Matt',
  'Will',
];

const PlayersModal = () => {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.players);
  const [selectedPlayers, setSelectedPlayers] = useState(players);
  const unselectedPlayers = difference(USUAL_PLAYERS, selectedPlayers);
  const addPlayer = (player) => {
    setSelectedPlayers([...selectedPlayers, player]);
  };
  const removePlayer = (player) => {
    setSelectedPlayers(difference(selectedPlayers, [player]));
  };
  return (
    <div>
      <h2>Select the players playing apart from yourself</h2>
      {unselectedPlayers.length > 0 && (
        <div>
          <span>The usual suspects (click to add):</span>
          <div className={styles['players-container']}>
            {unselectedPlayers.map(
              (player) => <p onClick={() => addPlayer(player)}>{player}</p>,
            )}
          </div>
        </div>
      )}
      <div>
        {`Selected Players (${selectedPlayers.length}): `}
        <div className={styles['selected-players']}>
          {selectedPlayers.sort().map((selectedPlayer) => (
            <div className={styles['selected-player']}>
              <p>{selectedPlayer}</p>
              <XCircle onClick={() => removePlayer(selectedPlayer)} />
            </div>
          ))}
        </div>
      </div>
      <button
        className="save"
        type="button"
        onClick={() => {
          dispatch(setPlayers(selectedPlayers));
          dispatch(hideModal());
        }}
      >
        Save
      </button>
    </div>
  );
};

export default PlayersModal;
