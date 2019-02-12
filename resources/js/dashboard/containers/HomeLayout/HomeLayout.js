import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from './../actions/actionCreators';
import { bindActionCreators } from 'redux';

// routes config
import routes from '../../routes';
// Header
import Header from './Header';

class App extends Component {
  async componentDidMount() {
    try {
      const { data } = await axios.get('/articles');
      console.log(data);
      this.props.fetchArticles(data);
    } catch (erreur) {
      console.log(erreur);
    }
  }
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    const { ...rest } = this.props
    return (

      <div className="app">
        <Header />
        <div className="app-body">
          <main className="main">

              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    const mprops = {...rest}
                    return (route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        mprops
                        render={props => (
                          <route.component {...props} {...mprops}/>
                        )} />
                    ) : (null));
                  }
                  )}
                  <Redirect from="/" to="/home" />
                </Switch>
              </Suspense>

          </main>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const HomeLayout = connect(mapStateToProps, mapDispachToProps)(App);

export default HomeLayout;
