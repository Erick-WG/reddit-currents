import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = ({post}) => {
  const { author, title, preview, selftext, id } = post

  // console.log(preview.images[0].source.url)
  return (
    <div className='flex flex-col gap-2.5 max-md:max-w-112.5 lg:max-w-150 border border-gray-500/50 p-8 rounded-lg hover:cursor-pointer hover:border-gray-400/50 hover:bg-gray-600/50' key={id}>
      {/* header, profile and post life online */}
      <div>
        {/* profile */}
        <div>
          <h3>{`u/${author}`}</h3>
        </div>

        {/* How long ago was the post */}
        <div></div>
      </div>
      
      {/* post card */}
      <div className={``}>
        {/* display an image if present */}
          <img className='rounded-sm' src={preview.images[0].source.url} alt={`${'post image'}`}width="600px" height="300px"/>
      </div>

      {/* title and content preview... */}
      <div className='flex flex-col gap-1'>
          {/* reddit title */}
          <h2 className='text-lg font-bold tracking-wide text-gray-100 hover:underline line-clamp-2'>{title}</h2>
          
          {/* reddit post preview */}
          <p className='text-gray-100/80 font-light tracking-wide line-clamp-3 overflow-ellipsis hover:text-gray-100/90'>{selftext}</p>

          <div>
            {/* engagement button group */}
            <div>
            </div>

            {/* read more link */}
            {selftext && <Link className='text-blue-400 tracking-wide hover:underline hover:text-blue-300' to={``}>Read more</Link>}
          </div>
      </div>
    </div>
  )
}

export default PostCard
