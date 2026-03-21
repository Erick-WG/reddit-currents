import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const Comment = ({comment}) => {
  const { author, body, ups } = comment;
  const [reveal, setReveal] = useState(false)

  const handleReveal = () => {
    setReveal(!reveal)
  }

  return (
    <div className='flex flex-col gap-1 border-l-2 border-gray-500 pl-2 py-2 hover:bg-gray-600/90'>
      <p className='text-gray-400 font-semibold text-xs'>u/{author}</p>

      <div 
        className={`${reveal ? '' : 'line-clamp-2 overflow-hidden'} hover:cursor-pointer`}
        onClick={handleReveal}>
        <ReactMarkdown>
          {body}
        </ReactMarkdown>
      </div>
      
      <p className='text-gray-400 font-semibold text-xs'>
        {`${ups > 1000 ? `${Math.floor(ups/1000)}K` : ups}`}
        {`${ups == 1 ? ' Like' : ' Likes'}`}
      </p>
    </div>
  )
}

export default Comment
