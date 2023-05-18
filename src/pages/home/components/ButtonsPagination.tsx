import { Dispatch, SetStateAction } from "react"

interface ButtonsPaginationProps {
  setPage: Dispatch<SetStateAction<number>>
}

export const ButtonsPagination = ({ setPage }: ButtonsPaginationProps) => (
  <div className='w-full flex justify-center items-center gap-10 p-4'>
    <button
      className='hover:bg-[var(--color-level-three)] font-medium bg-[var(--color-level-two)] text-lg px-6 py-4 border border-[var(--color-level-three)] rounded-md'
      onClick={() => setPage(prev => prev - 1)}>
      Anterior
    </button>
    <button
      className='hover:bg-[var(--color-level-three)] font-medium bg-[var(--color-level-two)] text-lg px-6 py-4 border border-[var(--color-level-three)] rounded-md'
      onClick={() => setPage(prev => prev + 1)}>
      Siguiente
    </button>
  </div>
)
