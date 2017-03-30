import React from 'react';
import contentStyles from './Content.styl';
import {
  Route,
  Link,
	Redirect
} from 'react-router-dom';
import routes from '../../routes.js';

const Content = () => (
  <div style={{ flex: 1, padding: '10px' }}>
  	<Route exact path="/" render={() => <Redirect to="/me/who-am-i" />} />
    {routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      component={route.main}
    />
    ))}
  </div>
);

export default Content;
