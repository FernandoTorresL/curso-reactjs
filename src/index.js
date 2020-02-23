import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css'

import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(
<Badge
	firstName="Fer"
	lastName="Torres"
	avatar="https://s.gravatar.com/avatar/df4dcd1833595186c053f0cf369a6c79?s=80"
	jobTitle="Data Scientist"
	twitter="fertorresmx"

	/>, container);
