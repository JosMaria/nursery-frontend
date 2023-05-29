import { HiOutlineArrowLongRight, HiOutlineArrowLongLeft } from 'react-icons/hi2';
import { BiArrowToLeft } from 'react-icons/bi';
import { Page } from '../../../types';

interface PaginationSectionProps {
  infoPage: Page
  goFirstPage: () => void
  prevPage: () => void
  nextPage: () => void
}

export const PaginationSection = ({ infoPage, goFirstPage, prevPage, nextPage }: PaginationSectionProps) => (
  <section className='w-full'>
    <PagingText 
      start={(infoPage.number * infoPage.size) + 1} 
      end={(infoPage.number * infoPage.size) + infoPage.numberOfElements} 
      total={infoPage.totalElements} 
    />
    <div className='grid grid-cols-3 place-items-center gap-5 pb-3'>
      <button
        className={`${infoPage.number < 1 ? 'invisible' : 'flex text-[var(--color-level-one)]'}`}
        disabled={infoPage.number < 1}
        onClick={goFirstPage}>
        <BiArrowToLeft size={'1.5em'} color='var(--color-level-one)' />
        <p className='font-medium'>&nbsp;Ir a la p&aacute;gina 1</p>
      </button>

      <div className='flex gap-5'>
        <button
          className={`${infoPage.first ?
            'invisible' :
            'font-medium flex items-center gap-3 py-2 px-5 rounded-lg border-[0.2em] border-[var(--color-level-six)] bg-[var(--color-level-two)] hover:bg-[var(--color-level-three)]'}`}
          disabled={infoPage.first}
          onClick={prevPage}>
          <HiOutlineArrowLongLeft size={'1.5em'} color='black' />
        </button>

        <button
          className={`${infoPage.last ?
            'invisible' :
            'font-medium flex items-center gap-3 py-2 px-5 rounded-lg text-[var(--color-level-one)] bg-[var(--color-level-seven)] hover:bg-[var(--color-level-six)]'}`}
          disabled={infoPage.last}
          onClick={nextPage}>
          <p>Siguiente</p>
          <HiOutlineArrowLongRight size={'1.5em'} color='var(--color-level-one)' />
        </button>
      </div>
      <PagingInfo numberPage={infoPage.number} totalPages={infoPage.totalPages} />
    </div>
  </section>
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
