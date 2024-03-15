import { Link, Route, Routes,  } from 'react-router-dom';
import Login from './Login';
import { Signup } from './assets/Signup';
import Dash from './assets/Dash';

function App() {
  return (
        <div>
            <header>
                <h1>Menu</h1>
            </header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/login">Log in</Link>
                    </li>
                </ul>
            </nav>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Signup/>} />
            <Route path='/dash' element={<Dash/>} /> 
        </Routes>

        </div>

  );
}

export default App;
