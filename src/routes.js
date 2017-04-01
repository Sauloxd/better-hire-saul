import React from 'react';
import { IndexRoute, Route } from 'react-router';

import { WhoAmI } from './containers';

export default ([
  { path: '/',
    main: () => WhoAmI(),
		exact: true
  },
  { path: '/blog',
    main: () => WhoAmI(),
  },
])


