
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu/Menu.jsx';
import Login from "./components/LoginPage/Login.jsx"
import { Signup } from "./components/LoginPage/Signup.jsx"
import { Workout } from './components/WorkoutPage/Workout.jsx';
import SelectPage from './components/WorkoutPage/SelectPage/SelectPage.jsx';
import EditPage from './components/WorkoutPage/EditPage/EditPage.jsx';
import woData from './components/WorkoutPage/data.js';
import { createContext, useState } from 'react';
import HomePage from './components/WorkoutPage/SelectPage/HomePage.jsx';

const MainContext = createContext()

const initWorkout = {
userId: "TODO",
    exercises: [],   
    notes: ""
}

// Original is commented out at the bootum. Need to update to implement the Workout page
// This uncommented part is a proxy to direct the app to the workout page
function App() {
    const [data, setData] = useState(woData);
    const [workout, setWorkout] = useState(initWorkout);

    return (
        <>
          <div className="container">
            <header className="header">
                < Menu />
            </header>
            <div className="content">
            <MainContext.Provider  value = { {data: data, workout: workout, setData: setData, setWorkout: setWorkout} } >
                <Routes>
                    <Route path="home" element={<HomePage />} />
                    <Route path="login" element={<Login />} />
                    <Route path="/" element={< Signup/>} />
                    <Route path='create' element={<Workout />} >
                        <Route path='workouts' element={< SelectPage />} />
                        <Route path='edit/:id' element={< EditPage />} />
                    </Route> 
                </Routes>
            </MainContext.Provider>
            </div>
          </div>
        </>
    );
}
  
  export { App, MainContext };



