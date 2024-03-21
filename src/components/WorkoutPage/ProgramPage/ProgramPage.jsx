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
        e.preventDefault()
        const userToken = localStorage.getItem('userToken');
        const currentDate = new Date();
        const newWorkout = {...workout, logDat: `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}T${String(currentDate.getHours()).padStart(2, '0')}:${String(currentDate.getMinutes()).padStart(2, '0')}:${String(currentDate.getSeconds()).padStart(2, '0')}`}
        const logResponse = await axios.post(`http://localhost:4000/logs/user/${person.id}`, newWorkout, {
            headers: { Authorization: `Bearer ${userToken}` }
          });
        setWorkout(initWorkout)
        console.log(logResponse);
    }

    
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
                        <header>Notes from the workout</header>

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