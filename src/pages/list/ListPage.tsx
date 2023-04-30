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
    <section className='bg-gray-400'>
			<div className='relative overflow-x-auto shadow-md sm:rounded-lg flex justify-center p-5'>
        <Table items={items} />
			</div>
		</section>
  )
}
