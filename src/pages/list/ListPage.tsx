import { useEffect, useState } from 'react'
import { ItemToList } from '../../types'
import { fetchAllItemsToList } from '../../services';
import { Admin, Table } from './components';

export const ListPage = () => {
  const [items, setItems] = useState<Array<ItemToList>>([]);

  useEffect(() => {
    fetchAllItemsToList()
      .then(responseItems => setItems(responseItems));
  }, []);

  return (
    <div className='flex flex-col gap-5 justify-center p-4'>
      <Admin />
      <Table items={items} />
    </div>
  )
}
