import { Dispatch, SetStateAction } from 'react'

interface ButtonsPaginationProps {
  setPage: Dispatch<SetStateAction<number>>
  isDisabledPrev: boolean
  isDisabledNext: boolean
}

const styleDefaultButton = 'font-medium text-lg px-6 py-4 border border-[var(--color-level-three)] rounded-md';
const bgEnabled = 'bg-[var(--color-level-two)] hover:bg-[var(--color-level-three)]';
const bgDisabled = 'bg-[var(--color-level-three)]';

export const ButtonsPagination = ({ setPage, isDisabledPrev, isDisabledNext }: ButtonsPaginationProps) => (
  <div className='w-full flex justify-center items-center gap-10 p-4'>
    <ButtonPage
      text='Anterior'
      isDisabled={isDisabledPrev}
      changePage={() => setPage(prev => prev - 1)}
    />
    <ButtonPage
      text='Siguiente'
      isDisabled={isDisabledNext}
      changePage={() => setPage(prev => prev + 1)}
    />
  </div>
)

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
