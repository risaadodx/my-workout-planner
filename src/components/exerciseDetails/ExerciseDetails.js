import React from "react";
import "./ExerciseDetails.css";

const ExerciseDetails = (props) => {
  return (
    <div className="exercise-details">
      <h3>Exercise Details</h3>
      <div className="time">
        <div>
          <h5>Exercise time</h5>
        </div>
        <div>
          <p>{props.total} seconds</p>
        </div>
      </div>
      <div className="time">
        <div>
          <h5>Break time</h5>
        </div>
        <div>
          <p>0 seconds</p>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetails;
