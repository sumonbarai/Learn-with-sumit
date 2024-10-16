import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NewsProvider } from "./context/NewsProvider.jsx";
import { FilterProvider } from "./context/FilterProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FilterProvider>
      <NewsProvider>
        <App />
      </NewsProvider>
    </FilterProvider>
  </StrictMode>
);
