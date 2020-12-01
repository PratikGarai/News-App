import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import '../css/Detail.css';

const NewsDetail = (props) =>
{
    const [article, setArticle] = useState(null);
    const number = useParams().id;
    useEffect( ()=> {
        fetch("http://localhost:8000/news/article/"+number+"?format=json")
        .then(res => res.json())
        .then(res => {
            const result = res;
            setArticle(result);
        })
        .catch(err =>{
            console.log("Error");
        })
    }, []);

    if(article==null){
        return (
            <p></p>
        );
    }
    else{
        return (
            <React.Fragment>
                <div className="image-div">
                    <img className="article-image" src={article.imageUrl} alt="article cover"></img>
                </div>
                <div className="detail-page">
                    <div className="detail-sidepane">
                        <h2>Written By :</h2>
                        <hr />
                        <div className="detail-author">
                            <span className="detail-author-name">
                                {article.author}
                            </span>
                            <br />
                            <span className="detail-date">
                                {article.published.substring(0,10)+" "+article.published.substring(11,16)}
                            </span>
                        </div>
                    </div>
                    <div className="detail-head">
                        <h1>{article.title}</h1>
                    </div>   
                    <div className="article-content">
                    <hr />
                        {article.content}
                    </div>
                </div> 
            </React.Fragment>
        );
    }
} 

export default NewsDetail;