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
        <h4>Select Today's Workouts:</h4>
        <div className="workout-card-container">
          {workouts.map((workout) => (
            <Workout key={workout.id} workout={workout}></Workout>
          ))}
        </div>
      </div>
      <div className="activity-container">
        <div className="profile">
          <h3>Khaled Bin Wahid</h3>
          <p>Chittagong, Bangladesh</p>
          <div className="profile-info">
            <div>
              <h5>60kg</h5>
              <p>Weight</p>
            </div>
            <div>
              <h5>5.10</h5>
              <p>Height</p>
            </div>
            <div>
              <h5>30</h5>
              <p>Age</p>
            </div>
          </div>
          <div className="add-break">
            <h3>Add A Break</h3>
            <div className="add-break-info">
              <div className="break-time">10s</div>
              <div className="break-time">10s</div>
              <div className="break-time">10s</div>
              <div className="break-time">10s</div>
              <div className="break-time">10s</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
