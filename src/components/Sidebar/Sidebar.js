import React, {Component} from 'react';
import styles from './Sidebar.styl';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import routes from '../../routes.js';

const Sidebar = (props) => (
    <div className={styles.sidebar}>
      <ul>
        <li className={styles.sidebar__help}>" Press ? for help</li>
    <li className={styles.sidebar__details + " " + styles.sidebar__divisor }>---------Menu---------</li>
    <li className={styles.sidebar__dir}>.. (up a dir)</li>
    <li className={styles.sidebar__details}>/projects/better-hire-saul/</li>
    <li>
      <div className={styles.sidebar__dir + " " + styles.sidebar__dirOpenable}>Me:D<span className={styles.slash}>/</span></div>
    <ul className={styles.sidebar__dir__sub}>
			{console.log('fdafsa', props)}
      <a onClick={props.addNewBuffer.bind(null, 'who-am-i')} className={(props.activeIndex === 0) ? styles.highlight : null}>
        <li className={styles.sidebar__file}>
          who-am-i.md
        </li>
      </a>
      <a onClick={props.addNewBuffer.bind(null, 'skills')} className={(props.activeIndex === 1) ? styles.highlight : null}>
        <li className={styles.sidebar__file}>
          skills.md
        </li>
      </a>
      <a onClick={props.addNewBuffer.bind(null, 'experience')} className={(props.activeIndex === 2) ? styles.highlight : null}>
        <li className={styles.sidebar__file}>
          experience.md
        </li>
      </a>
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
