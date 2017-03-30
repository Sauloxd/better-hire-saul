import React from 'react';
import { IndexRoute, Route } from 'react-router';

import { Home, NotFound } from './containers';

export default ([
  { path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => Home()
  },
  { path: '/not-found',
    sidebar: () => <div>not found!</div>,
    main: () => NotFound()
  }
])
