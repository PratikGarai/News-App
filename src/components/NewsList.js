import React,  {useState, useEffect} from 'react';
import NewsCard from './NewsCard';
import '../css/News.css';

const NewsList = (props) =>
{
    const [list, setList] = useState([]);
    const components = list.map(news => <NewsCard id={news.id} news={news} />);

    useEffect( ()=>
    {
        fetch("http://localhost:8000/news/articles/?format=json")
        .then(res => res.json())
        .then(res =>{
            const resp = res;
            setList(resp);
        })
        .catch(err=>{
            console.log(err);
        })
    }, []);

    return(
        <div className="news-list row">
            {[components]}
        </div>
    );
}

export default NewsList;