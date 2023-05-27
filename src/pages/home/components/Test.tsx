import { HiOutlineArrowLongRight, HiOutlineArrowLongLeft } from 'react-icons/hi2';
import { BiArrowToLeft } from "react-icons/bi";

export const Test = () => {
  return (
    <section className='w-full'>
      <p className='flex flex-col ml-10 text-[var(--color-level-one)]'>
        Mostrando 1 - 0 - 133
      </p>
      <div className='grid grid-cols-3 place-items-center gap-5 pb-3 pt-1'>
        <button className='flex text-[var(--color-level-one)]'>
          <BiArrowToLeft size={'1.5em'} color='var(--color-level-one)' />
          <p className='font-medium'>Ir a la p&aacute;gina 1</p>
        </button>
        <div className='flex gap-5'>
          <button className='font-medium flex items-center gap-3 py-2 px-5 rounded-lg border-[0.2em] border-[var(--color-level-six)] bg-[var(--color-level-two)] hover:bg-[var(--color-level-three)]'>
            <HiOutlineArrowLongLeft size={'1.5em'} color='black' />
          </button>
          <button className='font-medium flex items-center gap-3 py-2 px-5 rounded-lg text-[var(--color-level-one)] bg-[var(--color-level-seven)] hover:bg-[var(--color-level-six)]'>
            <p>Siguiente</p>
            <HiOutlineArrowLongRight size={'1.5em'} color='var(--color-level-one)' />
          </button>
        </div>
        <p className='flex text-[var(--color-level-one)] font-light'>
          P&aacute;gina ? de 133
        </p>
      </div>
    </section>
  )
}
