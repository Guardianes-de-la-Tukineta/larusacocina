import React from 'react'
import logonav from '../public/logonav.svg'
import logosearch from '../public/logosearch.svg'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between bg-gray-200 rounded-full m-5 h-14">
      <div className="flex flex-row items-center h-14 gap-10">
        <Link href="/">
          <div className="flex items-center">
            <Image src={logonav} alt="Logo" className="h-20 sm:h-24"></Image>
            <div className="text-black text-md sm:text-lg">La Rusa Cocina</div>
          </div>
        </Link>
        <div className="hidden lg:flex flex-row items-center h-14 gap-10">
          <Link className="text-green-500 hover:text-green-600" href="/">
            HOME
          </Link>
          <Link className="text-green-500 hover:text-green-600" href="/">
            RECETAS
          </Link>
          <Link className="text-green-500 hover:text-green-600" href="/">
            CONSEJOS
          </Link>
          <Link className="text-green-500 hover:text-green-600" href="/">
            SOBRE LA RUSA
          </Link>
        </div>
        <div className="dropdown dropdown-hover lg:hidden">
          <div tabIndex={0} role="button" className="btn m-1">
            Menú
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a>RECETAS</a>
            </li>
            <li>
              <a>CONSEJOS</a>
            </li>
            <li>
              <a>SOBRE LA RUSA</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <Link href="/">
          <Image
            src={logosearch}
            alt="Search"
            className="h-8 bg-gray-300 rounded-full w-auto p-2 m-2 hover:bg-gray-400"
          ></Image>
        </Link>
        <Link
          href="/"
          className="flex items-center text-sm h-8 bg-green-600 rounded-full w-auto p-3 m-3 hover:bg-green-700"
        >
          REGISTRATE
        </Link>
      </div>
    </div>
  )
}

export default Navbar
