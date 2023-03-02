import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import listReducer from './listReducer';

const rootReducer = combineReducers({moviesReducer, listReducer})

export default rootReducer;