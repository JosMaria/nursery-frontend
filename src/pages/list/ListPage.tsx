import { useEffect, useState } from 'react'
import { ItemToList, Page } from '../../types'
import { fetchAllItemsToList } from '../../services';
import { Admin, Table } from './components';
import { EmptyContent } from '../../components';
import { PaginationSection } from '../home/components';

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

	const goFirstPage = () => setNumberPage(0);
	const prevPage = () => setNumberPage(prev => prev - 1);
	const nextPage = () => setNumberPage(prev => prev + 1);

	return (
		<div className='flex flex-col gap-5 justify-center p-4 w-2/3'>
			<Admin />
			{
				infoPage.empty ?
					<EmptyContent
						message='A&uacute;n no tenemos plantas que mostrar'
						pathImage='src/assets/no-content-plants.png'
						alt='empty_content_plants'
					/>
					:
					<>
						<Table items={items} />
						<PaginationSection
							infoPage={infoPage}
							goFirstPage={goFirstPage}
							prevPage={prevPage}
							nextPage={nextPage}
						/>
					</>
			}
		</div>
	)
}
