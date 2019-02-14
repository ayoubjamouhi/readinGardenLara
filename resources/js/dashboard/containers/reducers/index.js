import { combineReducers } from 'redux';

// Gestion articles
import articles from './articles';

const rootReducer = combineReducers({ articles });

export default rootReducer;
