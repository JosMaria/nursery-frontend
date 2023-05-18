import { Link } from 'react-router-dom'

export const Admin = () => {
    return (
        <section className='flex justify-center gap-x-5'>
            <Link to='/form-plant-create'>
                <button
                    className='text-base w-fit p-3 text-[var(--color-level-one)] bg-[var(--color-level-five)] hover:bg-[var(--color-level-three)] rounded-md'
                    type='button'>
                    Crear planta
                </button>
            </Link>

            <Link to='/form-news-create'>
                <button
                    className='text-base w-fit p-3 text-[var(--color-level-one)] bg-[var(--color-level-five)] hover:bg-[var(--color-level-three)] rounded-md'
                    type='button'>
                    Crear Novedad
                </button>
            </Link>
        </section>
    )
}
