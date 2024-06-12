import ProjectsPage from "./components/ProjectsPage";
import HomePage from "./components/HomePage";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/projects",
      element: <ProjectsPage />,
    },
  ]);

  const location = useLocation();

  if (!element) return null;
  return (
    <AnimatePresence mode="wait">
      {cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}

export default App;
