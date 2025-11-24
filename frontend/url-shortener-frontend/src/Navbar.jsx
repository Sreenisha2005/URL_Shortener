import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;
  const handleAdminClick = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/admin/login");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/auth/validate`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (res.ok) {
        // Token valid → navigate to admin dashboard
        navigate("/admin");
      } else {
        // Token invalid/expired → remove token, go to login
        localStorage.removeItem("token");
        navigate("/admin/login");
      }
    } catch (err) {
      console.error("Validation error:", err);
      localStorage.removeItem("token");
      navigate("/admin/login");
    }
  };

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
