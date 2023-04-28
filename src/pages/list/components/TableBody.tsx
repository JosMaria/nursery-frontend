import { ItemToList } from "../../../types"

const style = 'text-slate-300 px-6 py-4 text-white font-medium';

interface TableBodyProps {
  items: Array<ItemToList>
}

export const TableBody = ({ items }: TableBodyProps) => (
  <tbody>
    {
      items.map((item, index) => 
        <tr key={index} 
          className='bg-white border-b border-gray-700 [&:nth-child(even)]:dark:bg-gray-800 [&:nth-child(even)]:dark:hover:bg-gray-600 dark:bg-gray-900 dark:hover:bg-gray-600'
          >
          <td className={style}>{item.id}</td>
          <td className={`${style} first-letter:uppercase`}>{item.commonName}</td>
          <td className={`${style} first-letter:uppercase`}><i>{item.scientificName} {item.scientistSurnameInitial?.toUpperCase()}</i></td>
          <td className={`${style} first-letter:uppercase`}>{item.family}</td>
          <td className={`${style} uppercase`} >{item.status}</td>
        </tr>
      )
    }
  </tbody>
)
