/*import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createPlant } from "../../services";
import { fetchAllFamilies } from "../../services/newsService";
import { Status, Classification, CreatePlantDTO } from '../../types/product'

const STYLE_LABEL = 'pb-2 pl-2 text-sm font-semibold text-gray-900 dark:text-white'

// TODO: delete this data
const states: Array<Status> = ['AVAILABLE', 'IN_CONSERVATION','NON_EXISTENT']

type ClassificationSpanish = 'ornamental' | 'forestal' | 'industrial' | 'alimenticia' | 'medicinal' | 'exotica' |
'cactus' | 'frutal' | 'crasa' | 'suculenta' | 'todo';

const classifications: Array<Classification> = 
  ['ORNAMENTAL', 'FOREST', 'INDUSTRIAL', 'ALIMENTARY', 'MEDICINAL', 'EXOTIC', 'CACTUS', 'FRUITFUL', 'GRASS', 'SUCCULENT'];

export const Form = () => {

  const { register, handleSubmit, reset } = useForm<CreatePlantDTO>();
  const [families, setFamilies] = useState<Array<string>>([]);

  useEffect(() => {
    fetchAllFamilies()
      .then(familiesObtained => setFamilies(familiesObtained));
  }, [])

  const clickSubmit = (payload: CreatePlantDTO) => {
    createPlant(payload);
    alert('Planta creada');
    reset()
  }

  return (
    <section className='bg-violet-900 flex justify-center center'>
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
            type='text'
            id='commonName'
            required
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
                <option
                  className='p-3'
                  key={index}
                  value={optionItem}>
                  {optionItem}
                </option>)
            }
          </select>
        </div>

        <div className='flex flex-col w-1/3'>
          <label className={STYLE_LABEL} htmlFor='status'>
            Estado
          </label>
          <select
            className='w-full p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            id='status'
            {...register('status')}>
            {
              states.map((optionItem, index) =>
                <option
                  className='p-3'
                  key={index}
                  value={optionItem}>
                  {traslateStatus(optionItem)}
                </option>)
            }
          </select>
        </div>
        
        
        <div className="flex flex-col w-full">
          <label className={STYLE_LABEL}>Clasificaciones</label>
          <div className="grid grid-cols-4 gap-x-4 gap-y-2 justify-end p-2">
            {
              classifications.map((value, index) => 
                <div key={index} className='p-3 text-gray-900 bg-white dark:bg-gray-700 dark:text-white'>
                  <input className="mr-2" type='checkbox' id={value} value={value} {...register('classifications')} />
                  <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor={value}>
                    {translateToSpanish(value)}
                  </label>
                </div>
              )
            }  
          </div>
        </div>
        
        <div className="w-full flex justify-center">
          <button type='submit' className='text-white font-semibold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Crear planta
          </button>
        </div>
        
      </form>
    </section>
  )
}

// NOTE: all dtos in english
type StatusSpanish = 'DISPONIBLE' | 'CONSERVACION' | 'NO EXISTENTE';

const traslateStatus = (state: Status): StatusSpanish => {
  if (state === 'AVAILABLE') {
    return 'DISPONIBLE';
  } else if (state === "IN_CONSERVATION") {
    return 'CONSERVACION';
  } else {
    return 'NO EXISTENTE';
  }
}

const translateToSpanish = (classification: Classification): ClassificationSpanish => {
  if (classification === 'ORNAMENTAL') {
      return  'ornamental';
  } else if (classification === 'FOREST') {
      return 'forestal';
  } else if (classification === 'INDUSTRIAL') {
      return 'industrial';
  } else if (classification === 'ALIMENTARY') {
      return 'alimenticia';
  } else if (classification === 'MEDICINAL') {
      return 'medicinal';
  } else if (classification === 'EXOTIC') {
      return 'exotica';
  } else if (classification === 'CACTUS') {
      return 'cactus';
  } else if (classification === 'FRUITFUL') {
      return 'frutal';
  } else if (classification === 'GRASS') {
      return 'crasa';
  } else {
      return 'suculenta';
  }
}
*/