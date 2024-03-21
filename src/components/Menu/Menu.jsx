import { useNavigate } from "react-router-dom";
import "./Menu.css"

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
                    Home
                </div>
                <div 
                    className="menu-item"
                    onClick={() => handleClick("/create/workouts")}>
                    New Workout
                </div>
                <div 
                    className="menu-item"
                    onClick={() => handleClick("/log")}>
                    Log History
                </div>
                <div 
                    className="menu-item"
                    onClick={() => handleClick("/profile")}>
                    Profile
                </div>
            </div>
        </div>
     );
}
 
export default Menu;