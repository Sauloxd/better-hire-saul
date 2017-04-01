import React from 'react';
import { IndexRoute, Route } from 'react-router';

import { WhoAmI, NotFound } from './containers';

export default ([
  { path: '/me/who-am-i',
    main: () => WhoAmI()
  },
  { path: '/not-found',
    main: () => NotFound()
  }
])
