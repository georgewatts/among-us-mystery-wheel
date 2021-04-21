import {
  SHOW_MODAL, HIDE_MODAL, SET_OPTIONS, SET_PLAYERS,
} from './actions';

const MODAL_DEFAULT_STATE = {
  active: false,
  modalType: null,
};
export const modal = (state = MODAL_DEFAULT_STATE, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      console.log(action);
      return {
        active: true,
        type: action.payload.type,
        content: action.payload.content,
        closePredicate: action.payload.closePredicate ?? true,
      };
    case HIDE_MODAL:
      return MODAL_DEFAULT_STATE;
    default:
      return state;
  }
};

const OPTIONS_DEFAULT_STATE = [
  'You cannot speak and must only gesture/mime for this meeting',
  'VOTE FOR JONESY (skip if he is already dead)',
  'Say you saw <random player> vent',
  'You must say "cucumber" in this meeting',
  'Follow <random player> around until the next meeting',
  'Convince the rest of the players you did a task you clearly did not do',
];

export const options = (state = OPTIONS_DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_OPTIONS:
      return action.payload;
    default:
      return state;
  }
};

export const players = (state = [], action) => {
  switch (action.type) {
    case SET_PLAYERS:
      return action.payload;
    default:
      return state;
  }
};
