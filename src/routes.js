import React from 'react';
import { IndexRoute, Route } from 'react-router';

import { App, Home, About, NotFound, StyleScoping } from './containers';

export default ([
  { path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => Home()
  },
  { path: '/about',
    sidebar: () => <div>About!</div>,
    main: () => About()
  }
])
