import {combineReducers} from 'redux';
import HomeData from '../slice/dataSlice/index';

const RootReducer = combineReducers({
  Home: HomeData,
});

export default RootReducer;
