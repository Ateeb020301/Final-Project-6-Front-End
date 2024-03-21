import { Outlet, useNavigate } from 'react-router-dom'
import './WorkoutPage.css'
import '../../App.css'
import { createContext, useContext, useEffect, useState } from 'react'
import ProgramPage from './ProgramPage/ProgramPage'
import { MainContext } from '../../App'
import axios from 'axios'

const WOContext = createContext()


function Workout(){
    const navigator = useNavigate()
    const {data, workout, setWorkout} = useContext(MainContext)
    const [targetSets, setTargetSets] = useState("3");
    const [targetReps, setTargetReps] = useState("10");

    useEffect(() => {
        const fetchWorkouts = async () => {
          const userToken = localStorage.getItem('userToken');
          try {
            const response = await axios.get('http://localhost:4000/users', {
              headers: {
                Authorization: `Bearer ${userToken}`,
              },
            });
            // if (response.data.status === "success") {
            //   setUsers(response.data.data);
            // } else {
            //   setError("Failed to fetch users. Please try again later.");
            // }
          } catch (error) {
            console.error("Failed to fetch users", error);
            // setError("Failed to fetch users. Please try again later.");
          }
        };
        fetchWorkouts();
      }, []);

    if (!data) {
        return (<div>Loading</div>)
    }

    const handleWOChange = (name) => {
        let exercise = {}
        exercise.exerciseName = name
        exercise.expectedReps = targetReps
        exercise.expectedSets = targetSets  
        exercise.sets = targetSets
        exercise.reps = new Array(parseInt(targetSets)).fill('0');
        exercise.weight = new Array(parseInt(targetSets)).fill('0');

        setWorkout({...workout, exercises: [...workout.exercises, exercise]})
    }  

    const handleWOLogEdit = (id) => {
        navigator(`/create/edit/${id}`)
    }

    const handleWOLogRemove = (id) => {
        setWorkout({...workout, exercises: workout.exercises.filter(exercise => exercise.exerciseId !== id)})
    }

    const handleWOLogUpdate = (exercise) => {
        setWorkout({...workout, exercises: [...workout.exercises.map(ex => {
            if (ex.exerciseId === exercise.exerciseId) {
                return exercise
            }
            return ex
        })]})
        navigator("/create/workouts")
    }

    return(
        <WOContext.Provider value = { {data: data, workout: workout, setWorkout: setWorkout, handleWOChange: handleWOChange, targetReps: targetReps, setTargetReps: setTargetReps, targetSets: targetSets, setTargetSets: setTargetSets, handleWOLogEdit: handleWOLogEdit, handleWOLogRemove: handleWOLogRemove, handleWOLogUpdate: handleWOLogUpdate} }>
        <>
            <div className="workout-page">
                <div className='wo-columns'>
                    < Outlet />
                </div>
                <div className='wo-columns'>
                    < ProgramPage />
                </div>
            </div>
        </>
        </WOContext.Provider>
    )
}

export { Workout, WOContext };