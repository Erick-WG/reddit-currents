import React from 'react'

const Home = () => {
  return (
    <div className="relative md:grid grid-cols-12 gap-2 text-red-100 w-full">
      {/* side bar for sub reddits */}
      <div className='sticky col-span-2 w-full border-2'>
        sub reddits
      </div>
      
      {/* main content layer */}
      <div className='col-span-7 w-full border-2'>
        Main
      </div>
      
      {/* trending list links */}
      <div className='sticky col-span-3 w-full border-2'>
        trending
      </div>
    </div>
  )
}

export default Home
