import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import { fetchBoardWatcher } from '../saga/async-borad-actions';

import { boardReducer} from "./board-reducer";
import { profileReducer } from "./profile-reducer";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleWare = createSagaMiddleware();

const rootReducer = combineReducers({
    boardPage: boardReducer,
    profilePage: profileReducer
});

// export const store = createStore(rootReducer, composeWithDevTools());
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(fetchBoardWatcher);
