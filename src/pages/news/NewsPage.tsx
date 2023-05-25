import { useEffect, useState } from 'react'
import { NewsResponseDTO } from '../../types';
import { fetchAllNews } from '../../services';
import { CardNews } from './components';
import { EmptyContentNews } from '../../components';

export const NewsPage = () => {
  const [news, setNews] = useState<Array<NewsResponseDTO>>([]);

  useEffect(() => {
    fetchAllNews()
      .then(responseNews => setNews(responseNews.content));
  }, [])

  return (
    <section className='w-2/3 flex flex-col items-center gap-5 p-5'>
      {
        news.length === 0 ? <EmptyContentNews /> :
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
