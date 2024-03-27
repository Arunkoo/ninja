import { Link } from "react-router-dom";
const Bloglist = (props) => {
    const blogs = props.blog;
    const title = props.title;

    return ( 
    <div className="blog_preview">
        <h1>{ title }</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>written by- {blog.author}</p>
                    </Link>
                </div>
            ))}
    </div>
    );
}
 
export default Bloglist;