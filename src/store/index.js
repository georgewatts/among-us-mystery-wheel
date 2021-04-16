import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { modal, options } from './reducers';

const store = configureStore({
  reducer: combineReducers({ modal, options }),
});

export default store;
