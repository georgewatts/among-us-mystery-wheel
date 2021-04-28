export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const SET_OPTIONS = 'SET_OPTIONS';
export const SET_PLAYERS = 'SET_PLAYERS';
export const SET_USER_SETTINGS = 'SET_USER_SETTINGS';
export const SET_IMPOSTOR_OPTIONS = 'SET_IMPOSTOR_OPTIONS';

export const showModal = (modal) => ({
  type: SHOW_MODAL,
  payload: modal,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});

export const setOptions = (options) => ({
  type: SET_OPTIONS,
  payload: options,
});

export const setPlayers = (players) => ({
  type: SET_PLAYERS,
  payload: players,
});

export const setUserSettings = (settings) => ({
  type: SET_USER_SETTINGS,
  payload: settings,
});

export const setImpostorOptions = (options) => ({
  type: SET_IMPOSTOR_OPTIONS,
  payload: options,
});
