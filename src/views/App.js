import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import RouterMap from '@/router'
import Player from '@/components/Player';
import Tab from '@/components/tab';

class App extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<BrowserRouter>
				<RouterMap />
				<Player />
				<Tab />
			</BrowserRouter>
		)
	}
}

export default App
