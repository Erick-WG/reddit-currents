import React from 'react'
import NavigationBar from '@ui/NavigationBar'
import { Outlet } from 'react-router-dom'

const Root = () => {
  // dynamic year variable.
  const year = new Date()

  return (
    <div className="md:relative max-md:p-8 md:max-lg:p-12 lg:p-24">
      {/* navigation */}
      <NavigationBar />

      {/* outlet */}
      <div className='mt-12 md:max-lg:mt-28 lg:mt-12'>
        <Outlet />
      </div>

      {/* footer */}
      <footer className='flex w-full justify-between text-gray-100 font-semibold p-8 border-t-2 border-gray-500'>
        {/* socials */}
        <div className='flex flex-row gap-1.5 items-baseline'>
          <p className='text-lg'>Erick WG</p>
          <p>X</p>
          <p className='text-orange-500 text-lg'>Reddit</p>
        </div>

        <p>All rights reserved &copy; {year.getFullYear()}</p>

        {/* copy right and signature. */}
        <div>
          <p>made with <span className='line-through text-sky-400'>React</span> ❤️</p>
        </div>
      </footer>
    </div>
  )
}

export default Root
