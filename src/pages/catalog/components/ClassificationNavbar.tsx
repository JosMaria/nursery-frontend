import { getPaginatedProducts } from '../services'
import { ClassificationSelectedType } from '../types'

const classifications: ClassificationSelectedType[] = ['ALIMENTARY', 'ALL', 'CACTUS', 'EXOTIC', 'FOREST', 'FRUITFUL', 'GRASS', 'INDUSTRIAL', 'MEDICINAL', 'ORNAMENTAL', 'SUCCULENT']

export const ClassificationNavbar = () => {

  const changeClassification = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const classificationSelected = e.currentTarget.textContent as ClassificationSelectedType
    console.log(classificationSelected)
    getPaginatedProducts(classificationSelected)
  }

  return (
    <ul className='flex cursor-pointer bg-[var(--color-level-six)] text-[var(--color-level-one)]'>
      {
        classifications.map((classification, index) => (
          <li
            key={index}
            className='flex-1 text-center p-4 hover:bg-[var(--color-level-five)]'
            onClick={changeClassification}
          >
            {classification}
          </li>
        ))
      }
    </ul>
  )
}
