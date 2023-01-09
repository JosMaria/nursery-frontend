import { ProductResponseDTO } from "../types";
import { Product } from "../components";

import './stylesheets/HomePage.css';

export const HomePage = ({ identification, status }: ProductResponseDTO) => {
  return (
    <section>
      <Product identification={identification} status={status} />
    </section>
  )
}
