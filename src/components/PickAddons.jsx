import React, { useContext } from "react";
import AddOns from "../features/Addons/AddOns";
import { DataContext } from "../App";

const PickAddons = () => {
  const { services, formData, setFormData } = useContext(DataContext);
  const handlePlanClick = (addon) => {
    setFormData((prev) => {
      return { ...prev, [addon]: !prev[addon] };
    });
  };
  return (
    <div className="step-container">
      <div className="step-body">
        <h2>Pick add-ons</h2>
        <h3>Add-ons help enhance your gaming experience.</h3>
        <div className="step-content-container">
          {Object.keys(services.addons).map((addon, idx) => {
            return (
              <AddOns
                key={addon + idx}
                title={services.addons[addon].title}
                subtitle={services.addons[addon].subtitle}
                rate={services.addons[addon][formData.billing]}
                billing={formData.billing}
                active={formData[addon]}
                type={addon}
                handlePlanClick={handlePlanClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PickAddons;
