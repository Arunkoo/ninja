import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Ninja Blogs</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">blogs</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;