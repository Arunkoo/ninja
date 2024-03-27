import { Link } from "react-router-dom";
const Notfound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry🥹</h2>
            <p>the page you want to see does'nt exits.</p>
            <Link to = "/">go back to home page🏠</Link>
        </div>
    );
}
 
export default Notfound;