import React, { useContext } from "react";
import "./Plans.css";
import { DataContext } from "../../App";

const Plans = ({ planTitle, planPrice, planBilling, handleClick }) => {
  const { formData } = useContext(DataContext);
  return (
    <button
      className={`card-plan ${formData.plan === planTitle && "card-plan-sel"}`}
      onClick={() => handleClick(planTitle)}
    >
      <img
        src={`../assets/images/icon-${planTitle.toLowerCase()}.svg`}
        alt={`${planTitle} icon
        `}
      />

      <div className="plan-content">
        <p className="plan-title">{planTitle}</p>
        <p className="plan-price">
          ${planPrice}/{planBilling}
        </p>
        {planBilling === "yr" && <p className="plan-2free">2 months Free</p>}
      </div>
    </button>
  );
};

export default Plans;
