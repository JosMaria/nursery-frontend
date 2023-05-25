import { Page } from '../../../types';

interface PaginationSectionProps {
	infoPage: Page
	prevPage: () => void
	nextPage: () => void
}

export const PaginationSection = ({ infoPage, prevPage, nextPage }: PaginationSectionProps) => (
	<div className='flex justify-between items-center'>
		<PagingText
			start={(infoPage.number * infoPage.size) + 1}
			end={(infoPage.number * infoPage.size) + infoPage.numberOfElements}
			total={infoPage.totalElements}
		/>
		<div className='flex'>
			<PagingButton text='<' isDisabled={infoPage.first} changePage={prevPage} />
			<PagingButton text='>' isDisabled={infoPage.last} changePage={nextPage} />
		</div>
	</div>
)

const styleDefaultButton = 'px-3 py-2 text-xl  dark:text-gray-400';
const bgEnabled = 'dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white hover:cursor-pointer';
const bgDisabled = 'dark:bg-gray-800';

interface PagingButtonProps {
	text: string
	isDisabled: boolean
	changePage: () => void
}

const PagingButton = ({ text, isDisabled, changePage }: PagingButtonProps) => (
	<button
		className={`${styleDefaultButton} ${isDisabled ? bgDisabled : bgEnabled}`}
		onClick={changePage}
		disabled={isDisabled}>
		{text}
	</button>
)

interface PagingTextProps {
	start: number
	end: number
	total: number
}

const PagingText = ({ start, end, total }: PagingTextProps) => (
	<p className='text-base font-light text-[var(--color-level-one)]'>
		Mostrando: <b className='font-semibold'>{start} - {end}</b> de <b className='font-semibold'>{total}</b>
	</p>
)
