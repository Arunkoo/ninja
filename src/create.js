import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
const Create = () => {
    // states....
    const[title, settitle] = useState('');
    const[content, setcontent] = useState('');
    const[author, setauthor] = useState('');
    const[ratings, setratings] = useState('');
    const[isPending, setisPending] = useState(false);
    const history = useNavigate();

    // function to handle submit...
    const handlesubmit = (e)=>{
        e.preventDefault();
        const blog = {title, content, author, ratings}
        setisPending(true)
        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(()=>{
            console.log('New blog added')
            setisPending(false)
            history('/')
        })
    }
    return (
        <div className="create">
            <h2>Add A New Blog</h2>
            <form onSubmit={handlesubmit}>
                <label>Blog title: </label>
                <input 
                    type="text"
                    required 
                    value={title}
                    onChange={(e)=>settitle(e.target.value)}
                />
                <label>Blog content: </label>
                <textarea
                    required
                    value={content}
                    onChange={(e) => setcontent(e.target.value)}
                ></textarea>
                <label>Blog author: </label>
                <input 
                    type="text"
                    required 
                    value={author}
                    onChange={(e)=>setauthor(e.target.value)}
                />
                <label>Blog rating: </label>
                <input 
                    type="text"
                    required 
                    value={ratings}
                    onChange={(e) => setratings(e.target.value)}
                />
                {!isPending && <button>Submit Blog</button>}
                {isPending && <button>Adding...</button>}
            </form>
        </div>
    );
}
 
export default Create;