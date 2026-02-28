import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = () => {
  return (
    <div className='flex flex-col gap-2.5 max-md:max-w-112.5 lg:max-w-150 border border-gray-500/50 p-8 rounded-lg hover:cursor-pointer hover:border-gray-400/50 hover:bg-gray-600/50'>
        {/* post card */}
        <div>
          {/* display an image if present */}
            <img className='rounded-sm' src="https://placehold.co/600x300" alt={`${'post image'}`} />
        </div>

        {/* title and content preview... */}
        <div className='flex flex-col gap-1'>
            {/* reddit title */}
            <h2 className='text-lg font-bold tracking-wide text-gray-100 hover:underline'>Sometimes great things come through pain.</h2>
            
            {/* reddit preview */}
            <p className='text-gray-100/80 font-light tracking-wide line-clamp-3 overflow-ellipsis hover:text-gray-100/90'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, porro ratione quisquam velit repudiandae impedit accusantium id, iste ab amet magnam ad rem totam omnis possimus hic deserunt culpa eveniet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, porro ratione quisquam velit repudiandae impedit accusantium id, iste ab amet magnam ad rem totam omnis possimus hic deserunt culpa eveniet.</p>

            <div>
              {/* engagement button group */}
              <div>
              </div>

              {/* read more link */}
              <Link className='text-blue-400 tracking-wide hover:underline hover:text-blue-300' to={``}>Read more</Link>
            </div>
        </div>
    </div>
  )
}

export default PostCard
