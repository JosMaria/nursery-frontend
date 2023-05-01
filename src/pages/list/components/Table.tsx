import { ItemToList } from '../../../types'
import { TableBody } from './TableBody'
import { TableHeader } from './TableHeader'

interface TableProps {
  items: Array<ItemToList>
}

export const Table = ({ items }: TableProps) => (
  <table className='text-sm text-left text-gray-500 dark:text-gray-400 w-4/6'>
    <TableHeader />
    <TableBody items={items} />
  </table>
)
