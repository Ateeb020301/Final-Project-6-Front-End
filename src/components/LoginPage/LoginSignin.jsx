import { Link } from "react-router-dom";

export default function LoginSignin(){
    return(
        <div>
            <header>
                <h1>Workout Planner</h1>
                <nav>
                    <ul>
                    <li>
                        <Link to="/">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/login">Log in</Link>
                    </li>
                    </ul>
                </nav>
            </header>
        </div>

    )
}