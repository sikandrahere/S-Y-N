import dbConnect from '@/lib/dbConnect';
import Post from '@/lib/model/Post.model';

// Handler for POST requests
export async function POST(req) {
    try {
        await dbConnect();

        const body = await req.json();
        const { content, hashtags, name } = body;

        if (!content || !hashtags || hashtags.length < 1 || content.length < 1 || name.length < 1) {
            return new Response(
                JSON.stringify({ message: 'Content , hashtags and name are required' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const post = new Post({ content, hashtags, name });
        await post.save();

        return new Response(
            JSON.stringify({ message: 'Post created successfully', post }),
            { status: 201, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error creating post:', error);

        // Error response
        return new Response(
            JSON.stringify({ message: 'Error creating post', error: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}