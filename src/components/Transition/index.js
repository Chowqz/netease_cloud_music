import React from 'react';
import './style.scss';
import { CSSTransition } from 'react-transition-group'

class Transition extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { inStatus = true, timeout = 3000, animationClass = 'fade', appear = false, unmountOnExit = false } = this.props;
		return (
			<CSSTransition classNames={animationClass} in={inStatus} timeout={timeout} appear={appear} unmountOnExit={unmountOnExit}>
				{this.props.children}
			</CSSTransition>
		)
	}
}

export default Transition