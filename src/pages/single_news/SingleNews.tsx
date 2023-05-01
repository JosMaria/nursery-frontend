import { useEffect, useState } from 'react'
import { NewsResponseDTO } from '../../types'
import { useParams } from 'react-router';
import { fetchByIdNews } from '../../services';

const VALUE_INITIAL: NewsResponseDTO = {
  id: 0,
  title: '',
  description: '',
  urlImage: ''
}

export const SingleNews = () => {
  const [singleNews, setSingleNews] = useState<NewsResponseDTO>(VALUE_INITIAL);
  const { newsId } = useParams();

  useEffect(() => {
    if (newsId) {
      fetchByIdNews(parseInt(newsId))
        .then(responseNews => setSingleNews(responseNews));
    }
  }, [])

  return (
    <div className='flex flex-col items-center gap-5 h-full px-40 py-10 leading-normal'>
      <h1 className='text-6xl text-center first-letter:capitalize font-bold tracking-tight text-gray-900 dark:text-black'>
          {singleNews.title}
      </h1>
        {
          singleNews.urlImage && (
            <img
                className='pl-3 h-fit py-3 object-cover rounded-t-2xl md:h-auto md:w-1/3 md:rounded-none md:rounded-l-lg'
                src='https://dog.ceo/api/breeds/image/random'
                alt={singleNews.title}
            />
          )
        }
      <p className='text-lg font-normal first-letter:capitalize text-gray-700 dark:text-black'>
        {singleNews.description}
      </p>    
      <button type='button' className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
          Volver
      </button>
    </div>
  )
}
