import { useEffect, useState } from 'react'
import { NewsResponseDTO } from '../../types';
import { fetchAllNews } from '../../services';
import { CardNews } from './components';

export const NewsPage = () => {
  const [news, setNews] = useState<Array<NewsResponseDTO>>([]);

  useEffect(() => {
    fetchAllNews()
      .then(responseNews => setNews(responseNews));
  }, [])

  return (
    <section className='w-2/3 flex flex-col items-center gap-5 p-5'>
      {
        news.map(news =>
          <CardNews
            key={news.id}
            id={news.id}
            title={news.title}
            description={news.description}
            urlImage={news.urlImage}
          />
        )
      }
    </section>
  )
}
