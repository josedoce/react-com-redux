import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from "redux-devtools-extension";

import gameReducer from './reducers';
import gameSaga from './sagas';
  
  
  const sagaMiddleware = createSagaMiddleware();
  
  const store = createStore(
    gameReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  
  sagaMiddleware.run(gameSaga);
  
  export default store;
  