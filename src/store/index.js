import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './state';
import rootSaga from './sagas';
import errorHandlerMiddleware from './middleware/errorHandler';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, errorHandlerMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
