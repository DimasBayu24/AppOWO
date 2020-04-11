import {combineReducers} from 'redux';
import authReducers from './Auth';
import homeReducers from './Home';
import profileReducers from './Profile';

const reducers = combineReducers({
  auth: authReducers,
  home: homeReducers,
  profile: profileReducers,
});

export default reducers;
