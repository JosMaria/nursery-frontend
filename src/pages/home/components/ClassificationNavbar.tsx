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
    <nav className='flex justify-evenly bg-[var(--color-level-six)] text-[var(--color-level-one)]'>
      {
        classifications.map((classification, index) => 
          <div className='p-4 text-sm flex-1 text-center font-medium hover:bg-[var(--color-level-five)] hover:cursor-pointer' 
            key={index}>
            {classification}
          </div>
        )
      }
    </nav>
  )
}
