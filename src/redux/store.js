/* eslint-disable @typescript-eslint/no-var-requires */
import { Store, combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { Context, HYDRATE, createWrapper } from 'next-redux-wrapper';

import { persistStore } from 'redux-persist';

const combinedReducer = combineReducers(rootReducer);

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    // if (state.X) nextState.X = state.X // preserve X reducer value on client side navigation
    if (state.login) nextState.login = state.login; // preserve login reducer value on client side navigation
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};


const store = (ctx) => {
  const middleWare = [thunk];
  const isClient = typeof window !== 'undefined';
  if (isClient) {
    const { persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;
    const persistConfig = {
      key: 'nextjs',
      whitelist: ['onboard', 'claimStore', 'accountRecovery'],
      storage,
    };
    const _store = createStore(
      persistReducer(persistConfig, reducer),
      undefined,
      applyMiddleware(...middleWare)
    );
    const persistor = persistStore(_store, {}, () => {
      persistor.persist();
    });
    _store.__PERSISTOR = persistor;
    return _store;
  } else {
    return createStore(reducer, undefined, applyMiddleware(...middleWare));
  }
};

export const wrapper = createWrapper(store);
