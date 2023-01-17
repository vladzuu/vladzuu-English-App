import irregularVerbs from './slice/irregularVerbsSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from "react-redux";
import SagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const saga = SagaMiddleware()

const rootReducer = combineReducers({
  irregularVerbs,
});

const persistConfig = {
  key: 'English',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    persistedReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
  }).concat(saga),

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
saga.run(rootSaga)
export const persistor = persistStore(store);
export default store;
