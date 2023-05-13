import { useEffect, useState } from 'react'
import { NewsResponseDTO } from '../../types'
import { useParams } from 'react-router';
import { fetchByIdNews } from '../../services';
import { Link } from 'react-router-dom';

const VALUE_INITIAL: NewsResponseDTO = {
  id: 0,
  title: '',
  description: '',
  urlImage: ''
}

export const SingleNews = () => {
  const [singleNews, setSingleNews] = useState(VALUE_INITIAL);
  const { newsId } = useParams();

  useEffect(() => {
    if (newsId) {
      fetchByIdNews(parseInt(newsId))
        .then(responseNews => setSingleNews(responseNews));
    }
  }, []);

  return (
    <div className='flex flex-col items-center gap-5 bg-[var(--color-level-two)] w-2/3 p-5'>
      <h1 className='text-4xl text-center first-letter:capitalize font-semibold'>
        {singleNews.title}
      </h1>
      {
        singleNews.urlImage && (
          <img
            className='w-1/3'
            src='https://www.aboutespanol.com/thmb/oxcVdVmVah-wUyZJVxr_OXn43qc=/3771x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-141249909-597c5a013df78cbb7a279e0a.jpg'
            alt={singleNews.title}
          />
        )
      }
      <p className='text-base first-letter:capitalize text-black'>
        {singleNews.description}
      </p>
      <Link to='/news'>
        <button
          className='w-fit px-8 py-2 rounded text-white font-medium text-base bg-[var(--color-level-three)] hover:bg-[var(--color-level-four)]'
          type='button'>
          Volver
        </button>
      </Link>
    </div>
  )
}
