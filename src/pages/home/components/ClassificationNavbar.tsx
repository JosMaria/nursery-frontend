import { useEffect, useState } from 'react'
import { Classification } from '../../../types'
import { fetchAllClassifications } from '../../../services';

interface ClassificationNavbarProps {
  changeClassification: (classification: Classification) => void
}

export const ClassificationNavbar = ({ changeClassification }: ClassificationNavbarProps) => {
  const [classifications, setClassifications] = useState<Array<Classification>>([]);

  useEffect(() => {
    fetchAllClassifications()
      .then(response => setClassifications(response));
  }, [])

  return (
    <nav className='w-full flex justify-evenly bg-[var(--color-level-six)] text-[var(--color-level-one)]'>
      <ItemClassification classification='ALL' changeClassification={changeClassification}/>
      {
        classifications.map((classification, index) =>
          <ItemClassification 
            key={index}
            classification={classification} 
            changeClassification={changeClassification}
          />
        )
      }
    </nav>
  )
}

interface ItemClassificationProps extends ClassificationNavbarProps {
  classification: Classification
}

const ItemClassification = ({ classification, changeClassification }: ItemClassificationProps) => (
  <button
    className='p-3.5 text-sm flex-1 text-center font-medium hover:bg-[var(--color-level-five)] hover:cursor-pointer'
    onClick={() => changeClassification(classification)}>
    {classification}
  </button>
)
