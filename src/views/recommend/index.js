// 排行榜
import React from 'react'
import SongList from '@/components/songList';
import apiRequest from '@/api';

class Recommoend extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			songList: []
		}
	}
	render() {
		return (
			<div className="page-wrapper">
				<SongList songList={this.state.songList} />
			</div>
		)
	}
	componentDidMount() {
		this.getRecommendSong();
	}
	getRecommendSong() {
		apiRequest('/recommend/songs').then(res => {
			console.log(res)
			this.setState({
				songList: res.data.dailySongs
			})
		}).catch(err => {
			console.log(err);
		})
	}
}

export default Recommoend