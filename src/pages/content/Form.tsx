const STYLE_LABEL = 'text-sm font-semibold text-gray-900 dark:text-white'

export const Form = () => {
  return (
    <form className="bg-slate-600 w-2/4 flex flex-col justify-center">
      <FormInput contentLabel='Nombre Com&uacute;n' htmlForId='commonName' />
      <FormInput contentLabel='Nombre Cientifico' htmlForId='scientificName' />
      <FormOptions contentLabel='Familia' options={['familia 1', 'familia 2', 'familia 3', 'familia 4', 'familia 5', 'familia 6']} htmlForId='families' />
      <FormOptions contentLabel='Estado' options={['DISPONIBLE', 'CONSERVACIÓN', 'NO EXISTENTE']} htmlForId='status' />
      <FormOptionsMultiple />

      <button type="submit" className="w-1/6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Crear planta
      </button>
    </form>
  )
}

interface FormInputProps {
  contentLabel: string;
  htmlForId: string;
}

const FormInput = ({ contentLabel, htmlForId }: FormInputProps) => {
  const styleInput = 'w-1/3 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light';
  return (
    <div className="flex flex-col gap-y-2 my-3">
      <label htmlFor={htmlForId} className={STYLE_LABEL}>
        {contentLabel}
      </label>
      <input type="text" id={htmlForId} className={`${styleInput}`} required />
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
    <div className='flex flex-col gap-y-2 my-3'>
      <label htmlFor={htmlForId} className={STYLE_LABEL}>
        {contentLabel}
      </label>
      <select id={htmlForId} className="w-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        {
          options.map((optionItem, index) => <option key={index}>{optionItem}</option>)
        }
      </select>
    </div>
  );
}

const FormOptionsMultiple = () => {
  return (
    <div>
      <label className={STYLE_LABEL}>Clasificaci&oacute;n</label>
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
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
    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
      <div className="flex items-center pl-3">
        <input id={htmlForId} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
        <label htmlFor={htmlForId} className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          {contentLabel}
        </label>
      </div>
    </li>
  )
}
