import React, { useContext } from "react";
import "./Sidebar.css";
import { DataContext } from "../../App";

 const Sidebar = ({ step }) => {
  const { formData } = useContext(DataContext);
  const sidebarStep = new Array(
    "Your info",
    "Select plan",
    "Add-ons",
    "Summary"
  );
  return (
    <div className="sidebar">
      <ul className="sidebar">
        {sidebarStep.map((desc, idx) => {
          return (
            <SideBarNum
              key={desc + idx}
              i={idx + 1}
              step={formData.step}
              desc={desc}
            />
          );
        })}
      </ul>
    </div>
  );
};

function SideBarNum({ i, step, desc }) {
  return (
    <li className="sidebar">
      <p
        className={`sidebar-num ${step === i && "sidebar-num-active"} ${
          step === 5 && i === 4 && "sidebar-num-active"
        }`}
      >
        {i}
      </p>
      <div className="sidebar-desc-container">
        <p className="sidebar-desc-step">step {i}</p>
        <p className="sidebar-desc-title">{desc}</p>
      </div>
    </li>
  );
}

export default Sidebar 