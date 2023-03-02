import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import listReducer from './listReducer';

const rootReducer = combineReducers({movieReducer, listReducer})

export default rootReducer;