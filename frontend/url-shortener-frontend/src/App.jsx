import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UrlShortener from "./UrlShortener";
import About from "./About";
import AdminPage from "./AdminPage";
import Navbar from "./Navbar";
import AdminLogin from "./AdminLogin";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/" element={<UrlShortener />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          } />
        </Routes> 
            
      </Router>
      
    </>
  )
}

export default App
