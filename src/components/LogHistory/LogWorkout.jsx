import { useEffect, useState , useContext} from "react";
import axios from "axios";
import './log.css'
import { MainContext } from "../../App";

export function LogWorkout() {
  const { person } = useContext(MainContext)
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState('');

  const fetchWorkouts = async () => {
    const userToken = localStorage.getItem('userToken');
    
    try {
      console.log(person.id);
      const response = await axios.get(`http://localhost:4000/workoutplans`, {
        headers: {
          Authorization: `Bearer ${userToken}` 
        }
      });
      setWorkouts(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("Failed to fetch workouts", error);
      setError("Failed to fetch workouts. Please try again later.");
    }
  };

useEffect(() => {
  fetchWorkouts();
}, [person.id]); 


  return (
    <div className="container">
      <header>
        <h3>Workout History {person.username}</h3>
      </header>
      <div className="workouts">
        {error && <p className="error">{error}</p>}
        {workouts.map((workout, index) => (
          <div className='workoutBox' key={index}>
            <span>{workout.logDat}:</span><br/>{workout.logDat}
          </div>
        ))}
      </div>
    </div>
  );
}
