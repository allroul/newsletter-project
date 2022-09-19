import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import '../main.scss'

const Main = () => {
    const newsData = useSelector(state => state.news.news);  
    const mainNews = newsData.filter((item, index) => {
        if(index > 0 && index <= 6) {
            return item
        }
    })

    const {status} = useSelector(state => state.news);    

    return (
        <div className="main">            
            <div className="container">
                <h1 className="main__title">
                    Всегда <br/>свежие <span>новости</span>
                </h1>
                {status === 'loading' && <div className="server-status-text">Loading...</div>}
                {status === 'rejected' && <div className="server-status-text">Server Error! </div>}
                <ul className="news-wrapper">
                    
                    {                        
                        mainNews.map((item, index) => {
                            return (                           
                                <Link key={index} to={`/news/${index+1}`}>
                                    <li className="news-item">
                                        <h2 className="news-item__title">
                                            {item.title}
                                        </h2>
                                        <div className="news-item__publish-details">
                                            <span className="news-item__author">
                                                {'Frederico Einaudi'}
                                            </span>
                                            <span className="news-item__date">
                                                {item.publishedAt.substring(0,10)}
                                            </span>
                                        </div>
                                    </li>
                                </Link>
                            )
                        })
                    }
                </ul>
                <Link to='/news'>
                    <span className="main__link-to-news">
                        Будь в центре событий
                    </span>
                </Link>
            </div>            
        </div>
    )
}

export default Main