import React, { useEffect, useState } from "react";
import "./Workouts.css";

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    fetch("workout.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="main">
      <div className="workout-container">
        <h4>Select Today's Workouts:</h4>
      </div>
      <div className="activity-container">
        <div>
          <h4>Khaled bin wahid</h4>
          <p>Chittagong, Bangladesh</p>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
