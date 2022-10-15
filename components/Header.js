import Image from 'next/image'
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  GlobeAltIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { UserCircleIcon } from '@heroicons/react/24/solid'

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle */}
      <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2 md:inline-flex" />
      </div>
      {/* Right */}
      <div className="flex items-center justify-end text-gray-500 space-x-4">
        <p className="hidden cursor-pointer text-sm md:inline-flex">Become a host</p>
        <GlobeAltIcon className="h-6" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  )
}

export default Header
