export const Table = () => (
  <table>
    <TableHeader />
  </table>
)


const TableHeader = () => {
  const TITLE_HEADER = ['ID', 'NOMBRE COMUN', 'NOMBRE CIENTIFICO', 'FAMILIA', 'ESTADO']

  return (
    <thead className='text-sm bg-[var(--color-level-six)] text-[var(--color-level-one)]'>
      <tr>
        {
          TITLE_HEADER.map((title, index) => (
            <th key={index} className='p-5 text-sm text-start' >
              {title}
            </th>
          ))
        }
      </tr>
    </thead>
  )
}