import { useForm } from 'react-hook-form';
import { CreatePlantDTO } from '../../types';
import { createPlant, fetchAllFamilies } from '../../services';
import { useEffect, useState } from 'react';

const STYLE_LABEL = 'pb-2 pl-2 text-sm font-semibold text-gray-900 dark:text-white'

export const CreatePlantForm = () => {
  const { register, handleSubmit, reset } = useForm<CreatePlantDTO>();
  const [families, setFamilies] = useState<Array<string>>([]);

  useEffect(() => {
    fetchAllFamilies()
      .then(responseFamilies => setFamilies(responseFamilies));
  }, []);

  const clickSubmit = (payload: CreatePlantDTO) => {
    createPlant(payload);
    alert('Planta creada');
    reset()
  }

  return (
    <form
      className='w-1/2 p-5 m-5 bg-slate-600 flex flex-wrap justify-start gap-y-5 gap-x-10'
      onSubmit={handleSubmit(clickSubmit)}>
      <h1 className='w-full pb-1 text-2xl text-center dark:text-white font-semibold'>CREAR PLANTA</h1>

      <div className='flex flex-col w-1/3'>
        <label htmlFor='commonName' className={STYLE_LABEL}>
          Nombre Com&uacute;n
        </label>
        <input
          className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
          type='text' id='commonName' required
          {...register('commonName')}
        />
      </div>

      <div className='flex flex-col w-1/2'>
        <label className={STYLE_LABEL} htmlFor='scientificName'>
          Nombre Cientifico
        </label>
        <div className='flex gap-5'>
          <input
            className='w-9/12 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            type='text' id='scientificName'
            {...register('scientificName')}

          />
          <input
            className='w-1/6 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            type='text'
            {...register('scientistSurnameInitial')}
          />
        </div>
      </div>

      <div className='flex flex-col w-1/3'>
        <label className={STYLE_LABEL} htmlFor='family'>
          Familia
        </label>
        <select
          className='w-full p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          id='family'
          {...register('family')}>
          {
            families.map((optionItem, index) =>
              <option className='p-3' key={index} value={optionItem}>
                {optionItem}
              </option>)
          }
        </select>
      </div>
    </form>
  )
}
