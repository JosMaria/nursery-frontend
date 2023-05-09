import { useForm } from 'react-hook-form';
import { CreatePlantDTO } from '../../types';
import { createPlant, fetchAllFamilies } from '../../services';
import { useEffect, useState } from 'react';

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
    <main className='bg-[var(--color-level-four)] w-full flex flex-col items-center'>
      
      <form
        className='bg-[var(--color-level-two)] w-1/2 grid grid-cols-2 gap-4 justify-items-center p-5'
        onSubmit={handleSubmit(clickSubmit)}>
      
        <h1 className='col-span-2 text-[var(--color-level-six)] font-medium text-2xl'>CREAR PLANTA</h1>

        <div className='flex flex-col gap-y-1 w-4/5 p-3'>
          <label className='text-(var(--color-level-six)) text-sm font-medium pl-1' htmlFor='commonName'>
            Nombre Com&uacute;n
          </label>
          <input
            className='bg-[var(--color-level-one)] p-3 text-sm rounded'
            type='text' id='commonName' required
            {...register('commonName')}
          />
        </div>

        <div className='flex flex-col gap-y-1 w-full p-3 justify-self-start'>
          <label className='text-(var(--color-level-six)) text-sm font-medium pl-1' htmlFor='scientificName'>
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

        <div className='flex flex-col gap-y-1 w-1/2'>
          <label className='text-(var(--color-level-six)) text-sm font-medium pl-1'  htmlFor='family'>
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
    </form>
    </main>
  )
}
