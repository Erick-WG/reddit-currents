import React, { useEffect } from 'react'

// data.
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, selectPosts, selectFetchPending} from '@features/search/SearchSlice'

// components
import PostCard from '@features/post/PostCard'
import SubReddit from '@features/search/SubReddit'
import Trend from '@features/post/Trend'

// styling
import styles from '@assets/css/Home.module.css'



// main component
const Home = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectPosts)
  const postsPending = useSelector(selectFetchPending)
  // const fetchError = useSelector(selectErrorFetching)

  useEffect(()=>{
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <div className="relative md:grid grid-cols-12 gap-2 text-red-100 w-full">
      {/* side bar for sub reddits */}
      <div className='hidden md:flex flex-col gap-4 sticky md:col-span-3 lg:col-span-2 w-full border-r-2 border-gray-400 pr-6'>
        <h2 className='mb-4 font-semibold text-white text-xl'>Subreddits</h2>
        {/* dynamic links on interests. */}
        <SubReddit topic={'Reactjs'}/>
        <SubReddit topic={'Angularjs'}/>
        <SubReddit topic={'Sveltjs'}/>
      </div>
      
      {/* main content layer */}
      <div className={`${styles.scroll} flex flex-col gap-10 md:col-span-9 lg:col-span-7 w-full items-center h-screen overflow-y-scroll`}>
        <div className='flex w-full items-start px-8 pt-6'>
          <h2 className='mb-4 font-semibold text-white text-lg'>{postsPending ? 'loading' : ``}</h2>
        </div>
        
          {/* store search results as objects in a list to be mapped over and outputted in postcards. */}
        <div className={`${postsPending ? 'hidden' : 'flex'} flex-col gap-12 pb-20`}>
          {posts ? posts.map(post => <PostCard post={post.data}/>) : ''}
          {posts ? console.log(posts) : ''}
        </div>
      </div>
      
      {/* trending list links */}
      <div className='hidden lg:flex flex-wrap content-start sticky col-span-3 w-full border-l-2 border-gray-400 pl-6'>
        <Trend popularTopic={'usa'}/>
        <Trend popularTopic={'Mx4'}/>
        <Trend popularTopic={'Mcdonalds'}/>
        <Trend popularTopic={'Kenyan politicians'}/>
        <Trend popularTopic={'Adult life'}/>
        <Trend popularTopic={'Great times'}/>
        <Trend popularTopic={'The art of war'}/>
      </div>
    </div>
  )
}

export default Home
