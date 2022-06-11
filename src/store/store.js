import {applyMiddleware, createStore} from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import RootReducer from '../reducers/index';
import rootSaga from '../sagas/rootSaga';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);
export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);
export const persistor = persistStore(store);
export const {dispatch, getState} = store;
sagaMiddleware.run(rootSaga);
