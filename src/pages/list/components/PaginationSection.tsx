import { Page } from '../../../types';

interface PaginationSectionProps {
	infoPage: Page
	prevPage: () => void
	nextPage: () => void
}

export const PaginationSection = ({ infoPage, prevPage, nextPage }: PaginationSectionProps) => (
	<div className='flex justify-between items-center'>
		<p className='text-sm font-normal text-[var(--color-level-one)]'>
			Mostrando: {(infoPage.number * infoPage.size) + 1} - {(infoPage.number * infoPage.size) + infoPage.numberOfElements} de {infoPage.totalElements}
		</p>
		<div className='flex'>
			<PagingButton
				text='<'
				isDisabled={infoPage.empty || infoPage.first}
				changePage={prevPage}
			/>
			<PagingButton
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
