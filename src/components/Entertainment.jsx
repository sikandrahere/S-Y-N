import React from 'react'
import PostCard from '@/utils/PostCard';


const Entertainment = ({posts}) => {
    return (
        <div>
            {posts && posts.length > 0 ? (
                posts.map((post) => (
                    post.content.toLowerCase().includes("entertainment") ||
                    post.hashtags.some(tag => tag.toLowerCase().includes("entertainment")) && (
                        <PostCard key={post._id} post={post} />
                    )
                ))
            ) : (
                <div>No posts found</div>
            )}
        </div>
    )
}

export default Entertainment