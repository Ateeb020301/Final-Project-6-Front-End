import { useState, useContext} from 'react';
import axios from 'axios';
import './login.css'
import { MainContext } from '../../App';
import { useNavigate } from 'react-router-dom';

function Login() {
const { setIsAuthenticated } = useContext(MainContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  let navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault(); 
  try {
    const response = await axios.post('http://localhost:4000/auth/signin', { username, password });
    localStorage.setItem('userToken', response.data.token);
    localStorage.setItem('username', username);
    setIsAuthenticated(true);
    navigate('/home');
    setMessage("Login successful!");
  } catch (error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    setMessage(`Login failed: ${error.response.data.message || "Please check your credentials."}`);
  } else if (error.request) {
    // The request was made but no response was received
    console.log(error.request);
    setMessage("Login failed: No response from server.");
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
    setMessage("Login failed: Error in request.");
  }
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