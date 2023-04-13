const STYLE_LABEL = 'pb-2 pl-2 text-sm font-semibold text-gray-900 dark:text-white'

export const Form = () => {
  return (
    <section className="bg-violet-900 flex justify-center center">
      <form className="w-1/4 p-5 m-5 bg-slate-600 flex flex-col justify-center items-center gap-y-5">
        <h1 className="text-2xl dark:text-white font-semibold">CREAR PLANTA</h1>
        <FormInput contentLabel='Nombre Com&uacute;n' htmlForId='commonName' />
        <FormInput contentLabel='Nombre Cientifico' htmlForId='scientificName' isFieldScientificName={true} />
        <FormOptions contentLabel='Familia' options={['familia 1', 'familia 2', 'familia 3', 'familia 4', 'familia 5', 'familia 6']} htmlForId='families' />
        <FormOptions contentLabel='Estado' options={['DISPONIBLE', 'CONSERVACIÓN', 'NO EXISTENTE']} htmlForId='status' />
        <FormOptionsMultiple />
        <button type="submit" className="text-white font-semibold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Crear planta
        </button>
      </form>
    </section>
  )
}

interface FormInputProps {
  contentLabel: string;
  htmlForId: string;
  isFieldScientificName?: boolean;
}

const FormInput = ({ contentLabel, htmlForId, isFieldScientificName }: FormInputProps) => {
  const styleInput = 'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light';
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={htmlForId} className={STYLE_LABEL}>
        {contentLabel}
      </label>
      
      {
        isFieldScientificName ? 
          (
            <div className="flex gap-5">
              <input type="text" id={htmlForId} className={`${styleInput} w-9/12`} required />
              <input type="text" className={`${styleInput} w-1/6`} />
            </div>
            
          ) : (
            <input type="text" id={htmlForId} className={`${styleInput}`} required />
          )
      }
    </div>
  );
}

interface FormOptionsProps {
  contentLabel: string;
  options: Array<string>;
  htmlForId: string;
}

const FormOptions = ({ contentLabel, options, htmlForId }: FormOptionsProps) => {
  return (
    <div className='flex flex-col w-full'>
      <label htmlFor={htmlForId} className={STYLE_LABEL}>
        {contentLabel}
      </label>
      <select id={htmlForId} className="w-full p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        {
          options.map((optionItem, index) => <option key={index} className='p-3'>{optionItem}</option>)
        }
      </select>
    </div>
  );
}

const FormOptionsMultiple = () => {
  return (
    <div className="w-2/3">
      <label className={STYLE_LABEL}>Clasificaci&oacute;n</label>
      <ul className="w-full p-1 m-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <FormOptionsMultipleItem contentLabel='MEDICINAL' htmlForId='item-medicinal' />
        <FormOptionsMultipleItem contentLabel='ORNAMENTAL' htmlForId='item-ornamental' />
        <FormOptionsMultipleItem contentLabel='INDUSTRIAL' htmlForId='item-industrial' />
      </ul>
    </div>
  );
}

interface FormOptionsMultipleItemProps {
  contentLabel: string;
  htmlForId: string;
}

const FormOptionsMultipleItem = ({ contentLabel, htmlForId }: FormOptionsMultipleItemProps) => {
  return (
    <li className="border-b border-gray-200 rounded-t-lg dark:border-gray-600">
      <div className="flex items-center p-2">
        <input id={htmlForId} type="checkbox" value="" className="mr-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
        <label htmlFor={htmlForId} className="text-sm font-medium text-gray-900 dark:text-gray-300">
          {contentLabel}
        </label>
      </div>
    </li>
  )
}
