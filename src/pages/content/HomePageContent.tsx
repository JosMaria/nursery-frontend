import { useEffect, useState } from 'react';
import { Product, ClassificationNavbar } from '../../components'
import { fetchAllProducts, fetchAllProductsByClassification } from '../../services';
import { ProductResponseDTO } from '../../types';
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import { fetchAllClassificationsByUtility } from '../../services/newsService';

const totalProductsByPage = 12;
const FIRST_PAGE = 0;

const styleButtonPage = 'gap-1 text-lg font-medium bg-slate-300 hover:bg-slate-400 text-gray-900 p-4 rounded-xl';
const styleButtonPageDisabled = 'gap-1 text-lg font-medium bg-slate-500  p-4 rounded-xl';

export const HomePageContent = () => {

  const [products, setProducts] = useState<Array<ProductResponseDTO>>();
  const [page, setPage] = useState(FIRST_PAGE);

  useEffect(() => {
    fetchAllProducts(page)
      .then(data => setProducts(data));
  }, [page])

  const setProductByDefault = () => {
    fetchAllProducts().then(data => setProducts(data));
  }

  const setProductsByClassification = (classification: string) => {
    fetchAllProductsByClassification(classification)
      .then(response => setProducts(response));
  }

  const nextPage = () => setPage(prevPage => prevPage + 1);
  const prevPage = () => setPage(prevPage => prevPage - 1);

  return (
    <section className='bg-gray-400 w-full flex flex-col justify-between black'>
      <ClassificationNavbar
        setProductByDefault={setProductByDefault}
        setProductsByClassification={setProductsByClassification}
      />
      {products && <ContentProducts products={products} />}
      {/* <SectionPageButton page={page} productsLength={products.length} prevPage={prevPage} nextPage={nextPage} /> */}

      <div className='flex gap-5 justify-center p-5'>
        <button
          className={page === FIRST_PAGE ? styleButtonPageDisabled : styleButtonPage}
          disabled={page === FIRST_PAGE}
          onClick={prevPage}>
          Anterior
        </button>
        <button
          className={products?.length === 0 ? styleButtonPageDisabled : styleButtonPage}
          disabled={products?.length === 0}
          onClick={nextPage}>
          Siguiente
        </button>
      </div>
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
      disabled={page < 0}
      icon={<GrFormPreviousLink size='1.4em' />}
      reverse={true}
      text='Anterior'
    />
    <PageButton
      changePage={nextPage}
      disabled={productsLength === 0}
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
