import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Sidebar, Content } from './components'
import globalStyl from './theme/theme.styl'
import createBrowserHistory from 'history/createBrowserHistory'

const overlayStyle = {
	backgroundColor: 'rgba(0, 0, 0, 0.4)',
	height: '100%',
	width: '100%',
	zIndex: '1',
	position: 'absolute',
	pointerEvents: 'none'
}

class RootComponent extends React.Component {
  constructor(props, context) {
		super(props, context);

		this.state = {
			active: 0,
			buffers: ['who-am-i']
		}
	};
	addNewBuffer(buffer) {
		if(this.state.buffers.indexOf(buffer) < 0) {
			this.state.buffers.push(buffer)
			this.state.active = this.state.buffers.length - 1 //Last index
		} {
			this.state.active = this.state.buffers.indexOf(buffer) //Point to the index of the buffer
		}

		this.setState(this.state)
	}
	render() {
		const history = createBrowserHistory()
		return (
      <Router history="" >
        <div style={{ display: 'flex', height: '100%' }}>
					<div style={overlayStyle}></div>
          <Sidebar activeIndex={this.state.active} addNewBuffer={this.addNewBuffer.bind(this)} />
					{this.state.buffers.map((file, index)=>{
						return <Content key={file} buffer={file} active={ index === this.state.active }/>
					})}
        </div>
      </Router>
		);
	}
}

ReactDOM.render(<RootComponent />, document.getElementById('app-root'));

