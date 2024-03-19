/* eslint-disable react/prop-types */

import { useContext } from "react";
import { WOContext } from "../Workout";

const ProgramCard = ( { exercise } ) => {
    const { data } = useContext(WOContext)
    const dataExercise = data.filter(ex => ex.id === exercise.exerciseId)

    return ( 
        <>
            <div className="program-card">
                <div>
                    {dataExercise && dataExercise[0].workoutName}
                </div>
                <div>
                    {}
                </div>
                <div>
                    {"Expected Sets: " + exercise.expectedSets}
                </div>
                <div>
                    {"Expected Reps: " + exercise.expectedReps}
                </div>
                <div>
                    {dataExercise && dataExercise[0].workoutName}
                </div>
            </div> 
        </>
     );
}
 
export default ProgramCard;