import { useEffect, useState } from 'react'
import { ItemToList, Page } from '../../types'
import { fetchAllItemsToList } from '../../services';
import { Admin, PaginationSection, Table } from './components';

const infoPageDefault = {
	totalElements: 0,
	totalPages: 0,
	last: false,
	size: 0,
	number: 0,
	numberOfElements: 0,
	first: false,
	empty: false
}

export const ListPage = () => {
	const [items, setItems] = useState<Array<ItemToList>>([]);
	const [numberPage, setNumberPage] = useState(0);
	const [infoPage, setInfoPage] = useState<Page>(infoPageDefault);

	useEffect(() => {
		fetchAllItemsToList(numberPage)
			.then(response => {
				setItems(response.content);
				setInfoPage(response);
			});
	}, [numberPage]);


	const prevPage = () => setNumberPage(prev => prev - 1);
	const nextPage = () => setNumberPage(prev => prev + 1);

	return (
		<div className='flex flex-col gap-5 justify-center p-4 w-2/3'>
			<Admin />	
			{
				!infoPage.empty && 
				<>
					<Table items={items} />
					<PaginationSection infoPage={infoPage} prevPage={prevPage} nextPage={nextPage} />
				</>
			}
		</div>
	)
}
