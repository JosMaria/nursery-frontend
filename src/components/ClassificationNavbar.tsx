import { useEffect, useState } from 'react'
import { fetchAllClassificationsByUtility } from '../services/newsService';
import { Classification } from '../types';

export const ClassificationNavbar = () => {
	const [classificationsByUtility, setClassificationsByUtility] = useState<Array<Classification>>();

	useEffect(() => {
		fetchAllClassificationsByUtility()
			.then(classifications => setClassificationsByUtility(classifications));
	}, [])

	return (
		<nav className='flex justify-evenly dark:bg-gray-800 text-gray-100 w-full'>
			{
				classificationsByUtility?.map((value, index) => 
					<div key={index} className='px-5 py-4 text-sm font-medium hover:text-blue-600 hover:cursor-pointer capitalize'>
						{value}
					</div>
				)
			}
		</nav>
	)
}
