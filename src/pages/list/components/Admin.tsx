import { Link } from "react-router-dom"

export const Admin = () => {
    return (
        <section>
            <Link to='/form-create' className='self-center'>
                <button
                    className='text-base w-fit p-3 text-[var(--color-level-one)] bg-[var(--color-level-five)] hover:bg-[var(--color-level-three)] rounded-md'
                    type='button'>
                    Crear planta
                </button>
            </Link>
        </section>
    )
}
