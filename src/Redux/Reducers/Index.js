import {combineReducers} from 'redux';
import authReducers from './Auth';
import homeReducers from './Home';
import profileReducers from './Profile';
import topUpReducers from './TopUp';
import editProfileReducers from './EditProfile';
import transferReducers from './Transfer';
import historyReducers from './History';

const reducers = combineReducers({
  auth: authReducers,
  home: homeReducers,
  profile: profileReducers,
  topUp: topUpReducers,
  editProfile: editProfileReducers,
  postTransfer: transferReducers,
  history: historyReducers,
});

export default reducers;
