import {fetchBoard } from "../servises/async-board";
import {loadBoard} from "../store/board-reducer";
import {put, takeEvery ,call} from 'redux-saga/effects'
import {BOARD_ACTIONS} from "../enums/enums";
import axios, {AxiosResponse} from "axios";

const getTodos = () =>
    axios.get<any>("https://jsonplaceholder.typicode.com/todos");

/*переделать на доску */
function* fetchBoardWorker() {
    try {
        const response: AxiosResponse<any[]> = yield call(getTodos);
        console.log(response);
        yield put(loadBoard());
    } catch (e) {
        console.log(e)
    }
}

// следим за акшном и запускаем воркер
export function* fetchBoardWatcher() {
    yield takeEvery(BOARD_ACTIONS.ASYNC_LOAD, fetchBoardWorker);
}
