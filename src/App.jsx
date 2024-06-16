import ProjectsPage from "./components/ProjectsPage";
import HomePage from "./components/HomePage";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";
import ReactLenis from "lenis/react";
import { HelmetProvider } from "react-helmet-async";

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
    <HelmetProvider>
      <AnimatePresence mode="wait">
        {cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    </HelmetProvider>
  );
}

export default App;
