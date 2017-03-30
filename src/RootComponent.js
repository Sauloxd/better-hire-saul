import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Sidebar, Content } from './components'
import globalStyl from './theme/theme.styl'
import createBrowserHistory from 'history/createBrowserHistory'

export default class RootComponent extends React.Component {
	render() {
		const history = createBrowserHistory()
		return (
      <Router >
        <div style={{ display: 'flex', height: '100%' }}>
          <Sidebar />
          <Content />
        </div>
      </Router>
		);
	}
}
