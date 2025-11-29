import Link from "next/link";
import classes from "./post.module.css"

const Post = ({text, _id}) => {
  return(
    <section className={classes["post"]}>
              <p>{text.slice(0,10)}...</p>
              <Link className="link" href={`/blog/posts/${_id}`}>More</Link>
    </section>
  );
};

export default Post;