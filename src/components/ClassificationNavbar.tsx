import { useEffect, useState } from 'react'
import { fetchAllClassificationsByUtility } from '../services/newsService';
import { Classification } from '../types';

interface ClassificationNavbarProps {
	setProductByDefault: () => void;
	setProductsByClassification: (classification: string) => void
}

export const ClassificationNavbar = ({ setProductByDefault, setProductsByClassification }: ClassificationNavbarProps) => {
	const [classificationsByUtility, setClassificationsByUtility] = useState<Array<Classification>>();
	const [classificationActual, setClassificationActual] = useState<Classification>('todo');

	useEffect(() => {
		fetchAllClassificationsByUtility()
			.then(classsifications => setClassificationsByUtility(classsifications))
	}, [])

	useEffect(() => {
		if (classificationActual === 'todo') {
			setProductByDefault()
		} else {
			setProductsByClassification(classificationActual)
		}
	}, [classificationActual])

	const changeClassification = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const newClassificationActual = e.currentTarget?.textContent?.toLowerCase() as Classification;
		setClassificationActual(newClassificationActual);
	}

	return (
		<nav className='flex justify-evenly dark:bg-gray-800 text-gray-100 w-full'>
			{
				classificationsByUtility?.map((value, index) =>
					<div
						key={index}
						className='px-5 py-4 text-sm font-medium hover:text-blue-600 hover:cursor-pointer capitalize'
						onClick={e => changeClassification(e)}>
						{value}
					</div>
				)
			}
		</nav>
	)
}
