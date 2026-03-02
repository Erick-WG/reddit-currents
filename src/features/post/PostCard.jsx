import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'

// import time function
import { timeAgo } from '@/utils/timeDiff'

const PostCard = ({post}) => {
  const { author, created, title, preview, selftext, id } = post
  
  const navigate = useNavigate()
  
  // images
  const { images } = preview
  console.log(images)


  const handleDivNavigate = () => {
    navigate(`${title.toLowerCase().split(/[:\s[\]{}()]+/).join('-')}`)
  }

  return (
    <div 
      className='flex flex-col gap-2.5 max-md:max-w-112.5 lg:max-w-150 border border-gray-500/50 p-8 rounded-lg hover:cursor-pointer hover:border-gray-400/50 hover:bg-gray-600/50' 
      key={id}
      onClick={handleDivNavigate}>

      {/* header, profile and post life online */}
      <div className='flex flex-row justify-between'>
        {/* profile */}
        <div>
          <h3 className='text-gray-100/60 text-sm font-semibold'>{`u/${author}`}</h3>
        </div>

        {/* How long ago was the post */}
        <div>
          <p className='text-gray-100/60 text-sm font-semibold'>{timeAgo(created)}</p>
        </div>
      </div>
      
      {/* post card */}
      <div className={``}>
        {/* display an image if present */}
          {/* <img className='rounded-sm' src={preview.images[0].source.url} alt={`${'post image'}`}width="600px" height="300px"/> */}
      </div>

      {/* title and content preview... */}
      <div className='flex flex-col gap-1'>
          {/* reddit title */}
          <h3 className='text-lg font-bold tracking-wide text-gray-100 hover:underline line-clamp-2'>{title}</h3>
          
          {/* reddit post preview */}
          <div className='text-gray-100/80 font-light tracking-wide line-clamp-3 overflow-ellipsis hover:text-gray-100/90'>
            {/* converting md -> text */}
            <ReactMarkdown>{selftext}</ReactMarkdown>
          </div>

          <div>
            {/* read more link */}
            {selftext && <p className='text-blue-400 tracking-wide hover:underline hover:text-blue-300'>Read more</p>}
          </div>
      </div>
      {/* end post preview. */}

      {/* engagement button group */}
      <div>
      </div>

    </div>
  )
}

export default PostCard
