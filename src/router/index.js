import React from 'react'
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom'
import loadable from 'loadable-components'
import Home from '@/views/home';
import User from '@/views/user';
import Recommend from '@/views/recommend';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ANIMATION_MAP = {
    PUSH: 'forward',
    POP: 'back'
}

const RouterMap = withRouter(({ location, history }) => (
    <TransitionGroup className={'router-view'} childFactory={child => React.cloneElement(child, {classNames: ANIMATION_MAP[history.action]})}>
    	<CSSTransition timeout={300} key={location.pathname}>
			<Switch location={location}>
				<Route path="/" exact component={Home} />
				<Route path="/user" component={User} />
				<Route path="/recommend" component={Recommend} />
				<Route path="/playlist" component={loadable(() => import('@/views/playlist'))} />
				<Route path="/toplist" component={loadable(() => import('@/views/toplist'))} />
				<Route path="/singer" component={loadable(() => import('@/views/singer'))} />
			</Switch>
		</CSSTransition>
	</TransitionGroup>
))

export default RouterMap