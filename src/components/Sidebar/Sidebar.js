import React from 'react';
import sidebarStyles from './Sidebar.styl';
import {
  Route,
  Link
} from 'react-router-dom';
import routes from '../../routes.js';

const Sidebar = () => (
  <div style={{
    padding: '10px',
    width: '40%',
    background: '#f0f0f0'
  }}>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      <li><Link to="/">Home</Link></li>
    <li><Link to="/bubblegum">Bubblegum</Link></li>
    <li><Link to="/shoelaces">Shoelaces</Link></li>
    </ul>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.sidebar}
      />
    ))}
  </div>
);

export default Sidebar;
