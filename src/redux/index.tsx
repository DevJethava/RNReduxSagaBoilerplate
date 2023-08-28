import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { rootReducer as reducers } from './reducers';
import rootSaga from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

// creating saga middleware
const sagaMiddleware = createSagaMiddleware();
// creating enhancer to compose redux store with created middleware
const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));
// creating redux store with reducers and enhancer
export const store = createStore(reducers, undefined, enhancer);
// creating persistor to persist store
export const persistor = persistStore(store, undefined, () => store.getState());
// running the saga middle ware to listen to actions
sagaMiddleware.run(rootSaga);
// entire state of redux
