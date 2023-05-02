import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Ingenerio Alan Andre Sanchez Hidalgo</title>
        <meta name="description" content="Soy un Ingenerio en software." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <div className='flex justify-center py-12'>
        
        
    <Link href='/'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
            </a>
          </Link>
          </div>
    </div>
  )
}
