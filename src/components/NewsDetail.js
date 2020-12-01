import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

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
            <div className="deatil-page">
                <div className="deatil-head">
                    <h1>{article.title}</h1>
                </div>   
                <div className="detail-sidepane">
                    <h2>Written By :</h2>
                    <hr />
                    <div className="detail-author">
                        <span className="detail-author-name">
                            {article.author}
                        </span>
                        <span className="detail-date">
                            {article.published.substring(0,10)+" "+article.published.substring(11,16)}
                        </span>
                    </div>
                    <div className="article-content">
                        {article.content}
                    </div>
                </div>
            </div> 
        );
    }
} 

export default NewsDetail;