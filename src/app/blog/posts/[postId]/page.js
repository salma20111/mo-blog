import { POSTS } from "@/data/posts";
import { notFound } from "next/navigation";
const postPage = async ({ params }) => {
    const { postId } = await params;
    console.log(postId);
    const  post = POSTS.find((p) => p._id === postId)
    if (!post) {
        return notFound()
    }
    const {_id , text} = post
    return (
    <section>
        <p>{text}</p>
    </section>
    )
    
    
};

export default postPage;