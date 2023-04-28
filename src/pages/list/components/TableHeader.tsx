const titleHeaders = ['id', 'nombre comun', 'nombre cientifico', 'familia', 'estado'];

export const TableHeader = () => (
  <thead className='text-xs text-gray-600 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100'>
    <tr>
      {
        titleHeaders.map((titleHeader, index) =>
          <th key={index} className='px-5 py-5 text-sm' >
            {titleHeader}
          </th>
        )
      }
    </tr>
  </thead>
)
