import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './style.module.scss'

import Swiper, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import './swiper-overrides.css';
import apiRequest from '@/api';
import SearchBar from '@/components/searchBar'

Swiper.use([Pagination]);

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerList: []
        }
    }
    render() {
        return (
            <div className={`page-wrapper ${style.home}`}>
	            <SearchBar />
				<div className={style['banner-container']}>
					<div className={style['banner-box']}>
						<div className="swiper-container">
						    <div className="swiper-wrapper">
							    {
							    	this.state.bannerList.map((item, index) => (
								        <div className="swiper-slide" key={index}>
								        	<img className={style['banner-pic']} src={item.pic} />
								        </div>
							    	))
							    }
						    </div>
						    <div className="swiper-pagination"></div>
						</div>
				    </div>
				</div>
				<ul className={style['nav-list']}>
					<li className={style['nav-item']}>
						<NavLink className={style['nav-item-link']} to={{pathname: '/recommend', state: '?id=123'}}>
							<span className={style['nav-item-icon']}>
								<i className="iconfont icon-date"></i>
							</span>
							<span>每日推荐</span>
						</NavLink>
					</li>
					<li className={style['nav-item']}>
						<NavLink className={style['nav-item-link']} to="/playlist">
							<span className={style['nav-item-icon']}>
								<i className="iconfont icon-playlist"></i>
							</span>
							<span>歌单</span>
						</NavLink>
					</li>
					<li className={style['nav-item']}>
						<NavLink className={style['nav-item-link']} to="/toplist">
							<span className={style['nav-item-icon']}>
								<i className="iconfont icon-toplist"></i>
							</span>
							<span>排行榜</span>
						</NavLink>
					</li>
					<li className={style['nav-item']}>
						<NavLink className={style['nav-item-link']} to="/singer">
							<span className={style['nav-item-icon']}>
								<i className="iconfont icon-singer"></i>
							</span>
							<span>歌手</span>
						</NavLink>
					</li>
				</ul>
			</div>
        )
    }
    componentDidMount() {
    	// this.login();
    	// this.getBannerList();
    }
    login() {
    	let params = {
    		phone: '15362972856',
    		password: 'Chowqz15362972856'
    	}
    	apiRequest('/login/cellphone', params).then(res => {

    	}).catch(err => {

    	})
    }
    getBannerList() {
    	let params = {
    		type: 2
    	}
        apiRequest('/banner', params).then(res => {
            this.setState({
                bannerList: res.banners
            }, () => {
                const bannerSwiper = new Swiper('.swiper-container', {
                    autoplay: true,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                    }
                })
            })
        }).catch(err => {

        })
    }
}

export default Home