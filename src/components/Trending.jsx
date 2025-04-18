import PostCard from '@/utils/PostCard'
import React from 'react'

const Trending = ({posts}) => {
    return (
        <div className='mt-30'>
            <div>
              <h3 className='text-2xl font-bold m-5'>" Trending "</h3>
            </div>
            <div className='border-t-2 border-gray-800'>
                <div >
                    {posts && posts.map((post) => (
                        <PostCard key={post._id} post={post} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Trending