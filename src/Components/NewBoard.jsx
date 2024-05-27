import { useState,useEffect } from "react"
import NewsItems from "./NewsItems.jsx";

const NewBoard = ({category}) => {
    const [articles, setarticles] = useState([])

    useEffect(()=>{
        let url =`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=9aba859fc2ab4e96a0b780b0a0b8d8dd`;
        fetch(url).then(response=>response.json()).then(data=>setarticles(data.articles))
    },[category])
  return (
    <div>
        <h2 className="text-center">Latest <span className="badge bg-danger margin-2rem padding-20px">News</span></h2>
        {articles.map((news, index)=>{
            return <NewsItems key={index} title ={news.title} desc = { news.description}  url = {news.url}  src = {news.urlToImage}></NewsItems>

        })}
    </div>
  )
}

export default NewBoard