import React from "react";
import "./Workout.css";

const Workout = (props) => {
  const { img, title, timeRequired } = props.workout;
  return (
    <div className="workout-card">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>Time Required: {timeRequired}s</h4>
      <button onClick={() => props.handleAddToCart(props.workout)}>
        Add to list
      </button>
    </div>
  );
};

export default Workout;
