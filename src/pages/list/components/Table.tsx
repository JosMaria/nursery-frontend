import { ItemToList } from '../../../types'
import { titleHeaders } from './constants';

interface TableProps {
  items: Array<ItemToList>
}


export const Table = ({ items }: TableProps) => (
  <table className='h-fit'>
    <thead className='text-sm bg-[var(--color-level-six)] text-[var(--color-level-one)]'>
      <tr>
        {
          titleHeaders.map((titleHeader, index) =>
            <th key={index} className='p-5 text-sm text-start' >
              {titleHeader}
            </th>
          )
        }
      </tr>
    </thead>
    <TableBody items={items} />
  </table>
)

const TableBody = ({ items }: TableProps) => (
  <tbody>
    {
      items.map((item, index) => 
        <tr key={index} 
          className='text-sm bg-slate-800 hover:bg-gray-600 [&:nth-child(even)]:bg-slate-900 [&:nth-child(even)]:dark:hover:bg-gray-600'>        
          <td className='px-6 py-3.5 text-[var(--color-level-one)] font-medium'>
            {item.id}
          </td>
          <td className='px-6 py-3.5 text-[var(--color-level-one)] font-medium first-letter:uppercase'>
            {item.commonName}
          </td>
          <td className='px-6 py-3.5 text-[var(--color-level-one)] font-medium first-letter:uppercase'>
            <i>{item.scientificName} {item.scientistSurnameInitial?.toUpperCase()}</i>
          </td>
          <td className='px-6 py-3.5 text-[var(--color-level-one)] font-medium first-letter:uppercase'>
            {item.family}
          </td>
          <td className='px-6 py-3.5 text-[var(--color-level-one)] font-medium'>
            {item.status}
          </td>
        </tr>
      )
    }
  </tbody>
)
