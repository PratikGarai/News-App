import React from 'react';
import {Link} from 'react-router-dom';

const NewsCard = (props) =>{
    return (
        <React.Fragment>
            <div className="news-card col-md-5">
                <Link style={{ textDecoration: 'none' }} to = {"/detail/"+props.news.id}>
                    <div className="news-card-image">
                        <img src={props.news.imageUrl} alt="Cover" />
                    </div>
                    <div className="news-card-text">
                        <div className="news-title">
                            <span className="title-content">
                                <h2><strong>{props.news.title}</strong></h2>
                            </span>
                        </div>
                        <div className="metadata">
                            <span className="author-name">{props.news.author+"  , "}</span>
                            <span className="published-date">{props.news.published.substring(0,10)+" "+props.news.published.substring(11,16)}</span>
                        </div>
                        <hr className="news-divider"/>
                        <div className="content">
                            {props.news.content.substring(0,180)}...
                        </div>
                    </div>
                </Link>
            </div>
        </React.Fragment>
    );
}

export default NewsCard;