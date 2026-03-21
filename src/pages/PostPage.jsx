import Post from '@/features/post/Post'
import React, { useEffect } from 'react'
import { selectPost, selectComments, selectPostIsLoading } from '@/features/post/postSlice'
import { Link, useNavigate  } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Skeleton from 'react-loading-skeleton'
import Comment from '@/components/Comment'
import { BiUpvote } from "react-icons/bi";

import { subsCount } from '@/utils/subsCount'

const PostPage = () => {
  // data
  const post = useSelector(selectPost)
  const comments = useSelector(selectComments)
  const postIsLoading = useSelector(selectPostIsLoading)

  const { subreddit, subreddit_subscribers, ups, permalink } = post
  const navigate = useNavigate()


  // return the user home if we don't have a post object
  useEffect(()=>{
    if(Object.keys(post) === 0){
      navigate('/')
    }
  }, [post, navigate])
  
  const handleNavigate = () => {
    navigate(-1)
  }

  return (
    <main className='min-h-screen flex flex-col gap-1.5'>

      {/* move button into content box and sticky it to the far left. */}
      {/* back button. */}
      <p className='w-fit text-gray-100/90 font-black hover:text-gray-100 hover:cursor-pointer hover:underline mb-2' onClick={handleNavigate}>Back</p>

      {/* main container. */}
      <div className='relative md:grid grid-cols-12 text-white border-t-2 border-gray-600'>
        <div className='sticky flex flex-col items-center py-4 md:py-8 md:px-10 col-span-9 min-h-screen'>
          {/* post */}
          <Post />

          {/* comments */}
          <div className='flex flex-col gap-1.5 w-full max-w-160 mt-4'>
            <div className='flex flex-row justify-between'>
              {postIsLoading ? <Skeleton containerClassName='flex-1' width={150}/> : <h2 className='mb-2 font-semibold text-sm text-gray-300/90'>{`${comments.length > 1000 ? `${Math.floor(comments.length / 1000)}K` : comments.length } Comments`}</h2>}

              {postIsLoading ? <Skeleton containerClassName='flex-1' width={100}/> : <h2 className='mb-2 font-semibold text-sm text-gray-300/90 flex flex-row'>
                {ups > 1000 ? `${Math.floor((ups/1000))}K` : ups}
                <BiUpvote className='text-lg'/>
              </h2>}
            </div>

            {postIsLoading ? <Skeleton containerClassName='flex-1' height={100}/> : <div className='flex flex-col gap-6'>
              {comments?.map(comment => (
                <Comment comment={comment?.data}/>
              ))}
            </div>}
          </div>
          
        </div>

        {/* side bar, contains subreddit info where the post is and a user can choose to continue reading on reddit. */}
        <div className='sticky pl-4 py-8 max-md:hidden col-span-3 border-l-2 border-gray-400'>
          {/* show where the post is posted on reddit and the subreddit popularity. */}
          {postIsLoading ? <Skeleton containerClassName='flex-1' height={100} width={300}/> :  (
            <div className='flex flex-col gap-1 '>
              <div>
                <h3 className='text-md font-semibold'>Posted on <span className='text-orange-500'><Link to={`https://www.reddit.com/r/${subreddit}`} target='_blank'>r/{subreddit}</Link></span></h3>
                <p className='font-semibold text-gray-400 text-md'>{subsCount(subreddit_subscribers)} Subs</p>
              </div>
                <Link 
                  to={`https://www.reddit.com/${permalink}`} 
                  className='font-semibold text-sm px-6 py-1 w-fit text-gray-900 bg-orange-500 flex items-center rounded-lg hover:cursor-pointer'
                  target='_blank'>Continue on Reddit</Link>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default PostPage
