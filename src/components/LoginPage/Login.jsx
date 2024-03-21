import { useState } from 'react';
import axios from 'axios';
import './login.css'

function Login(props) {
const {setIsAuthenticated} = props
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/auth/signin', {
        username,
        password,
        }).then(response => {
            localStorage.setItem('userToken', response.data.token);
            localStorage.setItem('username', username)
            setIsAuthenticated(true);
            window.location.href = '/dash';
        })
      console.log(response.data); 
      setMessage("Login successful!");
    } catch (error) {
      setMessage("Login failed. Please check your credentials.");
    }
  };
  return (
    <div className='wrapper'>
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
    
  );
}
export default Login;