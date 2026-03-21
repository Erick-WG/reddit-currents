import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchPosts } from '../search/SearchSlice'

const Trend = ({popularTopic}) => {
  // onclick the link dispatches the topic as a search term to update the home page with the desired topic
    const dispatch = useDispatch()

    const handleDispatch = () => {
      if(!popularTopic) return
      dispatch(fetchPosts(popularTopic.split(' ').join('')))
    }
  return (
    <Link 
        to={`/${popularTopic.split(' ').join('-')}`}
        className='text-gray-100 p-2 h-fit w-fit hover:bg-gray-500/50 rounded-lg active:bg-gray-600 hover:cursor-pointer'
        onClick={handleDispatch}>
        #{popularTopic}
    </Link>
  )
}

export default Trend
