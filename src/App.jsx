import { Link, Route, Routes,  } from 'react-router-dom';
import Login from './components/LoginPage/Login.jsx';
import { Signup } from './components/LoginPage/Signup.jsx'
import Workout from './components/WorkoutPage/Workout.jsx';

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
            <Route path='/workout' element={<Workout/>} /> 
        </Routes>

        </div>

  );
}

export default App;
