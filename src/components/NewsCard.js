import React from 'react';

const NewsCard = (props) =>{
    return (
        <div className="news-card col-md-5">
            <div className="news-title">
                <span className="title-content">
                    <h2><strong>{props.news.title}</strong></h2>
                </span>
            </div>
            <div class="metadata">
                <span className="author-name">{props.news.author}</span>
                <span className="published-date">{props.news.published}</span>
            </div>
            <div className="content">
                {props.news.content.substring(0,120)}...
            </div>
        </div>
        
    );
}

export default NewsCard;