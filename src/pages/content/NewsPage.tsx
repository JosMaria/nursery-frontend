import { NewsResponseDTO } from '../../types';
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchAllNews } from '../../services/newsService';
import newsImage from '../../assets/news-picture.png'

export const NewsPage = () => {

	const [news, setNews] = useState(Array<NewsResponseDTO>);

	useEffect(() => {
		fetchAllNews()
			.then(newsFetched => setNews(newsFetched));
	}, []);

	return (
		<section className='flex flex-col gap-7 items-center bg-gray-400 w-full p-5'>
			{
				news.map(news =>
					<NewsCard
						key={news.id}
						id={news.id}
						urlImage={news.urlImage}
						title={news.title}
						description={news.description}
					/>)
			}
		</section>
	)
}

const NewsCard = ({ id, urlImage, title, description }: NewsResponseDTO) => (
	<div className='min-w-[50rem] flex flex-col items-center bg-white border border-gray-200 rounded-xl shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 hover:shadow-2xl'>
		{
			urlImage && (
				<img
					className="pl-3 h-fit py-3 object-cover rounded-t-2xl md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
					src={newsImage}
					alt={title}
				/>
			)
		}
		<div className="flex flex-col justify-between gap-2 h-full px-4 py-3 leading-normal">
			<h5 className="text-lg first-letter:capitalize font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
			<p className="font-normal first-letter:capitalize text-sm text-gray-700 dark:text-gray-300">{description.slice(0, 250)}...</p>
			<Link to={`/news/${id}`} className='flex justify-end'>
				<button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
					Ver mas
				</button>
			</Link>
		</div>
	</div>
)