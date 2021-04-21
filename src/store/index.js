import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { modal, options, players } from './reducers';

const store = configureStore({
  reducer: combineReducers({ modal, options, players }),
});

export default store;
