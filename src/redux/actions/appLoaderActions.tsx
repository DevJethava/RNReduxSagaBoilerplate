import * as actionTypes from './actionTypes';

export const appLoader = loading => {
    return { type: actionTypes.APP_LOADING, loading };
};

export const loader = loading => {
    return { type: actionTypes.LOADING, loading };
};
