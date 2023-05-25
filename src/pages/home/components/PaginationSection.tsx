import { Page } from '../../../types';

interface PaginationSectionProps {
  infoPage: Page
  prevPage: () => void
  nextPage: () => void
}

const styleDefaultButton = 'font-medium text-lg p-3 border border-[var(--color-level-three)] rounded-md';
const bgEnabled = 'bg-[var(--color-level-two)] hover:bg-[var(--color-level-three)]';
const bgDisabled = 'bg-[var(--color-level-three)]';

export const PaginationSection = ({ infoPage, prevPage, nextPage }: PaginationSectionProps) => (
  <div className='flex justify-between items-center w-full px-16 pb-5'>
    <PagingText
      start={(infoPage.number * infoPage.size) + 1}
      end={(infoPage.number * infoPage.size) + infoPage.numberOfElements}
      total={infoPage.totalElements}
    />
    <div className='flex gap-5'>
      <PagingButton text='Anterior' isDisabled={infoPage.first} changePage={prevPage} />
      <PagingButton text='Siguiente' isDisabled={infoPage.last} changePage={nextPage} />
    </div>
  </div>
)

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
