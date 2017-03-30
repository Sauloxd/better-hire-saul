import React from 'react';
import contentStyles from './Content.styl';
import {
  Route,
  Link
} from 'react-router-dom';
import routes from '../../routes.js';

const Content = () => (
  <div style={{ flex: 1, padding: '10px' }}>
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
