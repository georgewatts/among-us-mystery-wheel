export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const SET_OPTIONS = 'SET_OPTIONS';

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
