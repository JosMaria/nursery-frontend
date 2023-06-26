import { useEffect, useState } from 'react'
import { Classification } from '../../../types'
import { fetchAllClassifications } from '../../../services';

interface ClassificationNavbarProps {
  changeClassification: (classification: Classification) => void
}

export const ClassificationNavbar = ({ changeClassification }: ClassificationNavbarProps) => {
  const [classifications, setClassifications] = useState<Array<Classification>>([]);
  const [selected, setSelected] = useState<Classification>('ALL');
  
  useEffect(() => {
    fetchAllClassifications()
      .then(response => setClassifications(response));
  }, [])

  const changeSelected = (classification: Classification) => {
    changeClassification(classification);
    setSelected(classification);
  }

  return (
    <nav className='w-full flex justify-evenly bg-[var(--color-level-six)] text-[var(--color-level-one)]'>
      <ItemClassification classification='ALL' changeSelected={changeSelected} isSelected={selected === 'ALL'} />
      {
        classifications.map((classification, index) =>
          <ItemClassification
            key={index}
            classification={classification}
            changeSelected={changeSelected}
            isSelected={selected === classification}
          />
        )
      }
    </nav>
  )
}

const styleDefault = 'p-3.5 text-sm flex-1 text-center font-medium hover:cursor-pointer';
const styleSelected = `${styleDefault} border-b-4 border-[var(--color-level-one)] bg-[var(--color-level-five)]`;
const styleNonSelected = `${styleDefault} hover:bg-[var(--color-level-five)]`;

interface ItemClassificationProps {
  classification: Classification
  isSelected: boolean
  changeSelected: (classification: Classification) => void
}

const ItemClassification = ({ classification, changeSelected, isSelected }: ItemClassificationProps) => (
  <button
    className={`${isSelected ? styleSelected : styleNonSelected}`}
    onClick={() => changeSelected(classification)}>
    {classification}
  </button>
)
