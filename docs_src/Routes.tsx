import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

import PageRoot from './PageRoot';
import IndexPage from './pages/IndexPage';

const Page1: React.SFC<{}> = (props) => {
  return (
    <p> page1</p>
  );
}

function getRoutePath(basePath: string) {
  return (
    <Route path={basePath} component={PageRoot} >
      <IndexRoute component={IndexPage} />
      <Route path="page1" component={Page1} />
    </Route>
  );
}

export default (
  <Route path="/">
    {getRoutePath('react-analytics-context')}
  </Route>
);