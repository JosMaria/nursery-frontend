import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2'
import { BiArrowToLeft } from 'react-icons/bi'
import { useCatalogState, useChangePage } from '../hooks'

export const PaginationSection = () => {
  const { firstPage, prevPage, nextPage } = useChangePage()
  const { page } = useCatalogState()

  const {
    first: isFirst,
    last: isLast,
    number,
    totalPages,
    size,
    numberOfElements,
    totalElements
  } = page

  return (
    <section>
      <PagingText
        start={(number * size) + 1}
        end={(number * size) + numberOfElements}
        total={totalElements}
      />
      <div className='grid grid-cols-3 place-items-center gap-5 pb-3'>
        <PagingButton
          style='flex text-[var(--color-level-one)]'
          isDisabled={number < 1}
          functionality={firstPage}
        >
          <BiArrowToLeft size={'1.5em'} color='var(--color-level-one)' />
          <p className='font-medium'>&nbsp;Ir a la p&aacute;gina 1</p>
        </PagingButton>

        <div className='flex gap-5'>
          <PagingButton
            style='font-medium flex items-center gap-3 py-2 px-5 rounded-lg border-[0.2em] border-[var(--color-level-six)] bg-[var(--color-level-two)] hover:bg-[var(--color-level-three)]'
            isDisabled={isFirst}
            functionality={() => prevPage(number)}
          >
            <HiOutlineArrowLongLeft size={'1.5em'} color='black' />
          </PagingButton>

          <PagingButton
            style='font-medium flex items-center gap-3 py-2 px-5 rounded-lg text-[var(--color-level-one)] bg-[var(--color-level-seven)] hover:bg-[var(--color-level-six)]'
            isDisabled={isLast}
            functionality={() => nextPage(number)}
          >
            <p>Siguiente</p>
            <HiOutlineArrowLongRight size={'1.5em'} color='var(--color-level-one)' />
          </PagingButton>
        </div>

        <PagingInfo numberPage={number} totalPages={totalPages} />
      </div>
    </section>
  )
}

interface PagingButtonProps {
  children: JSX.Element | Array<JSX.Element>
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

interface PagingTextProps {
  start: number
  end: number
  total: number
}

const PagingText = ({ start, end, total }: PagingTextProps) => (
  <p className='ml-10 text-base font-light text-[var(--color-level-one)]'>
    Mostrando: <b className='font-semibold'>{start} - {end}</b> de <b className='font-semibold'>{total}</b>
  </p>
)

interface PagingInfoProps {
  numberPage: number
  totalPages: number
}

const PagingInfo = ({ numberPage, totalPages }: PagingInfoProps) => (
  <p className='flex text-[var(--color-level-one)] font-light'>
    P&aacute;gina
    <b className='font-semibold'>&nbsp;{numberPage + 1}</b>
    &nbsp;de&nbsp;
    <b className='font-semibold'>{totalPages}</b>
  </p>
)
