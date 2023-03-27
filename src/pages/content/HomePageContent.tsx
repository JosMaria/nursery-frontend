import { useEffect, useState } from 'react';
import { Product, ClassificationNavbar } from '../../components'
import { fetchAllProducts } from '../../services';
import { ProductResponseDTO } from '../../types';
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

const totalProductsByPage = 12;

export const HomePageContent = () => {
  
  const [products, setProducts] = useState(Array<ProductResponseDTO>);
  const[page, setPage] = useState(1)
  
  useEffect(() => {
    fetchAllProducts(page)
      .then(data => setProducts(data));
  }, [page])
  
  const nextPage = () => setPage(prev => prev + 1);
  const prevPage = () => setPage(prev => prev - 1);

  return (
    <section className='bg-gray-400 w-full flex flex-col justify-between'>
      <ClassificationNavbar />
      <ContentProducts products={products} />
      <SectionPageButton page={page} productsLength={products.length} prevPage={prevPage} nextPage={nextPage} />
    </section>
  )
}

interface ContentProductsProps {
  products: Array<ProductResponseDTO>
}

const ContentProducts = ({ products }: ContentProductsProps) => (
  <section className='flex flex-wrap justify-evenly gap-10 p-8'>
    {
      products.map(product => 
      <Product
        key={product.id}
        id={product.id}
        commonName={product.commonName}
        scientificName={product.scientificName}
        firstLetterLastname={product.firstLetterLastname}
        family={product.family}
        status={product.status}
        urlPicture={product.urlPicture}
      />)
    }
  </section>
)

interface SectionPageButtonProps {
  page: number,
  productsLength: number
  prevPage: () => void,
  nextPage: () => void
}

const SectionPageButton = ({ page, productsLength, prevPage, nextPage }: SectionPageButtonProps) => (
  <section className='flex gap-10 justify-center p-7 w-full'>
    <PageButton 
      changePage={prevPage}
      disabled={page === 0}
      icon={<GrFormPreviousLink size='1.4em' />}
      reverse={true}
      text='Anterior'
    />
    <PageButton 
      changePage={nextPage}
      disabled={productsLength < totalProductsByPage}
      icon={<GrFormNextLink size='1.4em' />}
      reverse={false}
      text='Siguiente'
    />
  </section>
)

interface PageButtonProps {
  changePage: () => void,
  disabled: boolean,
  icon: JSX.Element,
  reverse: boolean,
  text: string
}

const PageButton = ({ changePage, disabled, icon, text, reverse }: PageButtonProps) => {
  const style = 'flex items-center gap-1 text-lg font-medium bg-slate-300 hover:bg-slate-400 text-gray-900 p-4 rounded-xl'
  return (
    <button
      className={reverse ? `${style} flex-row-reverse` : `${style}`}
      onClick={changePage}
      disabled={disabled}
    >
      {text}
      {icon}
    </button>
  )
}
