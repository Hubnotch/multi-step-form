import React, { useContext } from "react";
import "./StepCards.css";
import { DataContext } from "../../App";

const PersonalInfo = () => {
  const { formErr, formData, setFormData } = useContext(DataContext);
  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className="step-container">
      <div className="step-body">
        <h2>Personal Info</h2>
        <h3>Please provide your name, email address, and phone number.</h3>
        <form>
          <div className="label-container">
            <label htmlFor="name">Name</label>
            {formErr.nameErr && (
              <p className="error-text">This field is required</p>
            )}
          </div>

          <input
            name="name"
            placeholder="e.g. Stephen King"
            onChange={handleChange}
            value={formData.name}
          ></input>
          <div className="label-container">
            <label htmlFor="email">Email</label>
            {formErr.emailErr && (
              <p className="error-text">This field is required</p>
            )}
          </div>
          <input
            name="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            onChange={handleChange}
            value={formData.email}
          ></input>
          <div className="label-container">
            <label htmlFor="phone">Phone Number</label>
            {formErr.phoneErr && (
              <p className="error-text">This field is required</p>
            )}
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="e.g. +1 234 567 890"
            onChange={handleChange}
            value={formData.phone}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
