import React, { useContext } from "react";
import "./BillingType.css";
import { DataContext } from "../../App";

const BillingType = () => {
  const { formData, setFormData } = useContext(DataContext);
  const handleClick = () => {
    const selUpdate = formData.billing === "mo" ? "yr" : "mo";
    setFormData((prev) => {
      return { ...prev, billing: selUpdate };
    });
  };
  return (
    <div className="billing-container">
      <p
        className={`billing-mo ${
          formData.billing !== "mo" && "billing-inactive"
        }`}
      >
        Monthly
      </p>
      <button className="billing-btn" onClick={handleClick}>
        <div
          className={`billing-sel ${formData.billing !== "mo" && "move-sel"}`}
        >
          <p>Selection</p>
        </div>
      </button>
      <p
        className={`billing-yr ${
          formData.billing !== "yr" && "billing-inactive"
        }`}
      >
        Yearly
      </p>
    </div>
  );
};

export default BillingType;
