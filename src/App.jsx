
import { Workout } from './components/WorkoutPage/Workout.jsx';
import './App.css'



// Original is commented out at the bootum. Need to update to implement the Workout page
// This uncommented part is a proxy to direct the app to the workout page 
function App() {
    return (
        <>
          <div className="container">
            <header className="header">
                Menu
            </header>
            <div className="content">
                < Workout />  
            </div>
          </div>
        </>
    );
  }
  
  export default App;

/*
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

*/
