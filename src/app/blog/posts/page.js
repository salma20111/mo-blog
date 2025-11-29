import Link from "next/link"
import { POSTS } from "@/data/posts";
import Post from "@/componants/Posts/post";


export default function PostsPage() {
    return (
    <div>
       <Link href="/blog" className="link">blog</Link>
       <h1>Posts Page</h1>
       
       {POSTS.map((post,i)=> {
         const { _id , text} = post;
         return <Post key={_id} _id={_id} text={text}/>
            
         
       })}

    </div>
    
   )
}