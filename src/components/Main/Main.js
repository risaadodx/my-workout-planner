import React, { useEffect, useState } from "react";
import "./Main.css";
import Workout from "../Workout/Workout";
import Activity from "../activity/Activity";

const Main = () => {
  const [workouts, setWorkouts] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("workouts.json")
      .then((res) => res.json())
      .then((data) => setWorkouts(data));
  }, []);

  const handleAddToList = (workout) => {
    const newList = [...list, workout];
    setList(newList);
  };

  return (
    <div className="main-container">
      <div className="workout-container">
        <h4>Select Today's Workouts:</h4>
        <div className="workout-card-container">
          {workouts.map((workout) => (
            <Workout
              key={workout.id}
              workout={workout}
              handleAddToList={handleAddToList}
            ></Workout>
          ))}
        </div>
      </div>
      <div className="activity-container">
        <Activity></Activity>
      </div>
    </div>
  );
};

export default Main;
