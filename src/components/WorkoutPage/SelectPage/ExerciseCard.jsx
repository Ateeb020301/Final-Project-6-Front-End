/* eslint-disable react/prop-types */

import { useContext } from "react";
import { WOContext } from "../Workout";

const ExerciseCard = ( {exercise}) => {
    const { handleWOChange, workout } = useContext(WOContext)
    const exAdded = workout.exercises.some(ex => ex.workoutName === exercise.workoutName)

    return ( 
        <div className="exercise-card">
            <div className="exercise-card-text">
                {exercise.workoutName}
            </div>
            <div className="exercise-card-text">
                {exercise.muscle.muscleGroup}
            </div>
            <div className="exercise-card-text">
                {exercise.muscle.muscleName}
            </div>
            <div className="exercise-card-text">
                {exercise.description}
            </div>
            {exAdded && <button>Added</button>}
            {!exAdded && <button onClick={() => handleWOChange(exercise.workoutName)}>Add</button>}
        </div>
     );
}
 
export default ExerciseCard;