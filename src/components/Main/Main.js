import React, { useEffect, useState } from "react";
import "./Main.css";
import Workout from "../Workout/Workout";

const Main = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("workouts.json")
      .then((res) => res.json())
      .then((data) => setWorkouts(data));
  }, []);

  return (
    <div className="main-container">
      <div className="workout-container">
        <h4>Select Today's Workouts:{workouts.length}</h4>
        <div className="workout-card-container">
          {workouts.map((workout) => (
            <Workout key={workout.id} workout={workout}></Workout>
          ))}
        </div>
      </div>
      <div className="activity-container">
        <h4>Activity</h4>
      </div>
    </div>
  );
};

export default Main;
