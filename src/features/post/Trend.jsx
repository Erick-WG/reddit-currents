import React from 'react'
import { Link } from 'react-router-dom'

const Trend = ({popularTopic}) => {
  return (
    <Link 
        to={popularTopic}
        className='p-2 h-fit w-fit hover:bg-gray-500/50 rounded-lg active:bg-gray-600 hover:cursor-pointer'>
        #{popularTopic}
    </Link>
  )
}

export default Trend
