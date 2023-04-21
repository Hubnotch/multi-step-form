import React, { useContext } from "react";
import { DataContext } from "../App";
const Summary = () => {
  const { formData } = useContext(DataContext);
  console.log(formData);

  return (
    <div className="step-container">
      <div className="step-body confirmation">
        <img src="../assets/images/icon-thank-you.svg" alt="Thank you check" />
        <h2>Thank you!</h2>
        <h3>
          Thank you! Thanks for confirming your subscription! We hope you have
          fun using our platform. If you ever need support, please feel free to
          email us at support@loremgaming.com.
        </h3>
      </div>
    </div>
  );
};

export default Summary;
