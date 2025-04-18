import React from 'react'
import PostCard from '@/utils/PostCard';


const Politics = ({posts}) => {
    return (
        <div>
            {posts && posts.length > 0 ? (
                posts.map((post) => (
                    post.content.toLowerCase().includes("politics") ||
                    post.hashtags.some(tag => tag.toLowerCase().includes("politics")) && (
                        <PostCard key={post._id} post={post} />
                    )
                ))
            ) : (
                <div>No posts found</div>
            )}
        </div>
    )
}

export default Politics