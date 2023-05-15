export const ButtonsPagination = () => {
  return (
    <div className="w-full flex justify-center items-center gap-10 p-4">
      <button className='hover:bg-[var(--color-level-three)] font-medium bg-[var(--color-level-two)] text-lg px-6 py-4 border border-[var(--color-level-three)] rounded-md'>
        Anterior
      </button>
      <button className='hover:bg-[var(--color-level-three)] font-medium bg-[var(--color-level-two)] text-lg px-6 py-4 border border-[var(--color-level-three)] rounded-md'>
        Siguiente
      </button>
    </div>
  )
}
