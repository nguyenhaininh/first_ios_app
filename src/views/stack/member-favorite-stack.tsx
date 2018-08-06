/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import AppNavContext from '../parts/app/app-nav-context';
import { Router } from 'react-router';
import AppStack from '../parts/app/app-stack';
import { Card } from 'react-router-navigation';
import MemberFavorite from '../member-favorite';

class MemberFavoriteStack extends React.PureComponent<{}> {
  render() {
    return (
      <AppNavContext.Consumer>
        {(context) => (
          <Router history={context.histories.member.favorite}>
            <AppStack>
              <Card exact path="/member/favorite"
                component={MemberFavorite as any} />
            </AppStack>
          </Router>
        )}
      </AppNavContext.Consumer>
    );
  }
}

export default MemberFavoriteStack;
