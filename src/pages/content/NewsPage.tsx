import { NewsResponseDTO } from '../../types';
import { news as myNews } from '../../utils';
import newsImage from '../../assets/news-picture.png'
import { Alert } from '../../components';

export const NewsPage = () => {
  return (
    <div className='flex flex-col items-center bg-green-700'>
      <Alert message='A simple info alert with an. Give it a click if you like.' />
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
  <article className='bg-lime-200 max-w-3xl rounded-lg flex items-center justify-evenly gap-0 p-4 my-4'>
    {
      urlImage && <img src={newsImage} alt={title} className='w-48 h-40' />
    }
    <div className='flex flex-col items-center justify-between h-full p-3'>
      <h1 className='text-lg font-semibold text-center w-full pb-2 border-b-2 border-black'>{title}</h1>
      <p className='font-medium text-sm p-2 pb-4'>{contentToShow}</p>
      <button 
        type='button' 
        className='w-min whitespace-nowrap focus:outline-none border-green-600 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
          Leer mas
      </button>
    </div>
  </article>
)
