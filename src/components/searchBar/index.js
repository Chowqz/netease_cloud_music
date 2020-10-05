import React from  'react'
import style from './style.module.scss'
import { NavLink } from 'react-router-dom'

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleClear = this.handleClear.bind(this);
	}
	render() {
		return (
			<div className={style['search-bar']}>
				<i className={`iconfont icon-search ${style['search-icon']}`}></i>
				<div className={style['search-input-box']}>
					<input className={style['search-input']} value={this.state.value} onChange={this.handleChange} placeholder="搜索歌曲、歌手、专辑" />
				</div>
				<span className={style['delete-btn']}>
					{
						this.state.value && <i className={`iconfont icon-delete ${style['delete-icon']}`} onClick={this.handleClear}></i>
					}
				</span>
			</div>
		)
	}
	handleChange(e) {
		this.setState({
			value: e.target.value
		})
	}
	handleClear() {
		this.setState({
			value: ''
		})
	}
}

export default SearchBar