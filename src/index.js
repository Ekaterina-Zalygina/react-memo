import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { EasyModeContext } from "./context/useEasyMode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function App() {
  const [isEasyMode, setEasyMode] = useState(false);

  return (
    <React.StrictMode>
      <EasyModeContext.Provider value={{ isEasyMode, setEasyMode }}>
        <RouterProvider router={router}></RouterProvider>
      </EasyModeContext.Provider>
    </React.StrictMode>
  );
}
