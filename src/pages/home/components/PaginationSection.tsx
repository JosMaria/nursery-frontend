import { Dispatch, SetStateAction } from 'react'
import { Page } from '../../../types';

interface PaginationSectionProps {
  setPage: Dispatch<SetStateAction<number>>
  infoPage: Page
}

const styleDefaultButton = 'font-medium text-lg px-6 py-4 border border-[var(--color-level-three)] rounded-md';
const bgEnabled = 'bg-[var(--color-level-two)] hover:bg-[var(--color-level-three)]';
const bgDisabled = 'bg-[var(--color-level-three)]';

export const PaginationSection = ({ setPage, infoPage }: PaginationSectionProps) => (
  <div className='flex flex-col w-full p-5'>
    <p className='self-start text-[var(--color-level-one)] text-lg font-medium'>
      Mostrando: {(infoPage.number * infoPage.size) + 1} - {(infoPage.number * infoPage.size) + infoPage.numberOfElements} de {infoPage.totalElements}
    </p>
    <div className='w-full flex justify-center items-center gap-10'>
      <PagingButton
        text='Anterior'
        isDisabled={infoPage.empty || infoPage.first}
        changePage={() => setPage(prev => prev - 1)}
      />
      <PagingButton
        text='Siguiente'
        isDisabled={infoPage.empty || infoPage.last}
        changePage={() => setPage(prev => prev + 1)}
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
