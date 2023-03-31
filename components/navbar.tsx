import Link from 'next/link';

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.22.306C12.8.306.68 12.43.68 25.847c0 9.735 5.942 18.054 14.425 21.622v5.46c0 1.345 1.086 2.432 2.43 2.432h8.79c1.345 0 2.431-1.087 2.431-2.432v-5.46c8.484-3.568 14.425-11.887 14.425-21.622C51.76 12.43 39.64.306 26.22.306zm-.81 36.73c-7.97 0-14.443-6.473-14.443-14.443s6.473-14.444 14.443-14.444c7.97 0 14.443 6.473 14.443 14.444s-6.473 14.443-14.443 14.443z"/>
        </svg>
        <Link href="/">
          <div className="font-semibold text-xl tracking-tight">Caden Westmoreland</div>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/">
            <div className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
              Home
            </div>
          </Link>
          <Link href="/projects">
            <div className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
              Projects
            </div>
          </Link>
          <Link href="/about">
            <div className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
              About
            </div>
          </Link>
          <Link href="/contact">
            <div className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
              Contact
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}