import { useEffect } from "react"
import { useChangeStatus, useInventoryState } from "../hooks"

export const Table = () => (
  <table>
    <TableHeader />
    <TableBody />
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

const TableBody = () => {
  const { page: { content: items } } = useInventoryState()
  const { changeStatus } = useChangeStatus()

  useEffect(() => {
    changeStatus('AVAILABLE')
  }, [])

  const cellStyle = 'px-6 py-3.5 text-[var(--color-level-one)] font-medium'
  const cellStyleUppercase = `${cellStyle} first-letter:uppercase`

  return (
    <tbody>
      {
        items.map((item, index) => (
          <tr
            key={index}
            className='text-sm bg-slate-800 hover:bg-gray-600 [&:nth-child(even)]:bg-slate-900 [&:nth-child(even)]:dark:hover:bg-gray-600'
          >
            <td className={cellStyle}>
              {item.id}
            </td>
            <td className={cellStyleUppercase}>
              {item.commonName}
            </td>
            <td className={cellStyleUppercase}>
              <i>{item.scientificName} {item.scientistSurnameInitial?.toUpperCase()}</i>
            </td>
            <td className={cellStyleUppercase}>
              {item.family}
            </td>
            <td className={cellStyle}>
              {item.status}
            </td>
          </tr>
        ))
      }
    </tbody>
  )
}
