/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import AppNavContext from '../parts/app/app-nav-context';
import { Router } from 'react-router';
import { Card } from 'react-router-navigation';
import AppStack from '../parts/app/app-stack';
import Login from '../login';
import LogoTitle from '../components/logo-title';

const LoginStack = () => (
  <AppNavContext.Consumer>
    {(context) => (
      <Router history={context.histories.login}>
        <AppStack>
          <Card path="/login" component={Login as any} renderTitle={LogoTitle} />
        </AppStack>
      </Router>
    )}
  </AppNavContext.Consumer>
);

export default LoginStack;
