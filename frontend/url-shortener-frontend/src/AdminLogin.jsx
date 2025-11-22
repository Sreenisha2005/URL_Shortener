import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); //stop page reload

        try {
            const response = await axios.post('http://localhost:8080/auth/login', {
                username,
                password
            });
            
            console.log("LOGIN RESPONSE:", response.data);
            console.log("TOKEN:", response.data.token);

            localStorage.setItem('token', response.data.token);
            navigate('/admin'); //redirect to admin links page
        }
        catch (err) {
            setError(err.response.data || 'Login failed. Please try again.');   
        }
    };


    return (
        <div className="login-container">
            <div className="login-header">
                <h2>Admin Login</h2>
                <p>Enter your Admin details.</p>
            </div>
            <form onSubmit={handleLogin} className="login-form">
                <input
                    id='username'
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    id='password'
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>

                {error && <p className="error_line">{error}</p>}
            </form>
        </div>

    );

}
export default AdminLogin;