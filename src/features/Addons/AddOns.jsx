import React from "react";
import "./AddOns.css";
const AddOns = ({
  title,
  subtitle,
  billing,
  rate,
  active,
  type,
  handlePlanClick,
}) => {
  return (
    <div className="step-add-on" onClick={() => handlePlanClick(type)}>
      <button className="card-addon-btn">
        <div className="card-left">
          <div className={`checkbox ${active && "checkbox-active"}`}>
            <img src="../assets/image" alt="checkmark" />
          </div>
        </div>
        <div className="card-mid">
          <p className="add-on-title">{title}</p>
          <p className="add-on-subtitle">{subtitle}</p>
        </div>
        <div className="card-right">
          <p className="add-on-price">
            +${rate}/{billing}
          </p>
        </div>
      </button>
    </div>
  );
};

export default AddOns;
