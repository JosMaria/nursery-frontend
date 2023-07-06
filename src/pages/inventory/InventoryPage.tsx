import { Table } from './components'
import { InventoryProvider } from './contexts'

export const InventoryPage = () => (
  <InventoryProvider>
    <section className='flex flex-col items-center gap-5 justify-center p-4'>
      <Table />
    </section>
  </InventoryProvider>
)
