import Image from 'next/image';
import React from 'react';
import netflixImg from '../public/assets/projects/netflix.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const netflix = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={netflixImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Inmobiliaría Up</h2>
          <h3>Next Js / Tailwind </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Proyecto</p>
          <h2>¿Que es lo que se realizo?</h2>
          <p>
          Construí esta aplicación utilizando Next.js y está alojada en netlify. Esta aplicación presenta autenticación de usuario utilizando la API de autenticación de Next.js, y también utiliza la API de almacenamiento de datos incorporada en Next.js. La aplicación cuenta con diferentes páginas para mostrar distintas categorías de películas, y utiliza la funcionalidad de enrutamiento de Next.js para navegar entre ellas. También se implementa el hook useContext de React para gestionar el estado de la aplicación. Además, se han utilizado otros componentes y funciones de Next.js, como el componente Image para mostrar imágenes optimizadas, y la función getStaticProps para generar páginas estáticas en tiempo de compilación.
          </p>
          <a
            href='https://github.com/AlanAndreUP/Tarea'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://astonishing-kleicha-0d03c1.netlify.app'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Tecnologias</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next Js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
            
              
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Atras</p>
        </Link>
      </div>
    </div>
  );
};

export default netflix;
