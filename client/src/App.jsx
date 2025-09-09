import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-6 py-3 flex gap-6">
        <Link to="/">Dashboard</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/team">Team</Link>
      </nav>

      {/* Child routes will render here */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
