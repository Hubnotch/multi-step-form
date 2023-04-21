import React from "react";
import Summary from "../features/Summary/Summary";

const FinishingUp = () => {
  return (
    <div className="step-container">
      <div className="step-body">
        <h2>Finishing up</h2>
        <h3>Double-check everything looks OK before confirming.</h3>
        <div className="step-content-container">
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default FinishingUp;
