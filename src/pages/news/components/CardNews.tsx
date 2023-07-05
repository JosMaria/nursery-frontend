import { Link } from 'react-router-dom'
import { NewsResponseDTO } from '../../../types'

interface CardNewsProps {
	newsResponseDTO: NewsResponseDTO
}

export const CardNews = ({ newsResponseDTO }: CardNewsProps) => (
	<div className='w-1/2 flex rounded shadow bg-[var(--color-level-six)] hover:shadow-lg'>
		{
			newsResponseDTO.urlImage &&
				<img
					className='pl-3 h-fit py-3 object-cover rounded-t-2xl md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
					src='https://www.aboutespanol.com/thmb/oxcVdVmVah-wUyZJVxr_OXn43qc=/3771x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-141249909-597c5a013df78cbb7a279e0a.jpg'
					alt={newsResponseDTO.title}
				/>
		}
		<Preview
			id={newsResponseDTO.id}
			title={newsResponseDTO.title}
			description={newsResponseDTO.description}

		/>
	</div>
)

interface PreviewProps {
	id: number
	title: string
	description: string
}

const Preview = ({ id, title, description }: PreviewProps) => (
	<div className='w-full flex flex-col justify-between gap-2 p-4'>
		<div>
			<h5 className='text-lg mb-2 first-letter:capitalize font-bold tracking-tight text-[var(--color-level-one)]'>{title}</h5>
			<p className='font-normal first-letter:capitalize text-sm text-[var(--color-level-one)]'>{description.slice(0, 250)}...</p>
		</div>
		<Link to={`/news/${id}`} className='self-end'>
			<button
				className='w-fit px-8 py-2 rounded text-white font-medium text-base bg-[var(--color-level-three)] hover:bg-[var(--color-level-four)]'
				type='button' >
				Ver mas
			</button>
		</Link>
	</div>
)
