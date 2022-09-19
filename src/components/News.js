import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import '../main.scss'


const News = () => {
    const newsData = useSelector(state => state.news.news);
    
    const {status, error} = useSelector(state => state.news);
       
    return (
        
        <div className="news">
            <div className="container">
                <h1 className="main__title">
                    Быть <br/>в курсе <span>событий</span>
                </h1>
                {status === 'loading' && <div className="server-status-text">Loading...</div>}
                {status === 'rejected' && <div className="server-status-text">An error occured! {error} </div>}
                <ul className="news-wrapper">
                    {                        
                        newsData.map((item, index) => {
                            return (                           
                                <Link key={index} to={`/news/${index + 1}`}>
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
                
                
            </div>           
        </div>
    )
}

export default News;