import {combineReducers} from 'redux';
import authReducers from './Auth';

const reducers = combineReducers({
  auth: authReducers,
});

export default reducers;
