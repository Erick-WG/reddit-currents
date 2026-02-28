import React from 'react'
import NavigationBar from '@ui/NavigationBar'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className="md:relative max-md:p-8 md:max-lg:p-12 lg:p-24">
      {/* navigation */}
      <NavigationBar />
      {/* outlet */}
      <div className='mt-12 md:max-lg:mt-28 lg:mt-12'>
        <Outlet />
      </div>
      {/* footer */}

    </div>
  )
}

export default Root
