const styleButtonEnable = 'gap-1 text-lg font-medium bg-slate-300 hover:bg-slate-400 text-gray-900 p-4 rounded-xl';
const styleButtonDisable = 'gap-1 text-lg font-medium bg-slate-500  p-4 rounded-xl';

export const ButtonsPagination = () => {
  return (
    <div>
      <button className={styleButtonDisable}>
        Anterior
      </button>
      <button className={styleButtonEnable}>
        Siguiente
      </button>
    </div>
  )
}
