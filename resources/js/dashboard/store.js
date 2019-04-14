import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
// import the root reducer
import rootReducer from './containers/reducers/index';

// create an object for the default data
const defaultState = {
  articles: [],
  isLogin: false
};
const enhacers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(rootReducer, defaultState, enhacers);

if(module.hot) {
  module.hot.accept('./containers/reducers/',() => {
    const nextRootReducer = require('./containers/reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;