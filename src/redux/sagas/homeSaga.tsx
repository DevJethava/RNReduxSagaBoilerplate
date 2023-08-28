import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { API } from '../../services';
import { StorageUtils } from '../../utils';

import { loader } from '../actions/appLoaderActions';
import { setDarkTheme, setLightTheme } from '../actions/homeActions';

function* lightTheme({ resolve, reject }) {
    try {
        yield put(setLightTheme());
        yield call(StorageUtils.setTheme, 'light');
        resolve(true);
    } catch (error) {
        reject(false);
    }
}

function* darkTheme({ resolve, reject }) {
    try {
        yield put(setDarkTheme());
        yield call(StorageUtils.setTheme, 'dark');
        resolve(true);
    } catch (error) {
        reject(false);
    }
}

function* getDashbordData({ data, resolve, reject }) {
    yield put(loader(true));
    try {
        let response = yield call(API.getDashbordData, data);
        // console.log('DashbordData =>', response);
        resolve(response);
    } catch (error) {
        reject(error);
    }
    yield put(loader(false));
}

function* insertHistoryData({ data, resolve, reject }) {
    yield put(loader(true));
    try {
        let oldData = []
        let mData = yield call(StorageUtils.getHistoryData);
        if (mData !== null) {
            oldData = JSON.parse(mData);
        }
        oldData.splice(0, 0, data);
        yield call(StorageUtils.setHistoryData, JSON.stringify(oldData));
        resolve(true);
    } catch (error) {
        console.log(error)
        reject(false);
    }
    yield put(loader(false));
}

function* readHistoryData({ resolve, reject }) {
    yield put(loader(true));
    try {
        let mData = yield call(StorageUtils.getHistoryData);
        resolve(mData);
    } catch (error) {
        reject(error);
    }
    yield put(loader(false));
}

function* clearHistory({ resolve, reject }) {
    yield put(loader(true));
    try {
        let oldData = []
        yield call(StorageUtils.setHistoryData, JSON.stringify(oldData));
        resolve(true);
    } catch (error) {
        reject(false);
    }
    yield put(loader(false));
}

export function* watchSagas() {
    yield takeLatest(actionTypes.THEME_CHANGE_LIGHT, lightTheme);
    yield takeLatest(actionTypes.THEME_CHANGE_DARK, darkTheme);

    // Home
    yield takeLatest(actionTypes.HOME_GET_DASHBORD_DATA, getDashbordData);

    // Storage
    yield takeLatest(actionTypes.STOREGE_INSERT_HISTORY_DATA, insertHistoryData);
    yield takeLatest(actionTypes.STOREGE_READ_HISTORY_DATA, readHistoryData);
    yield takeLatest(actionTypes.STOREGE_CLEAR_HISTORY_DATA, clearHistory);
}

export default function* authSaga() {
    yield all([fork(watchSagas)]);
}
