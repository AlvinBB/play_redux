import React from 'react';
import { Route, IndexRoute  } from 'react-router';

import RootContainer from './containers/RootContainer';
import Error from './containers/Error';

export default (
    <Route path="/">
        <IndexRoute component={RootContainer} />
        <Route path="/" compoentn={RootContainer}/>
        <Route path="*" component={Error}/>
    </Route>
);