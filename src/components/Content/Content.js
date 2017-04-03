import React from 'react';
import contentStyles from './Content.styl';
import {
  Link,
	Redirect
} from 'react-router-dom';
import {WhoAmI, Skills, Experience} from '../../containers'

const Content = (props) => (
  <div onClick={props.addNewBuffer.bind(null, props.buffer)} className={(props.active) ? contentStyles.active : null} style={{ flex: 1, padding: '12px', overflowY: 'scroll' }}>
		{ (()=>{
			if(props.buffer === 'who-am-i') {
				return	WhoAmI()
			} else if (props.buffer === 'skills') {
				return	Skills()
			} else if(props.buffer === 'experience') {
				return	Experience()
			}
		})()}

  </div>
);

export default Content;
