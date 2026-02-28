import React from 'react'
import { Link } from 'react-router-dom'

const SubReddit = ({topic}) => {
    // onclick the link dispatches the topic as a search term to update the home page with the desired topic
  return (
    <Link 
        to={`${topic}`}
        className='font-semibold text-gray-200/90 bg-gray-600/50 hover:bg-gray-500/50 px-5 py-2 rounded-lg border border-gray-500/50'>
        r/{topic}
    </Link>
  )
}

export default SubReddit
