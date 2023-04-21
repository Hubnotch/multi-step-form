import React, { useContext } from "react";
import "./Steps.css";
import { DataContext } from "../../App";

const Steps = () => {
  const { formData, setFormData, formErr, setFormErr } =
    useContext(DataContext);
  function handleClick(action) {
    if (formData.step === 1 && !formData.name) {
      setFormErr((prev) => {
        return { ...prev, nameErr: true };
      });
    } else {
      setFormErr((prev) => {
        return { ...prev, nameErr: false };
      });
    }
    if (formData.step === 1 && !formData.email) {
      setFormErr((prev) => {
        return { ...prev, emailErr: true };
      });
    } else {
      setFormErr((prev) => {
        return { ...prev, emailErr: false };
      });
    }
    if (formData.step === 1 && !formData.phone) {
      setFormErr((prev) => {
        return { ...prev, phoneErr: true };
      });
    } else {
      setFormErr((prev) => {
        return { ...prev, phoneErr: false };
      });
    }

    if (!formData.name || !formData.email || !formData.phone) {
      return;
    }
    const num = formData.step + action;
    setFormData((prev) => {
      return { ...prev, step: num };
    });
  }
  return (
    <div className="steps">
      <button
        className={`back-step ${formData.step === 1 && "back-hidden"}`}
        onClick={() => handleClick(-1)}
      >
        Go Back
      </button>
      <button className="next-step" onClick={() => handleClick(1)}>
        {formData.step === 4 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
};
export default Steps