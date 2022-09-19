import React from "react";
import  { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import '../main.scss'


const NewsDetail = props => { 
    const newsData = useSelector(state => state.news.news);
    const id = useParams();
    let currentNews;
    if(newsData) {
        currentNews = newsData[id.id - 1];
    }
    
    
    
    return (
        <div className="container">
            <div className="news-detail">
                <div className="news-detail__info">
                    <h2 className="news-detail__title">
                        {currentNews.title}
                    </h2>
                    <span className="news-detail__author">
                        {currentNews.author}
                    </span>
                    <span className="news-detail__date">
                        {currentNews.publishedAt.substring(0,10)}
                    </span>
                </div>
                <div className="news-detail__content">
                    <img className="news-detail__img" src={currentNews.urlToImage}  alt='news image'/>
                    <p className="news-detail__text">
                        {currentNews.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NewsDetail;