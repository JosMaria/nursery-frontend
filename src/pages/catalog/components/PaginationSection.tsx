import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2'
import { useCatalogContext } from '../contexts'
import { BiArrowToLeft } from 'react-icons/bi'

export const PaginationSection = () => {
  const { catalog: { page }, firstPage, nextPage, prevPage } = useCatalogContext()
  const { first: isFirst, last: isLast, number } = page

  return (
    <section className='flex justify-around'>
      <PagingButton
        style='flex text-[var(--color-level-one)]'
        isDisabled={number < 1}
        functionality={firstPage}
      >
        <p className='font-medium'>&nbsp;Ir a la p&aacute;gina 1</p>
        <BiArrowToLeft size={'1.5em'} color='var(--color-level-one)' />
      </PagingButton>

      <div className='flex gap-5'>
        <PagingButton
          style='font-medium flex items-center gap-3 py-2 px-5 rounded-lg border-[0.2em] border-[var(--color-level-six)] bg-[var(--color-level-two)] hover:bg-[var(--color-level-three)]'
          isDisabled={isFirst}
          functionality={prevPage}
        >
          <HiOutlineArrowLongLeft size={'1.5em'} color='black' />
        </PagingButton>

        <PagingButton
          style='font-medium flex items-center gap-3 py-2 px-5 rounded-lg text-[var(--color-level-one)] bg-[var(--color-level-seven)] hover:bg-[var(--color-level-six)]'
          isDisabled={isLast}
          functionality={nextPage}
        >
          <p>Siguiente</p>
          <HiOutlineArrowLongRight size={'1.5em'} color='var(--color-level-one)' />
        </PagingButton>
      </div>
    </section>
  )
}

interface PagingButtonProps {
  children: JSX.Element | JSX.Element[]
  style: string
  isDisabled: boolean
  functionality: () => void
}

const PagingButton = ({ children, style, isDisabled, functionality }: PagingButtonProps) => (
  <button
    className={isDisabled ? 'invisible' : style}
    disabled={isDisabled}
    onClick={functionality}
  >
    {children}
  </button>
)
