/* eslint-disable react/prop-types */

import { useContext } from "react";
import { WOContext } from "../Workout";

const ProgramCard = ( { exercise } ) => {
    const { data, handleWOLogEdit, handleWOLogRemove } = useContext(WOContext)
    const dataExercise = data.filter(ex => ex.id === exercise.exerciseId)




    return ( 
        <>
            <div className="program-card">
                <div className="program-card-left">
                    <div className="program-card-title">
                        {dataExercise && dataExercise[0].workoutName}
                    </div>
                    <div>
                        <div className="program-card-expected">
                            <div>
                                {"Expected Sets: " + exercise.expectedSets}
                            </div>
                            <div>
                                {"Expected Reps: " + exercise.expectedReps}
                            </div>
                        </div>
                    </div>
                    <div className="program-card-buttons">
                        <button onClick={() => handleWOLogEdit(exercise.exerciseId)}>Edit</button>
                        <button onClick={() => handleWOLogRemove(exercise.exerciseId)}>Remove</button>
                    </div>
                </div>
                <div className="program-card-logging">
                <table className="exercise-table" >
                    <thead>
                        <tr>
                            <th>Sets</th>
                            <th>Reps</th>
                            <th>Weight</th>
                        </tr>
                    </thead>
                    {exercise.reps.map( (reps, index) => (
                        <tbody key={index}>
                            <tr>
                                <td>{ index+1 }</td>
                                <td>{ exercise.reps[index] }</td>
                                <td>{ exercise.weight[index] }</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
                    
                </div>
            </div> 
        </>
     );
}
 
export default ProgramCard;