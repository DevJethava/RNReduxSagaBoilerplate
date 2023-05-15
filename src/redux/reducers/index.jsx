import { combineReducers } from 'redux';

import homeReducer from './homeReducer';
import appLoaderReducer from './appLoaderReducer';

export const rootReducer = combineReducers({
  appLoader: appLoaderReducer,
  home: homeReducer,
});
