import React from 'react';
import style from './style.module.scss';

class SongList extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	render() {
		return (
			<div className={style['song-list-wrapper']}>
				<div className={style['song-list-header']}>
					<div className={style['play-all']}>
						<i className={`iconfont icon-play ${style['play-all-icon']}`}></i>
						<span className={style['play-all-text']}>全部播放（共{this.props.songList.length}首）</span>
					</div>
				</div>
				<ul className={style['song-list']}>
				{
					this.props.songList.map((item, index) => {
						let singers = item.ar.map(arItem => arItem.name).join('/');
						return (
							<li className={style['song-item']} key={index} onClick={() => this.handleClick(index)}>
								<div className={style['song-item-l']}>
									<span className={style['song-index']}>{index+1}</span>
									<img className={style['song-album-pic']} src={item.al.picUrl} alt="专辑封面" />
								</div>
								<div className={style['song-item-m']}>
									<div className={style['song-text-t']}>{item.name}</div>
									<div className={style['song-text-b']}>{singers} - {item.al.name}</div>
								</div>
								<i className={`iconfont icon-play ${style['song-item-r']}`}></i>
							</li>
						)
					})
				}	
				</ul>
			</div>
		)
	}
	handleClick(index) {
		console.log(index)
	}
}

export default SongList