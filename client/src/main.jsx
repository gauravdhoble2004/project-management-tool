import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import GanttPage from "./pages/GanttPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "*", // parent route matches everything
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> }, // "/" route
      { path: "projects", element: <Projects /> },
      { path: "team", element: <Team /> },
      { path: "gantt", element: <GanttPage /> }, // Gantt chart test
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    />
  </React.StrictMode>
);
