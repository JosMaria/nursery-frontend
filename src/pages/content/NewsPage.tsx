import { NewsResponseDTO } from '../../types';
import { news as myNews } from '../../utils';
import newsImage from '../../assets/news-picture.png'
import { Link } from 'react-router-dom';

export const NewsPage = () => {
  return (
    <div className='flex flex-col gap-7 items-center bg-gray-400 w-full h-screen p-5'>
      {/* <Alert message='A simple info alert with an. Give it a click if you like.' /> */}
      {
        myNews.map(news => 
          <News 
            key={news.id}
            id={news.id} 
            title={news.title}
            urlImage={news.urlImage}
            contentToShow={news.contentToShow}
            content={news.content}
          />)
      }
    </div>
  )
}

const News = ({ title, contentToShow, content, urlImage }: NewsResponseDTO) => (
  <Link to="#" className='min-w-[45rem] flex flex-col items-center bg-white border border-gray-200 rounded-xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 hover:shadow-2xl'>
    {
      urlImage && (
      <img 
        className="pl-3 h-fit py-3 object-cover rounded-t-2xl md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" 
        src={newsImage}
        alt={title} 
      />)
    }
    <div className="flex flex-col justify-between gap-1 h-full p-5 leading-normal">
      <h5 className="text-lg first-letter:capitalize font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <p className="font-normal first-letter:capitalize text-sm text-gray-700 dark:text-gray-300">{contentToShow}</p>
    </div>
  </Link>
)
