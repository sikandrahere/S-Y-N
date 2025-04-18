import React from 'react'
import PostCard from '@/utils/PostCard';


const Unfiltered = ({posts}) => {
    return (
        <div>
            {posts && posts.length > 0 ? (
                posts.map((post) => (
                    post.content.toLowerCase().includes("unfiltered") ||
                    post.hashtags.some(tag => tag.toLowerCase().includes("unfiltered")) && (
                        <PostCard key={post._id} post={post} />
                    )
                ))
            ) : (
                <div>No posts found</div>
            )}
        </div>
    )
}

export default Unfiltered