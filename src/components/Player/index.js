import React from 'react';
import apiRequest from '@/api';


class Player extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTime: 0
		}
		this.init();
	}
	render() {
		return (
			<div>
				
			</div>
		)
	}
	componentDidMount() {
		// apiRequest('/song/url?id=5248928').then(res => {
		// 	console.log(res.data)
		// })

		let url = 'http://m8.music.126.net/20201006013949/7ab381fea2202883df10f34b21984e41/ymusic/d012/fc43/2387/2a1971ec0b113532aeb1c2e566876c59.mp3';
		this.startPlayer(url);
	}
	init() {
		this.playerInstance = new QMplayer();

		this.playerInstance.on('timeupdate', e => {
			this.setState({
				currentTime: e.currentTime
			})
		})
	}
	startPlayer(url) {
		this.playerInstance.play(url)
	}
}

export default Player