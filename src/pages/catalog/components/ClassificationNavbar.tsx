import { ClassificationSelectedType } from '../types'

const classifications: ClassificationSelectedType[] = ['ALIMENTARY', 'ALL', 'CACTUS', 'EXOTIC', 'FOREST', 'FRUITFUL', 'GRASS', 'INDUSTRIAL', 'MEDICINAL', 'ORNAMENTAL', 'SUCCULENT']

export const ClassificationNavbar = () => {
  return (
    <nav>
      <ul>
        {
          classifications.map(classification => (
            <li>
              {classification}
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
