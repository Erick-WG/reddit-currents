import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

// data.
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, selectSearchTerm, clearSearchTerm, selectPosts, selectFetchPending, selectFetchError } from '@features/search/SearchSlice';

// component
import PostPreview from '@features/post/PostPreview'
import SubReddit from '@features/search/SubReddit'
import Trend from '@features/post/Trend'
import { TbRefresh } from "react-icons/tb";

// styling
import styles from '@assets/css/Home.module.css'
import Skeleton from 'react-loading-skeleton'
import Randomizer from '@/features/search/Randomizer';



// main component
const Home = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectPosts)
  const postsPending = useSelector(selectFetchPending)
  const searchTerm = useSelector(selectSearchTerm)
  const fetchError = useSelector(selectFetchError);

  // local state.
  const [disabled, setDisabled] = useState(false);
  const { title } = useParams()

  // console.log(fetchError);
  // console.log(postsPending);
  // console.log(posts);

  useEffect(()=>{
    if (title !== undefined) {
      // fetch when a title is available in the params (from subreddit links).
      dispatch(fetchPosts(title))
    }

    if (searchTerm == null) {
      dispatch(fetchPosts())
    } else {
      dispatch(fetchPosts(searchTerm))
    }
  }, [dispatch, searchTerm, title])


  // handlers.
  const handleClearSearch = () => {
    dispatch(clearSearchTerm());
    window.location.replace('/') // refreshes the page and clears the search results. (temporary solution, works perfectly for now :) )
  }
  
  const handleRefresh = () => {
    setDisabled(true)
    window.location.reload()
  }

  //todo: add a random button on the subreddits.

  return (
    <div className="relative md:grid grid-cols-12 gap-2 text-red-100 w-full">
      {/* side bar for sub reddits */}
      <div className='hidden md:flex flex-col gap-4 sticky md:col-span-3 lg:col-span-2 w-full border-r-2 border-gray-400 pr-6'>
        <h2 className='mb-4 font-semibold text-white text-xl'>Subreddits</h2>
        {/* dynamic links on interests. */}
        <SubReddit topic={'Reactjs'}/>
        <SubReddit topic={'Ask Reddit'}/>
        <SubReddit topic={'pics'}/>
        <SubReddit topic={'Cute'}/>
        <SubReddit topic={'News'}/>
        <Randomizer />
      </div>
      
      {/* main content layer */}
      
      <div className={`${styles.scroll} flex flex-col gap-4 md:col-span-9 lg:col-span-7 w-full items-center h-screen overflow-y-scroll`}>

        {/* render when user searches up something */}
        <div className='flex w-full items-center px-8 justify-between mb-4'>
          <h2 className='font-semibold text-white text-lg'>{searchTerm !== null && searchTerm !== '' || title ? `Showing results for ${searchTerm || title}...` : `Trending now`}</h2>
          {searchTerm || title && (
            <p 
            className='hidden md:flex text-sm text-gray-100/90 hover:text-red-600 font-semibold hover:cursor-pointer'
            onClick={handleClearSearch}>clear search</p>
          )}
        </div>
        
          {/* store search results as objects in a list to be mapped over and outputted in postcards. */}
        <div className={`${postsPending ? `w-full` : ``} flex flex-col gap-12 pb-20`}>
          {fetchError.error ? (
            // posts error fallback
            <div className='flex flex-col gap-2'>
              <p className='text-white/90 text-lg'>{fetchError.message}</p>
              <div 
                className='flex items-center justify-center'
                onClick={handleRefresh}>
                <span className={`${disabled ? 'bg-blue-600' : ''} flex flex-row items-center gap-1 px-10 py-2 bg-blue-500/90 rounded-lg text-white font-semibold cursor-pointer hover:bg-blue-500/70`}>{disabled ? 'Loading...' : <div className='flex flex-row items-center gap-1'>Refresh <TbRefresh /></div>}</span>
              </div>
            </div>
          
          ) : (
            // posts destructuring.
            postsPending && posts == undefined ? (
              <div className='flex flex-col'>
                <Skeleton containerClassName='flex-1' height={300}/>
                <Skeleton containerClassName='flex-1' height={32}/>
              </div>
            ) : (
              posts?.map(post => <PostPreview post={post.data} isLoading={postsPending}/>)
          ))}
        </div>
      </div>
      
      {/* trending list links */}
      <div className='hidden lg:flex flex-wrap content-start sticky col-span-3 w-full border-l-2 border-gray-400 pl-6'>
        <Trend popularTopic={'Cars'}/>
        <Trend popularTopic={'BMW'}/>
        <Trend popularTopic={'Travel'}/>
        <Trend popularTopic={'Kenya'}/>
        <Trend popularTopic={'Sips tea'}/>
        <Trend popularTopic={'Books'}/>
        <Trend popularTopic={'Interesting'}/>
        <Trend popularTopic={'Business'}/>
        <Trend popularTopic={'Trading'}/>
      </div>
    </div>
  )
}

export default Home
