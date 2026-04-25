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
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/simulasi" element={<Simulasi />} />
              <Route path="/model" element={<Model />} />
              <Route path="/hasil" element={<Hasil />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="bg-gray-800 text-white py-8 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-gray-400">
                &copy; 2025 Sistem Dinamis Rantai Pasok Garam Madura. Dashboard
                Simulasi.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Dibuat dengan React, Recharts & Tailwind CSS untuk visualisasi
                data dinamis.
              </p>
            </div>
          </footer>
        </div>
      </Router>
    </SimulationProvider>
  );
}

export default App;
