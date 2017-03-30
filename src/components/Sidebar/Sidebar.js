import React from 'react';
import styles from './Sidebar.styl';
import {
  Route,
  Link
} from 'react-router-dom';
import routes from '../../routes.js';
console.log('style', styles)
const Sidebar = () => (
  <div className={styles.sidebar}>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      <li>" Menu</li>
      <li>.. (up a dir)</li>
      <li>
        <div>Me :D<span>/</span></div>
        <ul>
          <li><Link to="/who-am-i"> who-am-i.md</Link></li>
          <li>skills.txt</li>
          <li>experience.txt</li>
        </ul>
      </li>
      <li>
        <div>Blog<span>/</span></div>
        <ul>
          <li>coming-soon.txt</li>
        </ul>
      </li>
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
