import { combineReducers } from 'redux';
import posts from './posts'; 

const rootReducer = combineReducer({
  posts, 
});

export default rootReducer; 