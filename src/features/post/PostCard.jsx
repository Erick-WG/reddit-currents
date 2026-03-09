import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import { LiaComments } from "react-icons/lia";
import { BiUpvote } from "react-icons/bi";

// markdown displayer.
import ReactMarkdown from 'react-markdown'

// import time function
import { timeAgo } from '@/utils/timeDiff'

const PostCard = ({post, isLoading}) => {

  // hooks
  const navigate = useNavigate()

  // destructuring props needed for our app.
  const { author, created, title, selftext, id, ups, num_comments } = post
  
  // Handlers.
  const handleDivNavigate = () => {
    if (isLoading) return
    navigate(`${title.toLowerCase().split(/[:\s[\]{}()]+/).join('-')}`)
  }

  return (
    <div 
      className={`${isLoading ? 'min-w-full' : ''} flex flex-col gap-2.5 max-md:max-w-112.5 lg:max-w-150 border border-gray-500/50 p-8 rounded-lg hover:cursor-pointer hover:border-gray-400/50 hover:bg-gray-600/50`} 
      key={id}
      onClick={handleDivNavigate}>

      {/* header, profile and post life online */}
      <div className='flex flex-row justify-between'>
        {/* profile */}
        <div>
          {isLoading ? <Skeleton containerClassName='flex-1' width={100}/> : (
            <h3 className='text-gray-100/60 text-sm font-semibold'>{`u/${author}`}</h3>
            )}
        </div>

        {/* How long ago was the post */}
        <div>
          {isLoading ? <Skeleton containerClassName='flex-1' width={100}/> : (
            <p className='text-gray-100/60 text-sm font-semibold'>{timeAgo(created)}</p>
          )}
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
          {isLoading ? <Skeleton containerClassName='flex-1' height={20}/> : (
            <h3 className='text-lg font-bold tracking-wide text-gray-100 hover:underline line-clamp-2'>{title}</h3>
            )}
          
          {/* reddit post preview */}
          <div className='text-gray-100/80 font-light tracking-wide line-clamp-3 overflow-ellipsis hover:text-gray-100/90'>
            {/* converting md -> text */}
            {isLoading ? <Skeleton containerClassName='flex-1' count={3}/> : (
              <ReactMarkdown>{selftext}</ReactMarkdown>
              )}
          </div>

          <div>
            {/* read more link, expand post if available, shift to see less when expanded */}
            {isLoading ? <Skeleton containerClassName='flex-1' width={100}/> : (
              selftext && <p className='text-blue-400 tracking-wide hover:underline hover:text-blue-300'>Read more</p>
            )}
          </div>
      </div>
      {/* end post preview. */}

      {/* engagement button group */}
      <div className='flex flex-row justify-between'>
          {isLoading ? <Skeleton containerClassName='flex-1' width={90}/> : (
          <div className='flex flex-row gap-1 text-gray-100/60 text-sm font-semibold hover:text-blue-400'>
              <p>{ups > 1000 ? `${Math.floor((ups/1000), 2)}K` : ups}</p>
              <BiUpvote className='text-lg'/>
          </div>
          )}
        {isLoading ? <Skeleton containerClassName='flex-1' width={90}/> : (
          <div className='flex flex-row gap-1 text-gray-100/60 text-sm font-semibold hover:text-blue-400'>
            <p>{num_comments > 1000 ? `${Math.floor((num_comments/1000), 2)}K` : num_comments}</p>
            <LiaComments className='text-lg'/>
          </div>
        )}
      </div>

      {/* comments...have a border top, display comments on the post, track own post open state.. */}

    </div>
  )
}

export default PostCard
