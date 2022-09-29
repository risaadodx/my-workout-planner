import React from "react";

const Workout = (props) => {
  const { img, title, timeRequired } = props.workout;
  return (
    <div>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>Time Required: {timeRequired}s</h4>
    </div>
  );
};

export default Workout;
