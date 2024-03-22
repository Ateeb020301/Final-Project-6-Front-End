import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { WOContext } from "../Workout";
import "./EditPage.css"

const EditPage = () => {
    const navigator = useNavigate()
    const { index } = useParams()
    const { workout, handleWOLogUpdate } = useContext(WOContext)
    const [exercise, setExercise] = useState();

    useEffect(() => {
        setExercise(workout.exercises[index])
    }, []);
    
    const handleBack = () => {
        navigator("/create/workouts")  
    }

    const handleDecrementSets = () => {
        if (exercise.sets > 0) {
            let sets = exercise.sets--
            exercise.reps.pop()
            exercise.weight.pop()
            setExercise({...exercise, [sets]: sets}) 
        }
    }
    const handleIncrementSets = () => {
        let sets = exercise.sets++
        let reps = exercise.reps.push("0")
        let weight = exercise.weight.push("0")
        setExercise({...exercise, [sets]: sets, [reps]: reps, [weight]: weight}) 
    }
    const handleChange = (e) => {
        e.preventDefault()
        const eName = e.target.name
        const name = eName.split('_')[0]
        const value = e.target.value
        const index = parseInt(eName.split('_')[1])
        setExercise(exercise => ({
            ...exercise, [name]: [...exercise[name].slice(0, index),
              value, ...exercise[name].slice(index + 1) 
            ]
        }));
    }

    if (!workout || ! index)
    {
        return (
            <>
                <div>Loading or id not found .. </div> 
                <button onClick={handleBack}>Back</button> 
            </>
        )
    }

    if (!exercise) {
        return (
            <>
                <div>Exercise not Found ... </div> 
                <button onClick={handleBack}>Back</button> 
            </>
            )
    }

    return ( 
        <>
            <div className="edit-page-container">
                <div className="edit-header">
                        <header>Log Exercise </header>
                    <div className="edit-header-buttons">
                        <button onClick={() => handleWOLogUpdate(exercise)}>Save</button>
                        <button onClick={handleBack}>Back</button>
                    </div>
                </div>
                <div className="edit-content">
                    <div className="edit-exercise-header">
                        {exercise.workoutName}
                    </div>
                    <div className="edit-format-display">
                        <div>
                            {"Expected Sets: "}
                            {exercise.expectedSets}
                        </div>
                        <div>
                            {"Expected Reps: "}
                            {exercise.expectedReps}
                        </div>
                        <div className="edit-sets">
                            <div>
                                {"Sets: "} 
                                {exercise.sets}
                            </div>
                            <div className="edit-increment-sets">
                                <button onClick={handleIncrementSets}>+</button>
                            </div>
                            <div className="edit-decrement-sets">
                                <button onClick={handleDecrementSets}>-</button>
                            </div>
                        </div>
                    </div>
                    <div className="edit-log-table-container">
                        <table className="edit-log-table" >
                            <thead>
                                <tr>
                                    <th>Sets</th>
                                    <th>Reps</th>
                                    <th>{"Weight (kg)"}</th>
                                </tr>
                            </thead>
                            {exercise.reps.map( (reps, index) => (
                                <tbody key={index}>
                                    <tr>
                                        <td>{ index+1 }</td>
                                        <td> 
                                            <input 
                                                name={`reps_${index}`}
                                                key={index}
                                                value={exercise.reps[index]}
                                                onChange={handleChange}
                                            />
                                        </td>
                                        <td>
                                            <input 
                                                name={`weight_${index}`}
                                                key={index}
                                                value={exercise.weight[index]}
                                                onChange={handleChange}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </>
     );
}

export default EditPage;
