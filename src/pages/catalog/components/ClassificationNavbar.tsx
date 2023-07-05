import { useChangeClassification } from '../hooks'
import { PlantClassificationType } from '../types'

const classifications: PlantClassificationType[] = ['ALIMENTARY', 'CACTUS', 'EXOTIC', 'FOREST', 'FRUITFUL', 'GRASS', 'INDUSTRIAL', 'MEDICINAL', 'ORNAMENTAL', 'SUCCULENT']

export const ClassificationNavbar = () => {
  const { changeClassification } = useChangeClassification()

  return (
    <ul className='flex cursor-pointer bg-[var(--color-level-six)] text-[var(--color-level-one)]'>
      <li
        className='flex-1 text-center p-4 hover:bg-[var(--color-level-five)]'
        onClick={() => changeClassification(null)}
      >
        TODO
      </li>
      {
        classifications.map((classification, index) => (
          <li
            key={index}
            className='flex-1 text-center p-4 hover:bg-[var(--color-level-five)]'
            onClick={(e) => changeClassification(e.currentTarget.textContent as PlantClassificationType)}
          >
            {classification}
          </li>
        ))
      }
    </ul>
  )
}
