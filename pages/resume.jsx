import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Alan Andre | CV</title>
        <meta
          name='description'

        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>CV</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Alan Andre Sanchez Hidalgo</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/alan-andre-sánchez-hidalgo-65123b253/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/AlanAndreUP/'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
            LIDERAZGO COMPROBADO  <span className='px-1'>|</span> DESARROLLO WEB{' '}
              <span className='px-1'>|</span> RESOLUCIÓN DE PROBLEMAS COMPLEJOS
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>LIDERAZGO COMPROBADO</p>
            <p className='py-2'>DESARROLLO WEB</p>
            <p>RESOLUCIÓN DE PROBLEMAS COMPLEJOS</p>
          </div>
        </div>
        <p>
        Profesional en desarrollo web, analítico, innovador y motivado, con experiencia en servicio al cliente, liderazgo de equipos y eficacia organizacional en entornos desafiantes y de ritmo rápido. Experto en el desarrollo de estrategias y en la mejora de las operaciones. Poseo habilidades analíticas diversas, colaboración en equipo y construcción de relaciones interpersonales. Soy un  profesional consumado y líder motivado con sólidas habilidades interpersonales y habilidades para resolver problemas complejos. Tengo un historial efectivo y comprobado en el pensamiento crítico, la generación de ideas y la optimización de la eficiencia.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Habilidades tecnicas</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>PHP
            <span className='px-2'>|</span>Python
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Lavarel
            <span className='px-2'>|</span> RESTAPI
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Certificado de curso AWS
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
         Experencia Profesional
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Flexor
Technologies 
            </span>
            <span className='px-2'>|</span>Guadalajara, México
          </p>
          <p className='py-1 italic'>Desarrollador de Software(Becario) -  Octubre 2022
- Marzo 2023</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            
Aseguré la creación de diseños de interfaz de usuario (UI) completamente responsivos para dispositivos móviles con conocimientos en HTML, CSS ,PHP y JavaScript.
            </li>
            <li>
            Resolví problemas y preocupaciones, configuré complementos operativos y analíticos, y realicé cambios de diseño según fuera necesario.
            </li>
            <li>
             Ayude en la creación de una App Mobile usando Xamarin Forms
            </li>
            <li>
              Ayude en la creación de una Api que se usaria como forma de comunicacion de la App Mobile con el servidor, Junto con el crud necesario para realizar la comunicacion
            </li>
          </ul>
        </div>


        

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
        Otra Experencia Profesional
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Misionero de la Iglesia de Jesucristo de los Santos de los ultimos Dias</span>
            <span className='px-2'>|</span>Ciudad de México, México
          </p>
          <p className='py-1 italic'>Junio 2020  / Mayo  2022</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Liderazgo y enseñanza de grupos de 10 a 20
personas.

            </li>
            <li>
            Desarrollo de habilidades de enseñanza y
motivación
            </li>
            <li>
            Adaptación a circunstancias no previstas y
reporte de información concisa y relevante.
            </li>
            <li>
            Seguimiento y rendición de cuentas sobre
metas establecidas
            </li>
        
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
