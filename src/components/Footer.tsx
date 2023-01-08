import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
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
      <div>
        section end
      </div>
    </footer>
  )
}

interface FooterSectionInterface {
  title: string,
  content: string
}

const FooterSection = ({ title, content }: FooterSectionInterface) => (
  <div className='footer-section'>
    <h2>{title}</h2>
    <br />
    <p>{content}</p>
  </div>
)

const FooterSectionReference = () => {
  return (
    <div className='footer-section'>
          <div className='footer-section-location-social'>
            <div className='footer-section-location'>
              <h2>Informacion de contacto</h2>
              <br />
              <InformationReference 
                icon={<IoLocationSharp size='1.5em' />}
                content='Km5 - Avenida petrolera Facultad de ciencias Rurales y Territoriales' 
              />

              <InformationReference 
                icon={<FaPhoneAlt size='1.5em' />}
                content='+(591) 79368354'
              />

            </div>
            <div className='footer-icons-container'>
              <div style={{padding: '1em'}}>
                <p>Siguenos en:</p>
                <br />
                <FaFacebookF size='1.5em' />
              </div>
            </div>
          </div>
        </div>
  )
}

interface InformationReferenceInterface {
  icon: JSX.Element
  content: string
}

const InformationReference = ({ icon, content }: InformationReferenceInterface) => {
  return (
    <div className='information-reference-container'>
      <div>
        {icon}
      </div>
      <p>{content}</p>
    </div>
  )
}