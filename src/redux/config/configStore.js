import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({});

const store = configureStore({
  reducer: rootReducer
});

const getStore = () => store;
export default getStore;
