import { NewsResponseDTO } from '../../types';
import {  news as myNews } from '../../utils';
import newsImage from '../../assets/news-picture.png'

import './stylesheets/NewsPage.css'

export const NewsPage = () => {
  return (
    <div className='news-container'>
      {
        myNews.map(news => 
          <News 
            key={news.id} 
            id={news.id}
            title={news.title}
            contentToShow={news.contentToShow}
            content={news.content}
            urlImage={news.urlImage}
          />)        
      }
    </div>
  )
}

const News = ({ title, contentToShow, content, urlImage }: NewsResponseDTO) => (
  <article>
    {
      urlImage && <img src={newsImage} alt={title} className='news-image' /> 
    }
    
    <div>
      <h1>{title}</h1>
      <hr />
      <p>{contentToShow}</p>
      <button>Leer mas</button>
    </div>
    
  </article>
)
