import thunk from 'redux-thunk';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import appReducer from './Reducers/Reducer';

const store = createStore(appReducer, applyMiddleware(thunk));

export default store;