import React, { useContext } from "react";
import "./Summary.css";
import { DataContext } from "../../App";

const Summary = () => {
  const { services, formData, setFormData } = useContext(DataContext);
  const setStep = () => {
    setFormData((prev) => {
      return { ...prev, step: 2 };
    });
  };
  const totalPrice = () => {
    let total = 0;
    // plan rate
    total = services.plans[formData.plan.toLowerCase()][formData.billing];
    // addon rate(s)
    Object.keys(services.addons).forEach((addon) => {
      if (formData[addon]) {
        total += services.addons[addon][formData.billing];
      }
    });
    return total;
  };
  return (
    <>
      <ul className="FinishingUp-list">
        {/* plan */}
        <li className="FinishingUp-list">
          <div>
            <p className="summary-text-plan-title font-thick">
              {formData.plan} (
              {formData.billing === "mo" ? "Monthly" : "Yearly"})
            </p>
            <p className="summary-link" onClick={setStep}>
              Change
            </p>
          </div>
          <p className="summary-text-plan-price font-thick ">
            ${services.plans[formData.plan.toLowerCase()][formData.billing]}/
            {formData.billing}
          </p>
          {/* horiztonal rule if addons exist */}
          {(formData.onlineServices ||
            formData.largerStorage ||
            formData.customizableProfile) && (
              <div className="FinishingUp-list-line"></div>
            )}
        </li>
        {/* addons */}
        {Object.keys(services.addons).map((addon, idx) => {
          if (formData[addon]) {
            return (
              <li className="FinishingUp-list" key={addon + idx}>
                <p className="summary-addon-text">
                  {services.addons[addon].title}
                </p>
                <p className="summary-text-plan-price">
                  ${services.addons[addon][formData.billing]}/{formData.billing}
                </p>
              </li>
            );
          }
        })}
      </ul>
      {/* total */}
      <div className="FinishingUp-list summary-total-container">
        <p className="summary-addon-text">
          Total (per {formData.billing === "mo" ? "month" : "year"})
        </p>
        <p className="summary-total-price font-thick">
          +{totalPrice()}/{formData.billing}
        </p>
      </div>
    </>
  );
};

export default Summary;
