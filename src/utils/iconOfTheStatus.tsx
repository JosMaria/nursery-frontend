import { ProductStatus } from '../components';
import { TbPlant, TbPlantOff } from 'react-icons/tb';
import { BsBagCheck } from 'react-icons/bs';
import { Status } from '../types'

export const getIconGivenStatus = (status: Status): JSX.Element => {
  if (status === 'AVAILABLE') {
    return <ProductStatus icon={<BsBagCheck size='2.5em' />} description='DISPONIBLE' />;
  } else if (status === 'IN_CONSERVATION') {
    return <ProductStatus icon={<TbPlant size='2.5em' />} description='CONSERVACIÓN' />;
  } else {
    return <ProductStatus icon={<TbPlantOff size='2.5em' />} description='NO EXISTENTE' />;
  }
}