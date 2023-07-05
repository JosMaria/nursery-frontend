import { Link } from 'react-router-dom'
import { ProductResponseDTO } from '../types'
import { useCatalogState } from '../hooks'

export const ProductList = () => {
  const { page: { content } } = useCatalogState()

  return (
    <div className='w-full grid grid-cols-4 place-items-center gap-5 p-5'>
      {
        content.map(product => (
          <ProductItem
            key={product.id}
            product={product}
          />)
        )
      }
    </div>
  )
}

interface ProductItemProps {
  product: ProductResponseDTO
}

const ProductItem = ({ product }: ProductItemProps) => (
  <div className='w-9/12 m-3 h-full hover:shadow-xl flex flex-col justify-center bg-[var(--color-level-six)]'>
    <img
      className='rounded-t w-full p-1 h-4/6'
      src='https://2.bp.blogspot.com/-A5OrWCBE6hk/VLZlh6NP2fI/AAAAAAAAAYc/vhvMMqtlu18/s1600/plantas.jpg'
      alt={product.commonName}
    />
    <Link className='text-[var(--color-level-one)] p-3 rounded-b-xl h-2/6 grid grid-rows-4' to={`/products/${product.id}`}>
      <p className='font-medium text-sm capitalize'>{product.commonName}</p>
      <p className='font-medium text-sm capitalize'><i>{product.scientificName} {product.scientistSurnameInitial}</i></p>
      <p className='font-medium text-sm capitalize'>{product.family}</p>
      <p className='font-semibold text-xs text-center place-self-end'>{product.status}</p>
    </Link>
  </div>
)
