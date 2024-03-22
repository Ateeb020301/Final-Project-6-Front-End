import { useState, useEffect, useContext } from "react";
import axios from "axios";
import './log.css';
import { MainContext } from "../../App";

export function LogWorkout() {
  const { person } = useContext(MainContext);
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState('');
  const [visibleExerciseIndex, setVisibleExerciseIndex] = useState(null);

  const fetchWorkouts = async () => {
    const userToken = localStorage.getItem('userToken');
    try {
      const response = await axios.get(`http://localhost:4000/workoutplans/user/${person.id}`, {
        headers: { Authorization: `Bearer ${userToken}` }
      });
      setWorkouts(response.data);
    } catch (error) {
      setError("Failed to fetch workouts. Please try again later.");
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, [person.id]);

  const toggleExercises = (index) => {
    setVisibleExerciseIndex(visibleExerciseIndex === index ? null : index);
  };

  const removeExercise = async (workoutId, exerciseId) => {
    const userToken = localStorage.getItem('userToken');
    try {
      await axios.delete(`http://localhost:4000/exercises/${exerciseId}`, {
        headers: { Authorization: `Bearer ${userToken}` }
      });
      fetchWorkouts();
    } catch (error) {
      setError("Failed to remove exercise. Please try again later.");
    }
  };

  // const editExercise = async (workoutId, exerciseId, updatedExercise) => {
  //   const userToken = localStorage.getItem('userToken');
  //   try {
  //     await axios.put(`http://localhost:4000/exercises/${exerciseId}`, updatedExercise, {
  //       headers: { Authorization: `Bearer ${userToken}` }
  //     });

  //     fetchWorkouts();
  //   } catch (error) {
  //     setError("Failed to edit exercise. Please try again later.");
  //   }
  // };

  return (
    <div className="container">
      <header>
        <h3>Workout History {person.username}</h3>
      </header>
      <div className="workouts">
        {error && <p className="error">{error}</p>}
        {workouts.map((workout, index) => (
          <div className='workoutBox' key={index}>
            <div onClick={() => toggleExercises(index)} style={{cursor: 'pointer'}}>
              <span>{new Date(workout.logDat).toLocaleDateString()}:</span>
            </div>
            {visibleExerciseIndex === index && (
              <div className="exercises-container">
                {workout.exercises.map((exercise, idx) => (
                  <div className="exercise-item" key={idx}>
                    <p>{exercise.workoutName}</p>
                    <p>Sets: {exercise.sets}, Expected Sets: {exercise.expectedSets}</p>
                    <p>Reps: {exercise.reps.join(", ")}, Expected Reps: {exercise.expectedReps}</p>
  
                    {/* <button onClick={() => editExercise(workout.id, exercise.id, {/* updatedExercise data */}{/*)}>Edit</button> */}
                    <button onClick={() => removeExercise(workout.id, exercise.id)}>Remove</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
