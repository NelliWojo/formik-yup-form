import { useState } from "react";
import BasicForm from "./components/BasicForm";
import AdvancedForm from "./components/AdvancedForm";

function App() {
  const [view, setView] = useState("basic");

  return (
    <div className="flex items-center flex-col gap-20">
      <nav className="flex gap-5">
        <h3
          onClick={() => setView("basic")}
          className={view === "basic" ? "text-slate-900" : ""}
        >
          Basic
        </h3>
        <h3
          onClick={() => setView("advanced")}
          className={view === "advanced" ? "text-slate-900" : ""}
        >
          Advanced
        </h3>
      </nav>
      {view === "basic" ? <BasicForm /> : <AdvancedForm />}
    </div>
  );
}

export default App;
