import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

import './stylesheets/Footer.css';

export const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-section-container'>
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
      <CopyrightSection />
    </footer>
  )
}

const CopyrightSection = () => (
  <div className='copyright-section-container'>
    <p>
      <b>DERECHOS RESERVADOS  ©  2023 · </b>
      <a 
      href="https://www.umss.edu.bo/" 
      style={{ color: "#ffffff", textDecoration: "underline" }}><b>UNIVERSIDAD MAYOR DE SAN SIMÓN</b></a>
    </p>  
  </div>
);

interface FooterSectionProps {
  title: string,
  content: string
}

const FooterSection = ({ title, content }: FooterSectionProps) => (
  <div className='footer-section'>
    <h2>{title}</h2>
    <br />
    <p>{content}</p>
  </div>
)

const FooterSectionReference = () => {
  const toLocation: JSX.Element = (
    <InformationReference 
      icon={<IoLocationSharp size='1.5em' />}
      content='Km5 - Avenida petrolera Facultad de ciencias Rurales y Territoriales' 
    />
  )

  const toPhone: JSX.Element = (
    <InformationReference 
      icon={<FaPhoneAlt size='1.5em' />}
      content='+(591) 79368354'
    />
  )

  return (
    <div className='footer-third-section'>
      <div className='footer-section-location-social'>
        <SectionInformationReference 
          title='Informacion de contacto'
          children={[toLocation, toPhone]}
        /> 
      </div>
      <SocialMediaSection 
        title='Estamos en'
        children={[<FaFacebookF size='1.5em' />, <FaInstagram size='1.5em' />]}
      />
    </div>
  )
}

interface SocialMediaSectionProps {
  title: string,
  children ?: JSX.Element | JSX.Element[]  
}

const SocialMediaSection = ({ title, children }: SocialMediaSectionProps) => (
  <div>
    <p><b>{title}</b></p>
    <div className='icons-social-media'>
      {children}
    </div>
  </div>
)

interface InformationReferenceProps {
  icon: JSX.Element
  content: string
}

const InformationReference = ({ icon, content }: InformationReferenceProps) => (
  <div className='information-reference-container'>
    <div>
      {icon}
    </div>
    <p>{content}</p>
  </div>
)

interface SectionInformationReferenceProps {
  title: string,
  children?: JSX.Element | JSX.Element[]
}

const SectionInformationReference = ({ title, children }: SectionInformationReferenceProps) => (
  <div className='footer-section-location'>
    <h2>{title}</h2>
    <br />
    {children}
  </div>
)
