import React from "react";
import "./Activity.css";
import ExerciseDetails from "../exerciseDetails/ExerciseDetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => toast("Done!");
const Activity = (props) => {
  const { cart } = props;

  console.log(cart);

  //let total = 0;
  //for (const workout of cart) {
  // total = total + workout.timeRequired;
  //}
  return (
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
          <div className="break-time">20s</div>
          <div className="break-time">30s</div>
          <div className="break-time">40s</div>
          <div className="break-time">50s</div>
        </div>
      </div>
      <div>
        <ExerciseDetails></ExerciseDetails>
      </div>
      <button onClick={notify}>Activity complited</button>
      <ToastContainer />
    </div>
  );
};

export default Activity;
