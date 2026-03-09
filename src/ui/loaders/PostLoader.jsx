import Skeleton from "react-loading-skeleton";
import styles from '@assets/css/Home.module.css'


import React from 'react'

const PostLoader = () => {
  return (
    <div className={`${styles.scroll} flex flex-col gap-4 md:col-span-9 lg:col-span-7 w-full items-center h-screen overflow-y-scroll`}>
      <div className="w-full">
        <h2>
          <Skeleton containerClassName="flex-1" width={300} count={2}/>
        </h2>

        <p>
          <Skeleton containerClassName="flex-1" width={200} count={3} />
        </p>
      </div>
    </div>
  )
}

export default PostLoader
