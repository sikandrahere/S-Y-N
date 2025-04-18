import dbConnect from '@/lib/dbConnect';
import Post from '@/lib/model/Post.model';

export async function GET() {
    try {
        await dbConnect(); // Connect to MongoDB

        const posts = await Post.find({}).sort({ createdAt: -1 }); // Sort by latest post

        return new Response(
            JSON.stringify(posts),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error fetching posts:', error);
        return new Response(
            JSON.stringify({ message: 'Error fetching posts', error: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}