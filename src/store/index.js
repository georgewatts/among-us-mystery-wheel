import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
  modal, options, players, userSettings, impostorOptions,
} from './reducers';

const store = configureStore({
  reducer: combineReducers({
    modal, options, players, userSettings, impostorOptions,
  }),
});

export default store;
