/* eslint-disable react/prop-types */

const HomeExerciseCard = ( {exercise}) => {
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
        </div>
     );
}
 
export default HomeExerciseCard;