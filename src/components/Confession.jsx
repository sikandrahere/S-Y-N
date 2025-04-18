import React from 'react'
import PostCard from '@/utils/PostCard';


const Confession = ({posts}) => {
    
    return (
        <div>
            {posts && posts.length > 0 ? (
                posts.map((post) => (
                    post.content.toLowerCase().includes("confession") ||
                    post.hashtags.some(tag => tag.toLowerCase().includes("confession")) && (
                        <PostCard key={post._id} post={post} />
                    )
                ))
            ) : (
                <div>No posts found</div>
            )}
        </div>
    )
}

export default Confession