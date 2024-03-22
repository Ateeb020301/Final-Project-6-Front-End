import { useContext,  useState } from "react";
import "../WorkoutPage.css"
import { MainContext } from "../../../App";
import HomeExerciseCard from "./HomeExerciseCard";


const HomePage = () => {
    const { data } = useContext(MainContext)
    const [search, setSearch] = useState();
    const filteresByMuscleGroups = {'Arm': [], 'Shoulder': [], 'Chest': [], 'Back': [], 'Legs': [], 'Abs': []}

    const handleChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    if (!data) {
        return (<div>Loading</div>)
    }

    // Filter data by muscle group
    filteresByMuscleGroups.Arm = data.filter(exercise => exercise.muscle.muscleGroup.includes("Arm"))
    filteresByMuscleGroups.Shoulder = data.filter(exercise => exercise.muscle.muscleGroup.includes("Shoulder"))
    filteresByMuscleGroups.Chest = data.filter(exercise => exercise.muscle.muscleGroup.includes("Chest"))
    filteresByMuscleGroups.Back = data.filter(exercise => exercise.muscle.muscleGroup.includes("Back"))
    filteresByMuscleGroups.Legs = data.filter(exercise => exercise.muscle.muscleGroup.includes("Legs"))
    filteresByMuscleGroups.Abs = data.filter(exercise => exercise.muscle.muscleGroup.includes("Abs"))

    // Search filtering of the data
    if (search) {
        filteresByMuscleGroups.Arm =  [...filteresByMuscleGroups.Arm.filter(exercise => (
            exercise.workoutName.toLowerCase().includes(search.toLowerCase()) || exercise.muscle.muscleGroup.toLowerCase().includes(search.toLowerCase()) ||
            exercise.muscle.muscleName.toLowerCase().includes(search.toLowerCase()) || exercise.description.toLowerCase().includes(search.toLowerCase())
        ))]
        filteresByMuscleGroups.Shoulder =  [...filteresByMuscleGroups.Shoulder.filter(exercise => (
            exercise.workoutName.toLowerCase().includes(search.toLowerCase()) || exercise.muscle.muscleGroup.toLowerCase().includes(search.toLowerCase()) ||
            exercise.muscle.muscleName.toLowerCase().includes(search.toLowerCase()) || exercise.description.toLowerCase().includes(search.toLowerCase())
        ))]
        filteresByMuscleGroups.Chest =  [...filteresByMuscleGroups.Chest.filter(exercise => (
            exercise.workoutName.toLowerCase().includes(search.toLowerCase()) || exercise.muscle.muscleGroup.toLowerCase().includes(search.toLowerCase()) ||
            exercise.muscle.muscleName.toLowerCase().includes(search.toLowerCase()) || exercise.description.toLowerCase().includes(search.toLowerCase())
        ))]
        filteresByMuscleGroups.Back =  [...filteresByMuscleGroups.Back.filter(exercise => (
            exercise.workoutName.toLowerCase().includes(search.toLowerCase()) || exercise.muscle.muscleGroup.toLowerCase().includes(search.toLowerCase()) ||
            exercise.muscle.muscleName.toLowerCase().includes(search.toLowerCase()) || exercise.description.toLowerCase().includes(search.toLowerCase())
        ))]
        filteresByMuscleGroups.Legs =  [...filteresByMuscleGroups.Legs.filter(exercise => (
            exercise.workoutName.toLowerCase().includes(search.toLowerCase()) || exercise.muscle.muscleGroup.toLowerCase().includes(search.toLowerCase()) ||
            exercise.muscle.muscleName.toLowerCase().includes(search.toLowerCase()) || exercise.description.toLowerCase().includes(search.toLowerCase())
        ))]
        filteresByMuscleGroups.Abs =  [...filteresByMuscleGroups.Abs.filter(exercise => (
            exercise.workoutName.toLowerCase().includes(search.toLowerCase()) || exercise.muscle.muscleGroup.toLowerCase().includes(search.toLowerCase()) ||
            exercise.muscle.muscleName.toLowerCase().includes(search.toLowerCase()) || exercise.description.toLowerCase().includes(search.toLowerCase())
        ))]
    }
    
    return ( 
        <div className="wo-container">
            <header className="wo-header">
                <div className="wo-search">
                    <input 
                        className="wo-search-input"
                        name="content"
                        value={search}
                        placeholder="Search"
                        onChange={handleChange}
                    />
                </div>
            </header>
            <div className="ex-container">
                {Object.keys(filteresByMuscleGroups).map((key, index) => (
                    <div className="exercise-banner"
                    key={index}>
                        <div className="exercise-banner-header">{key}</div>
                        <div className="exercise-card-container">
                            {filteresByMuscleGroups[key].map((exercise, index2) => (
                                    <HomeExerciseCard key={index2} group={key} exercise={exercise} select={false} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default HomePage;
