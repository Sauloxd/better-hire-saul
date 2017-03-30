import React from 'react'
import { BrowserRouter as Router,} from 'react-router-dom'
import { Sidebar, Content } from './components'

export default class RootComponent extends React.Component {
	render() {
		return (
			<Router>
				<div style={{ display: 'flex' }}>
          <Sidebar />
          <Content />
			  </div>
		  </Router>
		);
	}
}
