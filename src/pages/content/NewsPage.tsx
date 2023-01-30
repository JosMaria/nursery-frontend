import { NewsResponseDTO } from '../../types';
import { news as myNews } from '../../utils';
import newsImage from '../../assets/news-picture.png'

export const NewsPage = () => {
  return (
    <div className='flex flex-col items-center bg-green-700'>
      <Alert />
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

const Alert = () => (
  <div id="alert-3" className="self-start flex p-4 my-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
    <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
    </svg>
    <span className="sr-only">Info</span>
    <div className="mx-3 text-sm font-medium">
      A simple info alert with an. Give it a click if you like.
    </div>
    <button 
      type='button'
      className="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" 
      data-dismiss-target="#alert-3" 
      aria-label="Close"
    >
      <span className="sr-only">Close</span>
      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
      </svg>
    </button>
  </div>
);