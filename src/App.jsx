import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SimulationProvider } from "./context/SimulationContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Simulasi from "./pages/Simulasi";
import Model from "./pages/Model";
import Hasil from "./pages/Hasil";

function App() {
  return (
    <SimulationProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <div>
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/simulasi" element={<Simulasi />} />
                <Route path="/model" element={<Model />} />
                <Route path="/hasil" element={<Hasil />} />
              </Routes>
            </main>

            <footer className="bg-gray-800 py-8 text-white lg:mt-12">
              <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                <p className="text-gray-400">
                  &copy; 2025 Sistem Dinamis Rantai Pasok Garam Madura.
                  Dashboard Simulasi.
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Dibuat dengan React, Recharts & Tailwind CSS untuk
                  visualisasi data dinamis.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </Router>
    </SimulationProvider>
  );
}

export default App;
