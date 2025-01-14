
import Bloglist from "./bloglist";
import useFetch from "./useFetch";



const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:5000/blogs')
    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            {isPending && <div>Loading...</div>}
            {blogs && <Bloglist blog = {blogs} title = "All Blogs" />}
        </div>
    );
}
 
export default Home;