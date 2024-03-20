import { useContext } from "react";
import { WOContext } from "../Workout";
import ProgramCard from "./ProgramCard";
import "./ProgramPage.css"

const ProgramPage = () => {
    const { workout } = useContext(WOContext)
    
    

    return ( 
        <div className="program-page-container">
            <header className="program-page-header">Workout Program: </header>
            <div>
                {workout.map((exercise, index) => (
                    <div key={index}
                        className="program-card-container">
                        < ProgramCard exercise={exercise} /> 
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default ProgramPage;