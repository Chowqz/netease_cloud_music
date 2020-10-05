import React from  'react'
import style from './style.module.scss'
import { NavLink, withRouter} from 'react-router-dom'

class Tab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			test: 6999
		}
	}
	componentDidMount() {
		console.log(this.props)
	}
	render() {
		const pathname = this.props.location.pathname;
		const hideTab = ['/', '/user'].includes(pathname);

		return (
			<div className={style.tab} style={{display: hideTab ? 'flex' : 'none'}}>
				<NavLink className={style['tab-item']} to="/" exact replace activeClassName={style['tab-item-active']}>
					<i className={`${style['tab-icon']} iconfont icon-music`}></i>
					<span>音乐馆</span>
				</NavLink>
				<NavLink className={style['tab-item']} to="/user" replace activeClassName={style['tab-item-active']}>
					<i className={`${style['tab-icon']} iconfont icon-user`}></i>
					<span>我的</span>
				</NavLink>
			</div>
		)
	}
}

export default withRouter(Tab)