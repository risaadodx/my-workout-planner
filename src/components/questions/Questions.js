import React from "react";
import "./questions.css";

const Questions = () => {
  return (
    <div className="questions">
      <div className="question">
        <h4>How does react work:</h4>
        <p>
          ReactJS divides the UI into isolated reusable pieces of code known as
          components. React components work similarly to JavaScript functions as
          they accept arbitrary inputs called properties or props. It's possible
          to have as many components as necessary without cluttering your code.
        </p>
        <h4>Difference between props and state:</h4>
        <p>
          Props are used to pass data from one component to another. The state
          is a local data storage that is local to the component only and cannot
          be passed to other components. The this.setState property is used to
          update the state values in the component.
        </p>
        <h4>What else useeffect do expect api data loading:</h4>
        <p>
          The useEffect hook allows components to react to lifecycle events such
          as mounting to the DOM, re-rendering, and unmounting.
        </p>
      </div>
    </div>
  );
};

export default Questions;
