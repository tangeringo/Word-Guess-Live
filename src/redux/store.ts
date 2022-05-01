import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}


export type RootState = ReturnType<typeof rootReducer>

type ExtendededPersistConfig = PersistConfig<RootState> & {
    whiteList: (keyof RootState)[]
}

const persistConfig: ExtendededPersistConfig = {
    key: 'root',
    storage,
    whiteList: ['user'],
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [
    process.env.NODE_ENV !== 'production' && logger,
    sagaMiddleware
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composeEnhancer = (
    process.env.NODE_ENV !== 'production' && 
    window && 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose
;

const composeEnhancers = composeEnhancer(applyMiddleware(...middlewares))

export const store = createStore(persistedReducer, undefined, composeEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);