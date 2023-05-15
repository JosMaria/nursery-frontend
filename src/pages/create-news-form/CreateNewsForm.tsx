import React from 'react'
import { useForm } from 'react-hook-form'
import { CreateNewsDTO } from '../../types'

export const CreateNewsForm = () => {
	const { register, handleSubmit } = useForm<CreateNewsDTO>()

	return (
		<form
			className='bg-[var(--color-level-two)] w-2/3 flex flex-col items-center gap-4 p-5'>
			<h1 className='text-[var(--color-level-six)] font-semibold text-2xl'>CREAR NOVEDAD</h1>
			
			<div className='flex flex-col gap-y-1 w-2/3'>
        <label className='text-(var(--color-level-six)) text-base font-semibold pl-1' htmlFor='title'>
          T&iacute;tulo
        </label>
        <input
          className='bg-[var(--color-level-one)] p-3 text-sm rounded'
          type='text' id='title' required
          {...register('title')}
        />
      </div>

			<div className='flex flex-col gap-y-1 w-2/3'>
				<label className="text-(var(--color-level-six)) text-base font-semibold pl-1" htmlFor="description">
					Descripci&oacute;n
				</label>
				<textarea 
					className="p-2 text-sm bg-[var(--color-level-one)] rounded-md placeholder-[var(--color-level-five)]" 
					placeholder="Descripci&oacute;n ..."
					id="description" 
					rows={10} >
				</textarea>
			</div>

			
			<button
				className='text-white font-medium bg-[var(--color-level-five)] hover:bg-[var(--color-level-four)] rounded text-base py-3.5 px-6'
				type='submit'>
				Crear Novedad
			</button>
		
		</form>
	)
}
