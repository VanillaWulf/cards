import {createStore, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

import { boardReducer} from "./board-reducer";
import { profileReducer } from "./profile-reducer";

const rootReducer = combineReducers({
    boardPage: boardReducer,
    profilePage: profileReducer
});

export const store = createStore(rootReducer, composeWithDevTools());
