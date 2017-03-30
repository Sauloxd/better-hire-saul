import React, {Component} from 'react';
import styles from './Sidebar.styl';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import routes from '../../routes.js';

const Sidebar = () => (
    <div className={styles.sidebar}>
      <ul>
        <li className={styles.sidebar__help}>" Press ? for help</li>
    <li className={styles.sidebar__details + " " + styles.sidebar__divisor }>---------Menu---------</li>
    <li className={styles.sidebar__dir}>.. (up a dir)</li>
    <li className={styles.sidebar__details}>/projects/better-hire-saul/</li>
    <li>
      <div className={styles.sidebar__dir + " " + styles.sidebar__dirOpenable}>Me:D<span className={styles.slash}>/</span></div>
    <ul className={styles.sidebar__dir__sub}>
      <NavLink to="/me/who-am-i" activeClassName={styles.highlight}>
        <li className={styles.sidebar__file}>
          who-am-i.md
        </li>
      </NavLink>
      <NavLink to="/me/skills" activeClassName={styles.highlight}>
        <li className={styles.sidebar__file}>
          skills.md
        </li>
      </NavLink>
      <NavLink to="/me/experience" activeClassName={styles.highlight}>
        <li className={styles.sidebar__file}>
          experience.md
        </li>
      </NavLink>
    </ul>
    </li>
    <li>
      <div className={styles.sidebar__dir + " " + styles.sidebar__dirOpenable}>Blog<span className={styles.slash}>/</span></div>
    <ul className={styles.sidebar__dir__sub}>
      <li className={styles.sidebar__file}>coming-soon.txt</li>
      <li className={styles.sidebar__file}></li>
    </ul>
    </li>
    </ul>
  </div>
);

export default Sidebar;
