import { SHOW_MODAL, HIDE_MODAL, SET_OPTIONS } from './actions';

const MODAL_DEFAULT_STATE = {
  active: false,
  modalType: null,
};
export const modal = (state = MODAL_DEFAULT_STATE, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { active: true, type: action.payload.type, content: action.payload.content };
    case HIDE_MODAL:
      return MODAL_DEFAULT_STATE;
    default:
      return state;
  }
};

const OPTIONS_DEFAULT_STATE = [
  'Refer to everyone as <character color> nonce for this meeting',
  'You must only mime for this meeting',
  'You must only communicate in spanish for this meeting',
  'VOTE FOR JONESY (skip if he is already dead)',
  'Pick someone random and say you saw them vent',
];

export const options = (state = OPTIONS_DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_OPTIONS:
      return action.payload;
    default:
      return state;
  }
};
