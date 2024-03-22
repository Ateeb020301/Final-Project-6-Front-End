import { useContext } from "react";
import ProgramCard from "./ProgramCard";
import "./ProgramPage.css"
import { MainContext } from "../../../App";
import axios from "axios";

const initWorkout = {
    logDat: "",
    exercises: [],   
    notes: ""
}

const ProgramPage = () => {
    const { person, workout, setWorkout } = useContext(MainContext)


const handleSubmit = async (e) => {
    e.preventDefault();
    const userToken = localStorage.getItem('userToken');
    const currentDate = new Date();
    const newWorkoutPlan = {
        logDat: `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}T${String(currentDate.getHours()).padStart(2, '0')}:${String(currentDate.getMinutes()).padStart(2, '0')}:${String(currentDate.getSeconds()).padStart(2, '0')}`,
        notes: workout.notes,
        exercises: [] // Include an empty exercises array explicitly
    };
 
    try {
        const workoutPlanResponse = await axios.post(`http://localhost:4000/workoutplans/user/${person.id}`, newWorkoutPlan, {
            headers: { Authorization: `Bearer ${userToken}` } // Correctly setting the Authorization header
        });

        // Assuming the workout plan ID is returned in the response body under 'id'
        const workoutPlanId = workoutPlanResponse.data.id;

        // Iterate over the exercises array and post each exercise
        for (const exercise of workout.exercises) {
            await axios.post(`http://localhost:4000/exercises/workoutplan/${workoutPlanId}`, exercise, {
                headers: { Authorization: `Bearer ${userToken}` } // Again, ensuring the Authorization header is set
            });
        }

        // Reset the workout state and log success
        setWorkout(initWorkout);
        console.log("Workout plan and exercises submitted successfully.");
    } catch (error) {
        console.error("Failed to submit workout plan and exercises", error);
        // Here you can handle errors, for example, by notifying the user
        // This is where you'd also handle specific HTTP status codes like 401
    }
};




    
    const handleNotes = (e) => {
        e.preventDefault()
        e.target.value
        setWorkout({...workout, notes: e.target.value})
    }

    return ( 
        <div className="program-page-container">
            <header className="program-page-header">Workout Program: </header>
            <div className="program-content">
                <div className="program-cards">
                    {workout.exercises.map((exercise, index) => (
                        <div key={index}
                        className="program-card-container">
                            < ProgramCard exercise={exercise} /> 
                        </div>

                    ))}
                </div>
                <div className="program-bottom">
                    <div className="program-notes">
                        <h3>Notes from the workout</h3>

                        <textarea
                            style={{
                                width: "95%" }}
                                rows = {4}
                                cols = {90}
                                value = {workout.notes}
                                placeholder = "Add your notes"
                                wrap = "soft"
                                name = "name"
                                maxLength = {200}
                                onChange={handleNotes}
                                />
                    </div>
                    <div className="program-submit">
                        <button onClick={handleSubmit}> 
                            Submit Workout
                        </button>

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProgramPage;