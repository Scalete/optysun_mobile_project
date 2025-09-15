import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userParametersReducer, {
  IUserParametersState,
} from './user-parameters/slice';
import questionnaireReducer, {
  IQuestionnaireState,
} from './questionnaire/slice';

export type RootState = ReturnType<typeof rootReducer>;

const userParamsPersistConfig = {
  key: 'userParams',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const questionnairePersistConfig = {
  key: 'questionnaire',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  userParameters: persistReducer<IUserParametersState>(
    userParamsPersistConfig,
    userParametersReducer,
  ),
  questionnaire: persistReducer<IQuestionnaireState>(
    questionnairePersistConfig,
    questionnaireReducer,
  ),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        serializableCheck: false,
      },
    }),
});

export const persistor = persistStore(store);
export default store;

export type AppDispatch = typeof store.dispatch;
