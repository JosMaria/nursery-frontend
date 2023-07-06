import { useEffect, useState } from 'react'
import { Table } from './components'
import { PageInventory } from './types'
import { getPaginatedItems } from './services'

const initialPageInventory: PageInventory = {
  content: [],
  number: 0,
    totalElements: 0,
    totalPages: 0,
    size: 0,
    numberOfElements: 0,
    empty: true,
    first: true,
    last: true
}

export const InventoryPage = () => {
  const [page, setPage] = useState<PageInventory>(initialPageInventory)

  useEffect(() => {
    getPaginatedItems()
      .then(page => setPage(page))
  }, [])

  return (
    <section className='flex flex-col items-center gap-5 justify-center p-4'>
      <Table items={page.content}/>
    </section>
  )
}