import { combineReducers } from 'redux';

// Gestion Articles
import articles from './articles';

const rootReducer = combineReducers({ articles });

export default rootReducer;
