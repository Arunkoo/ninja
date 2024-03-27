import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import {useNavigate} from 'react-router-dom'; 

const Blogdetails = () => {
    // hook used useParams
    const {id} = useParams();
    const history = useNavigate();
    const { data: blog, error, isPending } = useFetch('http://localhost:5000/blogs/' + id)
    // handle delete function...
    const handleDelete = ()=>{
        fetch('http://localhost:5000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(()=>{
            console.log('Blog deleted')
            history('/')

        })
        
    }
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading Blog-details....</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <br/>
                    <div>{blog.content}</div>
                    <br/>
                    <div>written by- {blog.author} | Rating- {blog.ratings}</div>
                    <button onClick = {handleDelete}>Delete</button>
                </article>
                
            )}
        </div>

    );
}
 
export default Blogdetails;