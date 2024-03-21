import { useContext } from "react";
import { WOContext } from "../Workout";
import ProgramCard from "./ProgramCard";
import "./ProgramPage.css"

const initWorkout = {
    userId: "TODO",
    exercises: [],   
    notes: ""
}

const ProgramPage = () => {
    const { workout, setWorkout } = useContext(WOContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        // update database endpoints
        console.log(workout)
        setWorkout(initWorkout)
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