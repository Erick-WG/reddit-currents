import React from 'react'
import { Link } from 'react-router-dom'

// dispatch subreddits on the nav page.
import { useDispatch } from 'react-redux'
import { fetchPosts } from './SearchSlice'

const SubReddit = ({topic}) => {
    // onclick the link dispatches the topic as a search term to update the home page with the desired topic
    const dispatch = useDispatch()

    const handleDispatch = () => {
      if(!topic) return
      dispatch(fetchPosts(topic.split(' ').join('')))
    }

  return (
    <Link 
        to={`/${topic.toLowerCase().split(' ').join('-')}`}
        className='font-semibold text-gray-200/90 bg-gray-600/50 hover:bg-gray-500/50 px-5 py-2 rounded-lg border border-gray-500/50'
        onClick={handleDispatch}>
        r/{topic}
    </Link>
  )
}

export default SubReddit
