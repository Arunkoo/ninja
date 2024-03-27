import './index.css';
import Navbar from './navbar';
import Home from './home';
import Create from './create';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Blogdetails from './blogdetails';
import Notfound from './404';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" exact element = {<Home/>}></Route>
            <Route path="/Create" exact element={<Create/>}></Route>
            <Route path="/blogs/:id" exact element={<Blogdetails />}></Route>
            <Route path="*"  element={<Notfound/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
