import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            Sobre mi
          </p>
          <h2 className='py-4'>¿ Quien soy ?</h2>
          <p className='py-2 text-gray-600'>
          Soy un Desarrollador de software con experiencia en mantenimiento de sitios web con php , ajax,
lavarel. creación de API con C#, y creación de app con Xamarin Forms. Habilidad en el uso de
frameworks de CSS como Bootstrap, creación de módulos en React, React Native y Next JS, y
consumo de APIs. Experiencia en la creación y modelado de bases de datos y en trabajar con
metodologías ágiles como Scrum. En busca de oportunidades para aplicar habilidades y
conocimientos en un ambiente desafiante y colaborativo de desarrollo de software.

          </p>
     
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
             Ve mis ultimos proyectos
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
