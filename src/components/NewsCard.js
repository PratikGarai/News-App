import React from 'react';

const NewsCard = (props) =>{
    return (
        <div className="news-card">
            <div className="news-title">
                <span className="title-content">{props.news.title}</span>
            </div>
            <div class="metadata">
                <span className="author-name">{props.news.author}</span>
                <span className="published-date">{props.news.published}</span>
            </div>
            <div className="content">
                {props.news.content}
            </div>
        </div>
        
    );
}

export default NewsCard;