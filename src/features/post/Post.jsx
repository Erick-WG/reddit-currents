import React, { useEffect } from 'react'

// data
import { fetchPost, selectPost, selectComments, selectPostIsLoading } from './postSlice'
import { useSelector, useDispatch } from 'react-redux'

// helpers and componenets.
import Skeleton from 'react-loading-skeleton'
import ReactMarkdown from 'react-markdown'
import { timeAgo } from '@/utils/timeDiff'

const Post = () => {
  // instead of calling a specific post from the api, we can fetch it from store since it's alreadysaved.
  const post = useSelector(selectPost)
  const comments = useSelector(selectComments)
  const postIsLoading = useSelector(selectPostIsLoading)
  const dispatch = useDispatch()

  // call the post fetch function to get dummy data.
  // test suit start.
  useEffect(()=>{
    dispatch(fetchPost())
  },[dispatch])

  const { title, url, created, author, selftext } = post
  console.log(post)
  console.log(comments)
  // test suit end.


  return (
    <div className={`max-w-160 md:w-full pb-8 ${'border-b-2 border-gray-500'}`}>
        {/* post info. */}
        <div className='text-gray-300/90 text-sm flex flex-row justify-between mb-4 font-semibold'>
          {postIsLoading ? <Skeleton containerClassName='flex-1' width={200}/> : (<p>{`u/${author}`}</p>)}
          {postIsLoading ? <Skeleton containerClassName='flex-1 flex-end' width={100}/> : <p>{timeAgo(created)}</p>}
        </div>

        {/* post card */}
        <div className='flex flex-col gap-4 text-gray-100'>
            {/* title and media contaier. */}
            {/* <h1 className='text-gray-100 text-lg md:text-3xl font-black'>{title}</h1> */}
            {postIsLoading ? <Skeleton containerClassName='flex-1' height={540}/> : <img src={`${url}`} alt={title?.split(' ').join('-')} className='rounded-lg'/>}
        </div>

        {/*content if any. */}
        <div className='flex flex-col gap-4 mt-5'>
            {postIsLoading ? <Skeleton containerClassName='flex-1' count={1.5} height={25}/> : <h1 className='text-gray-100 text-lg md:text-3xl font-semibold'>{title}</h1>}
            
            {postIsLoading ? <Skeleton containerClassName='flex-1' count={3}/> : selftext && (
              <ReactMarkdown>
                {selftext}
              </ReactMarkdown>
            )}
        </div>
    </div>
  )
}

export default Post
