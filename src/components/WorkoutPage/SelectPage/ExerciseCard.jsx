/* eslint-disable react/prop-types */

import { useContext } from "react";
import { WOContext } from "../Workout";

const ExerciseCard = ( {exercise}) => {
    const { handleWOChange, workout } = useContext(WOContext)
    const exAdded = workout.some(ex => ex.exerciseId === exercise.id)

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
            {!exAdded && <button onClick={() => handleWOChange(exercise.id)}>Add</button>}
        </div>
     );
}
 
export default ExerciseCard;