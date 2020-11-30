import React from 'react';

const NewsCard = (props) =>{
    return (
        <div className="news-card col-md-5">
            <div class="news-card-image">
                
            </div>
            <div class="news-card-text">
                <div className="news-title">
                    <span className="title-content">
                        <h2><strong>{props.news.title}</strong></h2>
                    </span>
                </div>
                <div class="metadata">
                    <span className="author-name">{props.news.author+"  , "}</span>
                    <span className="published-date">{props.news.published}</span>
                </div>
                <hr className="news-divider"/>
                <div className="content">
                    {props.news.content.substring(0,180)}...
                </div>
            </div>
        </div>
        
    );
}

export default NewsCard;