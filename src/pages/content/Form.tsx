import { FieldValues, useForm, UseFormRegister } from "react-hook-form";

const STYLE_LABEL = 'pb-2 pl-2 text-sm font-semibold text-gray-900 dark:text-white'

// TODO: delete this data
const options = ['familia 1', 'familia 2', 'familia 3', 'familia 4', 'familia 5', 'familia 6']
const states = ['DISPONIBLE', 'CONSERVACIÓN', 'NO EXISTENTE']
const classifications = ['ORNAMENTAL', 'MEDICINAL', 'INDUSTRIAL']

export const Form = () => {

  const { register, handleSubmit } = useForm();

  const clickSubmit = (values: FieldValues) => {
    console.log('values: ', values)
  }

  return (
    <section className='bg-violet-900 flex justify-center center'>
      <form
        className='w-1/4 p-5 m-5 bg-slate-600 flex flex-col justify-center items-center gap-y-5'
        onSubmit={handleSubmit(clickSubmit)}>
        <h1 className='text-2xl dark:text-white font-semibold'>CREAR PLANTA</h1>

        <div className='flex flex-col w-full'>
          <label htmlFor='commonName' className={STYLE_LABEL}>
            Nombre Com&uacute;n
          </label>
          <input
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            type='text'
            id='commonName'
            required
            {...register('commonName')}
          />
        </div>

        <div className='flex flex-col w-full'>
          <label className={STYLE_LABEL} htmlFor='scientificName'>
            Nombre Cientifico
          </label>
          <div className='flex gap-5'>
            <input
              className='w-9/12 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
              type='text'
              id='scientificName'
              {...register('scientificName')}

            />
            <input
              className='w-1/6 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
              type='text'
              {...register('firstLetterLastname')}
            />
          </div>
        </div>

        <div className='flex flex-col w-full'>
          <label className={STYLE_LABEL} htmlFor='family'>
            Familia
          </label>
          <select
            className='w-full p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            id='family'
            {...register('family')}>
            {
              options.map((optionItem, index) =>
                <option
                  className='p-3'
                  key={index}
                  value={optionItem}>
                  {optionItem}
                </option>)
            }
          </select>
        </div>

        <div className='flex flex-col w-full'>
          <label className={STYLE_LABEL} htmlFor='state'>
            Estado
          </label>
          <select
            className='w-full p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            id='state'
            {...register('state')}>
            {
              states.map((optionItem, index) =>
                <option
                  className='p-3'
                  key={index}
                  value={optionItem}>
                  {optionItem}
                </option>)
            }
          </select>
        </div>
        
        <div>
          <label>Clasificaciones</label>
          {
            classifications.map((value, index) => 
              <div key={index}>
                <input type='checkbox' id={value} value={value} {...register('classifications')} />
                <label htmlFor={value}>{value}</label>
              </div>
            )
          }
        </div>
        
        <button type='submit' className='text-white font-semibold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Crear planta
        </button>
      </form>
    </section>
  )
}

const FormOptionsMultiple = () => {
  return (
    <div className='w-2/3'>
      <label className={STYLE_LABEL}>Clasificaci&oacute;n</label>
      <ul className='w-full p-1 m-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
        
        <li className='border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
          <div className='flex items-center p-2'>
            <input id='item-medicinal' type='checkbox' value='medicinal' className='mr-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500' />
            <label htmlFor='item-medicinal' className='text-sm font-medium text-gray-900 dark:text-gray-300'>
              MEDICINAL
            </label>
          </div>
        </li>
        <li className='border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
          <div className='flex items-center p-2'>
            <input id='item-ornamental' type='checkbox' value='ornamental' className='mr-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500' />
            <label htmlFor='item-ornamental' className='text-sm font-medium text-gray-900 dark:text-gray-300'>
              ORNAMENTAL
            </label>
          </div>
        </li>
        <li className='border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
          <div className='flex items-center p-2'>
            <input id='item-industrial' type='checkbox' value='industrial' className='mr-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500' />
            <label htmlFor='item-industrial' className='text-sm font-medium text-gray-900 dark:text-gray-300'>
              INDUSTRIAL
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
}
