import { useEffect, useState } from 'react'
import { fetchAllIdentification } from '../../services';
import { IdentificationResponseDTO, Status } from '../../types';

export const ListPage = () => {

	const [identifications, setIdentifications] = useState(Array<IdentificationResponseDTO>);

	useEffect(() => {
		fetchAllIdentification()
			.then((data: Array<IdentificationResponseDTO>) => setIdentifications(data))
	}, [])

	return (
		<section className='bg-gray-400'>
			<div className='relative overflow-x-auto shadow-md sm:rounded-lg flex justify-center p-5'>
				<Table identifications={identifications} />
			</div>
		</section>
	)
}

const Table = ({ identifications }: TableProps) => (
	<table className='text-sm text-left text-gray-500 dark:text-gray-400 w-4/6'>
		<TableHeader />
		<TableBody identifications={identifications} />
	</table>
)

const TableHeader = () => (
	<thead className='text-xs text-gray-600 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100'>
		<tr>
			<TableHeaderItem title='id' />
			<TableHeaderItem title='nombre comun' />
			<TableHeaderItem title='nombre cientifico' />
			<TableHeaderItem title='familia' />
			<TableHeaderItem title='estado' />
		</tr>
	</thead>
)

interface TableHeaderItemProps {
	title: string
}

const TableHeaderItem = ({ title }: TableHeaderItemProps) => (
	<th className='px-5 py-5 text-sm'>
		{title}
	</th>
)

interface TableProps {
	identifications: Array<IdentificationResponseDTO>
}

const TableBody = ({ identifications }: TableProps) => (
	<tbody>
		{
			identifications.map(identification =>
				<TableRowItem
					key={identification.id}
					identification={identification}
				/>
			)
		}
	</tbody>
)

interface TableRowItemProps {
	identification: IdentificationResponseDTO
}

const TableRowItem = ({ identification }: TableRowItemProps) => {
	const style = 'text-slate-300 px-6 py-4 text-white font-medium';
	return (
		<tr className='bg-white border-b border-gray-700 [&:nth-child(even)]:dark:bg-gray-800 [&:nth-child(even)]:dark:hover:bg-gray-600 dark:bg-gray-900 dark:hover:bg-gray-600'>
			<td className={style}>{identification.id}</td>
			<td className={`${style} first-letter:uppercase`}>{identification.commonName}</td>
			<td className={`${style} first-letter:uppercase`}><i>{identification.scientificName} {identification.firstLetterLastname?.toUpperCase()}</i></td>
			<td className={`${style} first-letter:uppercase`}>{identification.family}</td>
			<td className={`${style} uppercase`} >{statusToSpanish(identification.status)}</td>
		</tr>
	)
}


const statusToSpanish = (status: Status) => status === 'IN_CONSERVATION' ? 'EN CONSERVACION' : status === 'AVAILABLE' ? 'DISPONIBLE' : 'NO EXISTENTE';
