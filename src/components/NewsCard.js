import React from 'react';

const NewsCard = (props) =>{
    return (
        <div class="news-card">
            <div class="news-title">
                <span class="title-content">{props.news.title}</span>
            </div>
            <div class="metadata">
                <span class="author-name">{props.news.autor}</span>
                <span class="published-date">{props.news.published}</span>
            </div>
            <div class="content">
                {props.news.content}
            </div>
        </div>
        
    );
}

export default NewsCard;