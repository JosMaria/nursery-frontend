const styleButtonEnable = 'gap-1 text-lg font-medium bg-slate-300 hover:bg-slate-400 text-gray-900 p-4 rounded-xl';
const styleButtonDisable = 'gap-1 text-lg font-medium bg-slate-500  p-4 rounded-xl';

export const ButtonsPagination = () => {
  return (
    <div className="w-full flex justify-center items-center gap-10 p-4">
      <button className='hover:bg-[var(--color-level-three)] font-semibold bg-[var(--color-level-two)] text-lg px-6 py-4 border border-[var(--color-level-three)] rounded-md'>
        Anterior
      </button>
      <button className='hover:bg-[var(--color-level-three)] font-semibold bg-[var(--color-level-two)] text-lg px-6 py-4 border border-[var(--color-level-three)] rounded-md'>
        Siguiente
      </button>
    </div>
  )
}
