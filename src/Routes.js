import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppliedRoute from "./components/AppliedRoute";
import Home from './containers/Home';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import NotFound from './containers/NotFound';

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/signup" exact component={SignUp} props={childProps} />
    <Route component={NotFound} />
  </Switch>;
