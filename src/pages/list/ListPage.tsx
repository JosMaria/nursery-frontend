import { useEffect, useState } from 'react'
import { ItemToList, Page } from '../../types'
import { fetchAllItemsToList } from '../../services';
import { Admin, Table } from './components';

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
	const nextPage = () => {
		setNumberPage(prev => prev + 1);
		console.log(numberPage);

	};

	return (
		<div className='flex flex-col gap-5 justify-center p-4'>
			<Admin />
			<Table items={items} />
			<SectionPagination infoPage={infoPage} prevPage={prevPage} nextPage={nextPage} />
		</div>
	)
}

interface SectionPaginationProps {
	infoPage: Page
	prevPage: () => void
	nextPage: () => void
}

const SectionPagination = ({ infoPage, prevPage, nextPage }: SectionPaginationProps) => (
	<div className='flex justify-between items-center'>
		<p className='text-sm font-normal text-[var(--color-level-one)]'>
			Mostrando: {(infoPage.number * infoPage.size) + 1} - {(infoPage.number * infoPage.size) + infoPage.numberOfElements} de {infoPage.totalElements}
		</p>
		<div className='flex'>
			<ButtonPage
				text='<'
				isDisabled={infoPage.empty || infoPage.first}
				changePage={prevPage}
			/>
			<ButtonPage
				text='>'
				isDisabled={infoPage.empty || infoPage.last}
				changePage={nextPage}
			/>
		</div>
	</div>
)

const styleDefaultButton = 'px-3 py-2 text-xl  dark:text-gray-400';
const bgEnabled = 'dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white hover:cursor-pointer';
const bgDisabled = 'dark:bg-gray-800';

interface ButtonPageProps {
	text: string
	isDisabled: boolean
	changePage: () => void
}

const ButtonPage = ({ text, isDisabled, changePage }: ButtonPageProps) => (
	<button
		className={`${styleDefaultButton} ${isDisabled ? bgDisabled : bgEnabled}`}
		onClick={changePage}
		disabled={isDisabled}>
		{text}
	</button>
)
