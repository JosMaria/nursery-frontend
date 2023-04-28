import { useEffect, useState } from 'react'
import { Classification } from '../../../types'
import { fetchAllClassifications } from '../../../services';

export const ClassificationNavbar = () => {
  const [classifications, setClassifications] = useState<Array<Classification>>([]);

  useEffect(() => {
    fetchAllClassifications()
      .then(response => setClassifications(response));
  }, [])

  return (
    <nav className='flex justify-evenly dark:bg-gray-800 text-gray-100 w-full'>
      {
        classifications.map((classification, index) => 
          <div key={index}
            className='px-5 py-4 text-sm font-medium hover:text-blue-600 hover:cursor-pointer capitalize'>
            {classification}
          </div>
        )
      }
    </nav>
  )
}
