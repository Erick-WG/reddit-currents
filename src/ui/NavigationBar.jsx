import React from 'react'
import Search from '@features/search/Search'

// icons
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div className="md:absolute top-0 left-0 flex flex-col gap-4 items-center w-full md:p-8 md:border-b-2 border-gray-500">

      {/* lg: searchbar */}
      <div className='flex flex-row w-full justify-between items-center'>
        <div className='text-white font-black text-2xl'>
          <span className='text-blue-400 bg-gray-500/50 pt-2 pl-2 text-3xl font-black'>R</span>Currents
        </div>
        <div className='hidden md:block w-1/2'>
          <Search />
        </div>
        <div className='text-white font-black'>
          <FaBars className='md:hidden text-2xl'/>
        </div>
      </div>

      {/* md: search bar */}
      <div className='md:max-lg:hidden flex w-full lg:hidden'>
        <Search />
      </div>
    </div>
  )
}

export default NavigationBar
