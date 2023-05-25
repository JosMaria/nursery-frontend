export const EmptyContentNews = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-center p-4 text-4xl font-medium leading-none tracking-tight text-[var(--color-level-one)]'>
        A&uacute;n no tenemos novedades que mostrar
        <br />
        Vuelva pronto
      </h1>
      <img
        src='src/assets/no-content-news.png'
        alt='empty-content'
      />
    </div>
  )
}
