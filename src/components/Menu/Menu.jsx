import { useNavigate } from "react-router-dom";
import "./Menu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlusSquare, faHistory, faUser } from '@fortawesome/free-solid-svg-icons';


const Menu = () => {
    const navigator = useNavigate()

    const handleClick = (urlTag) => {
        navigator(urlTag)
    }

    return (
    <div className="menu">
        <div className="menu-left logo">
            Plug & play Workouts 
        </div>
        <div className="menu-right">
            <div 
                className="menu-item"
                onClick={() => handleClick("/home")}>
                <FontAwesomeIcon icon={faHome} /> Home
            </div>
            <div 
                className="menu-item"
                onClick={() => handleClick("/create/workouts")}>
                <FontAwesomeIcon icon={faPlusSquare} /> New Workout
            </div>
            <div 
                className="menu-item"
                onClick={() => handleClick("/log")}>
                <FontAwesomeIcon icon={faHistory} /> Log History
            </div>
            <div 
                className="menu-item"
                onClick={() => handleClick("/profile")}>
                <FontAwesomeIcon icon={faUser} /> Profile
            </div>
        </div>
    </div>
);

}
 
export default Menu;