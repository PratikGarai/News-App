import React,  {useState, useEffect} from 'react';
import NewsCard from './NewsCard';

const NewsList = (props) =>
{
    const newslist = useState([]);
    const components = newslist.map(news => <NewsCard id={news.id} news={news} />);
    return(
        <div class="news-list">
            [components]
        </div>
    );
}

export default NewsList;