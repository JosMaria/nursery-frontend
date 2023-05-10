import { useForm } from 'react-hook-form';
import { Classification, CreatePlantDTO, Status } from '../../types';
import { createPlant, fetchAllClassifications, fetchAllFamilies } from '../../services';
import { useEffect, useState } from 'react';

const allStatus: Array<Status> = ['AVAILABLE', 'NON_EXISTENT', 'IN_CONSERVATION'];

export const CreatePlantForm = () => {
  const { register, handleSubmit, reset } = useForm<CreatePlantDTO>();
  const [families, setFamilies] = useState<Array<string>>([]);
  const [classifications, setClassifications] = useState<Array<Classification>>([]);

  useEffect(() => {
    fetchAllFamilies()
      .then(responseFamilies => setFamilies(responseFamilies));
    fetchAllClassifications()
      .then(response => setClassifications(response));
  }, []);

  const clickSubmit = (payload: CreatePlantDTO) => {
    createPlant(payload);
    alert('Planta creada');
    reset()
  }

  return (
    <main className='bg-[var(--color-level-four)] w-full flex flex-col items-center'>

      <form
        className='bg-[var(--color-level-two)] w-1/2 grid grid-cols-2 gap-4 justify-items-center p-5 m-5'
        onSubmit={handleSubmit(clickSubmit)}>

        <h1 className='col-span-2 text-[var(--color-level-six)] font-semibold text-2xl'>CREAR PLANTA</h1>

        <div className='flex flex-col gap-y-1 w-4/5 p-3'>
          <label className='text-(var(--color-level-six)) text-base font-semibold pl-1' htmlFor='commonName'>
            Nombre Com&uacute;n
          </label>
          <input
            className='bg-[var(--color-level-one)] p-3 text-sm rounded'
            type='text' id='commonName' required
            {...register('commonName')}
          />
        </div>

        <div className='flex flex-col gap-y-1 w-full p-3 justify-self-start'>
          <label className='text-(var(--color-level-six)) text-base font-semibold pl-1' htmlFor='scientificName'>
            Nombre Cientifico
          </label>
          <div className='flex gap-5'>
            <input
              className='bg-[var(--color-level-one)] p-3 text-sm rounded w-4/6'
              type='text' id='scientificName'
              {...register('scientificName')}
            />
            <input
              className='bg-[var(--color-level-one)] p-3 text-sm rounded w-1/6'
              type='text'
              {...register('scientistSurnameInitial')}
            />
          </div>
        </div>

        <div className='flex flex-col gap-y-1 p-3 w-1/2'>
          <label className='text-(var(--color-level-six)) text-base font-semibold pl-1' htmlFor='family'>
            Familia
          </label>
          <select className='bg-[var(--color-level-one)] p-3 text-sm rounded'
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

        <div className='flex flex-col gap-y-1 w-1/2 p-3 justify-self-start'>
          <label className='text-(var(--color-level-six)) text-base font-semibold pl-1' htmlFor='status'>
            Estado
          </label>
          <select className='bg-[var(--color-level-one)] p-3 text-sm rounded'
            id='status'
            {...register('status')}>
            {
              allStatus.map((optionItem, index) =>
                <option className='p-3' key={index} value={optionItem}>
                  {optionItem}
                </option>)
            }
          </select>
        </div>

        <div className='col-span-2 flex flex-col gap-y-2 p-3'>
          <label className='text-(var(--color-level-six)) text-base font-semibold pl-1'>
            Clasificaciones
          </label>
          <div className='flex flex-wrap gap-3 justify-center'>
            {
              classifications.map((value, index) =>
                <div key={index} className='bg-[var(--color-level-four)] w-36 p-3 rounded-md'>
                  <input className='mr-2' type='checkbox' id={value} value={value} {...register('classifications')} />
                  <label className='text-sm font-medium text-gray-900 dark:text-gray-300' htmlFor={value}>
                    {value}
                  </label>
                </div>
              )
            }
          </div>
        </div>

        <div className='col-span-2 flex justify-center m-5'>
          <button
            className='text-white font-medium bg-[var(--color-level-five)] hover:bg-[var(--color-level-four)] rounded text-base py-4 px-7'
            type='submit'>
            Crear planta
          </button>
        </div>
      </form>
    </main>
  )
}
