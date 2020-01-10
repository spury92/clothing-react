import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from 'redux-saga';

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const SagaMiddleware = createSagaMiddleware();
const middlewares = [SagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

SagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
