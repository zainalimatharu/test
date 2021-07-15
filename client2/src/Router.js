import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Login from '../../client2/src/pages/Login/Login';
import Dashboard from '../../client2/src/pages/Dashboard/Dashboard';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      {/* <Route
        exact
        path="/"
        render={() =>
          loading ? (
            <Loading />
          ) : isAuthenticated && (systemRole === 'ADMIN' || systemRole === 'SUB_ADMIN') ? (
            <Redirect to="/admin" />
          ) : isAuthenticated && systemRole === 'USER' ? (
            <Redirect to="/me" />
          ) : (
            <Redirect to="/auth" />
          )
        }
      /> */}
      {/* auth route */}
      {/* <Route
        path="/auth"
        render={() =>
          loading ? (
            <Loading />
          ) : isAuthenticated && systemRole === 'ADMIN' ? (
            <Redirect to="/admin" />
          ) : isAuthenticated && systemRole === 'USER' ? (
            <Redirect to="/me" />
          ) : (
            <Auth />
          )
        }
      /> */}
    </Switch>
  );
};

export default withRouter(Router);
