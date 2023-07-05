interface EmptyContentProps {
  message: string
  pathImage: string
  alt: string
}

export const EmptyContent = ({ message, pathImage, alt }: EmptyContentProps) => (
  <div className='flex flex-col justify-center items-center'>
    <h1 className='text-center p-4 text-4xl font-medium leading-none tracking-tight text-[var(--color-level-one)]'>
      {message}
      <br />
      Vuelva pronto
    </h1>
    <img src={pathImage} alt={alt} />
  </div>
)