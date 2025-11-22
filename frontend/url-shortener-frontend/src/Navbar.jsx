import { Link, useNavigate } from "react-router-dom";
import AdminPage from "./AdminPage";
import About from "./About";

function Navbar() {
  const navigate = useNavigate();
  
  const handleAdminClick = () => {
    if(localStorage.getItem('token')){
        navigate('/admin');
    }else{
        navigate('/admin/login');
    }
  }
  return (
    <nav className="navbar">
        <h3><Link to="/">URL Shortener</Link></h3>
        <ul>
            <li><Link to="/about">About</Link></li>
            <li><a onClick={handleAdminClick}>Admin Page</a></li>
        </ul>
    </nav>
  );
}
export default Navbar;