import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
global.axios = require('axios');
import store from './store';
// import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
import './App.scss';

global.swal = require('sweetalert2');

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
/*
const HomeLayout = Loadable({
  loader: () => import('./containers/HomeLayout'),
  loading
});*/
// Pages
import HomeLayout from './containers/HomeLayout';
const Page404 = Loadable({
  loader: () => import('./views/Pages/Page404'),
  loading
});

const Page500 = Loadable({
  loader: () => import('./views/Pages/Page500'),
  loading
});

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route
              exact
              path="/404"
              name="Page 404"
              component={Page404}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              component={Page500}
            />
            <Route
              path="/"
              name="Home"
              component={HomeLayout}
            />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
