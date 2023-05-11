import { useEffect, useState } from 'react'
import { ItemToList } from '../../types'
import { fetchAllItemsToList } from '../../services';
import { Table } from './components';

export const ListPage = () => {
  const [items, setItems] = useState<Array<ItemToList>>([]);

  useEffect(() => {
    fetchAllItemsToList()
      .then(responseItems => setItems(responseItems));
  }, []);

  return (    
    <div className='flex justify-center p-4'>
      <Table items={items} />
    </div>
  )
}
