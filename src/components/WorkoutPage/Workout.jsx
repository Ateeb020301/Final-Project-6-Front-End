import { Link, Route, Routes } from 'react-router-dom'
import './WorkoutPage.css'
import EditPage from './EditPage/EditPage'
import SelectPage from './SelectPage/SelectPage'
import '../../App.css'
import { createContext, useState } from 'react'
import woData from './data'
import ProgramPage from './ProgramPage/ProgramPage'

const WOContext = createContext()

function Workout(){
    const [data, setData] = useState(woData);
    const [workout, setWorkout] = useState([]);
    const [targetSets, setTargetSets] = useState("3");
    const [targetReps, setTargetReps] = useState("10");

    if (!data) {
        return (<div>Loading</div>)
    }

    const handleWOChange = (id) => {
        let exercise = {}
        exercise.userId = "TODO"
        exercise.exerciseId = id
        exercise.expectedReps = targetReps
        exercise.expectedSets = targetSets  
        exercise.sets = targetSets
        exercise.reps = new Array(parseInt(targetSets)).fill('0');
        exercise.weight = new Array(parseInt(targetSets)).fill('0');
        exercise.notes = ""

        setWorkout([...workout, exercise])
    }  
    console.log(workout)

    return(
        <WOContext.Provider value = { {data: data, workout: workout, handleWOChange: handleWOChange, targetReps: targetReps, setTargetReps: setTargetReps, targetSets: targetSets, setTargetSets: setTargetSets} }>
        <>
            <div className="workout-page">
                <div className='wo-columns'>
                    <Routes>
                        <Route  path="/edit" element={<EditPage /> }/> 
                        <Route  path="/workouts" element={<SelectPage /> }/> 
                    </Routes>
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