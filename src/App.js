import { useState, createContext } from "react";
import "./App.css";
import {
  FinishingUp,
  PersonalInfo,
  PickAddons,
  SelectYourPlan,
  Sidebar,
  Steps,
  Summary
} from "./components"

export const DataContext = createContext(null);
const services = {
  plans: {
    arcade: { title: "Arcade", mo: 9, yr: 90 },
    advanced: { title: "Advanced", mo: 12, yr: 120 },
    pro: { title: "Pro", mo: 15, yr: 150 },
  },
  addons: {
    onlineServices: {
      title: "Online Service",
      subtitle: "Access to multiplayer games",
      mo: 1,
      yr: 10,
    },
    largerStorage: {
      title: "Larger storage",
      subtitle: "Extra 1TB of cloud save",
      mo: 2,
      yr: 20,
    },
    customizableProfile: {
      title: "Customizable Profile",
      subtitle: "Custom theme on your profile",
      mo: 2,
      yr: 20,
    },
  },
};
function App() {
  const [formData, setFormData] = useState({
    step: 1,
    name: "",
    email: "",
    phone: "",
    billing: "mo",
    plan: "Arcade",
    onlineServices: false,
    largerStorage: false,
    customizableProfile: false,
  });
  const [formErr, setFormErr] = useState({
    nameErr: false,
    emailErr: false,
    phoneErr: false,
  });
  const stepArr = [<PersonalInfo />, <SelectYourPlan />, <PickAddons />, <FinishingUp />, <Summary />];
  return (
    <main className="App">
      <DataContext.Provider
        value={{ services, formData, setFormData, formErr, setFormErr }}
      >
        <Sidebar step={formData.step} />
        <div className="app-content">
          {stepArr[formData.step - 1]}
          {formData.step !== 5 && <Steps />}
        </div>
      </DataContext.Provider>
    </main>
  );
}

export default App;
