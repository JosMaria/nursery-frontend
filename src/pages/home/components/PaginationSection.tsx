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
  <div className='flex justify-between items-center w-full px-16 py-5'>
    <p className='text-[var(--color-level-one)] text-lg font-medium'>
      Mostrando: {(infoPage.number * infoPage.size) + 1} - {(infoPage.number * infoPage.size) + infoPage.numberOfElements} de {infoPage.totalElements}
    </p>
    <div className='flex gap-5'>
      <PagingButton
        text='Anterior'
        isDisabled={infoPage.empty || infoPage.first}
        changePage={prevPage}
      />
      <PagingButton
        text='Siguiente'
        isDisabled={infoPage.empty || infoPage.last}
        changePage={nextPage}
      />
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
