import { FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

export const Footer = () => (
  <footer className='flex flex-col items-center bg-slate-900 text-zinc-50'>
    <div className='flex flex-wrap items-start gap-10 justify-around p-4 w-full'>
      <FooterSection 
        title='Información'
        content='La Universidad Mayor de San Simón (UMSS), fundada por Ley del 5 de noviembre de 1832, durante la 
        Presidencia del Mcal. Andrés de Santa Cruz, es una entidad autónoma, de derecho público, constituida 
        por docentes, estudiantes y personal administrativo, con personería jurídica propia, reconocida por 
        la Constitución Política del Estado. Cubre el área de la educación superior con sus funciones de 
        enseñanza-aprendizaje, investigación científica y tecnológica e interacción social universitaria.'
      />

      <FooterSection
        title='Sobre el vivero'
        content='En los viveros se mantienen condiciones especiales en lo que respecta a la intensidad de luz solar 
        que incide sobre la planta, manteniendo un mínimo de ésta. Una vez que la plántula se ha desarrollado 
        y ya es una planta desarrollada, se hace el trasplante definitivo a campo. El vivero es una práctica 
        común en frutales. También es llamado vivero a las instalaciones en las cuales se comercia una gran 
        cantidad de plantas, especialmente ornamentales'
      />

      <FooterSectionReference />
    </div>
    <CopyrightSection 
      title='DERECHOS RESERVADOS  ©  2023 · ' 
      textReference='UNIVERSIDAD MAYOR DE SAN SIMÓN'
      reference='https://www.umss.edu.bo/'
    />
  </footer>
)


interface FooterSectionProps {
  title: string,
  content: string
}

const FooterSection = ({ title, content }: FooterSectionProps) => (
  <div className='flex flex-wrap flex-col max-w-sm'>
    <h2 className='text-xl font-semibold py-2'>{title}</h2>
    <p className='text-xs'>{content}</p>
  </div>
)

interface CopyrightSectionProps {
  title: string,
  textReference: string,
  reference: string
}

const CopyrightSection = ({title, textReference, reference}: CopyrightSectionProps) => (
  <div className='bg-netral-900'>
    <p className='py-2 text-xs'>
      {title}
      <a className='underline'href={reference} >
        <b>{textReference}</b>
      </a>
    </p>  
  </div>
);

const FooterSectionReference = () => (
  <div className='max-w-sm'>
    <SectionInformationReference title='Informacion de contacto' /> 
    <SocialMediaSection title='Estamos en' />
  </div>
)

interface SectionInformationReferenceProps { title: string }

const SectionInformationReference = ({ title }: SectionInformationReferenceProps) => (
  <div>
    <h2 className='text-xl font-semibold py-2'>{title}</h2>
    <InformationReference 
      icon={<IoLocationSharp size='2.5em' />}
      content='Km5 - Avenida petrolera Facultad de ciencias Rurales y Territoriales' 
    />
    <InformationReference
      icon={<FaPhoneAlt size='2.5em' />}
      content='+(591) 79368354'
    />
  </div>
)

interface InformationReferenceProps {
  icon: JSX.Element
  content: string
}

const InformationReference = ({ icon, content }: InformationReferenceProps) => (
  <div className='flex items-center pb-4'>
    <div className='pr-3'>
      { icon }
    </div>
    <p className='text-xs'>{content}</p>
  </div>
)

interface SocialMediaSectionProps { title: string }

const SocialMediaSection = ({ title }: SocialMediaSectionProps) => (
  <div className='py-2'>
    <p className='text-base font-semibold'>{title}</p>
    <div className='flex gap-3 pt-3'>
      <FaFacebookF size='3em' />, 
      <FaInstagram size='3em' />
    </div>
  </div>
)
