import React from 'react'
import {Link} from 'react-scroll'
import LinkNext from 'next/link'

function Navbar() {
  return (
    <div className=' hidden md:flex md:fixed w-full h-32 z-50  bg-[#FFFFF6]'>
    <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 font-crimson font-extralight ">
        <div className='ml-4 md:ml-32 text-[#0B8892]'>
          <ul className='hidden md:flex mr-12'>
            <Link
            smooth={true}
            spy={true}
            >
              <li className='text-lg hover:animate-pulse hover:scale-110 duration-300 cursor-pointer  hover:text-[#34A5AD]'>Inicio</li>
            </Link>
            <LinkNext
            href="/stadistics"
           >
              <li className='ml-10 text-lg hover:animate-pulse hover:scale-110 duration-300 cursor-pointer  hover:text-[#34A5AD]'>Información</li>
            </LinkNext>
            <Link
            smooth={true}
            spy={true}
             >
              <li className='ml-10 text-lg hover:animate-pulse hover:scale-110 duration-300 cursor-pointer  hover:text-[#34A5AD]'>Aprende Jugando!</li>
            </Link>
          </ul>
        </div>
        <div>
            <LinkNext
            href='/login'>
            <button className="mr-12 text-[#0B8892] border-[0.1px] py-1 px-14 rounded-md border-[#0B8892]">
              Iniciar sesión
            </button>
            </LinkNext>
        </div>
    </div>
</div>
  )
}

export default Navbar
