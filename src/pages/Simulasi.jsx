import React from "react";
import { useSimulation } from "../context/SimulationContext";
import SliderInput from "../components/SliderInput";
import ChartCard from "../components/ChartCard";
import ScenarioCard from "../components/ScenarioCard";

const Simulasi = () => {
  const {
    rainfall,
    setRainfall,
    technology,
    setTechnology,
    demand,
    setDemand,
    importLevel,
    setImportLevel,
    governmentRole,
    setGovernmentRole,
    simulationData,
    runSimulation,
    hasRun,
  } = useSimulation();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Halaman Simulasi
          </h1>
          <p className="text-gray-600">
            Atur parameter système dan jalankan simulasi untuk melihat hasilnya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Input & Scenarios */}
          <div className="lg:col-span-1 space-y-6">
            {/* Input Simulation Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
                Input Simulasi
              </h2>

              <div className="space-y-6">
                <SliderInput
                  label="Curah Hujan"
                  value={rainfall}
                  onChange={setRainfall}
                  min={0}
                  max={1}
                  step={0.01}
                  leftLabel="ering"
                  rightLabel="banyak"
                />

                <SliderInput
                  label="Tingkat Teknologi"
                  value={technology}
                  onChange={setTechnology}
                  min={0}
                  max={1}
                  step={0.01}
                  leftLabel="tradisional"
                  rightLabel="canggih"
                />

                <SliderInput
                  label="Permintaan Pasar"
                  value={demand}
                  onChange={setDemand}
                  min={0}
                  max={1}
                  step={0.01}
                  leftLabel="rendah"
                  rightLabel="tinggi"
                />

                <SliderInput
                  label="Tingkat Impor"
                  value={importLevel}
                  onChange={setImportLevel}
                  min={0}
                  max={1}
                  step={0.01}
                  leftLabel="minimal"
                  rightLabel="maksimal"
                />

                <SliderInput
                  label="Peran Pemerintah"
                  value={governmentRole}
                  onChange={setGovernmentRole}
                  min={0}
                  max={1}
                  step={0.01}
                  leftLabel="minimal"
                  rightLabel="aktif"
                />

                <button
                  onClick={runSimulation}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Run Simulasi
                </button>
              </div>
            </div>

            {/* Scenario Cards */}
            <ScenarioCard />
          </div>

          {/* Right Column - Output Charts */}
          <div className="lg:col-span-2">
            {hasRun && simulationData.length > 0 ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ChartCard
                    title="Stok Garam"
                    data={simulationData}
                    dataKey="stock"
                    color="#3b82f6"
                    unit="ton"
                  />
                  <ChartCard
                    title="Produksi Garam"
                    data={simulationData}
                    dataKey="production"
                    color="#f97316"
                    unit="ton"
                  />
                  <ChartCard
                    title="Distribusi Garam"
                    data={simulationData}
                    dataKey="distribution"
                    color="#10b981"
                    unit="ton"
                  />
                  <ChartCard
                    title="Harga Garam"
                    data={simulationData}
                    dataKey="price"
                    color="#8b5cf6"
                    unit="Rp"
                  />
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-12 border border-gray-100 text-center">
                <svg
                  className="w-24 h-24 mx-auto mb-6 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Belum ada data simulasi
                </h3>
                <p className="text-gray-500">
                  Atur parameter di sidebar dan klik "Run Simulasi" untuk
                  melihat hasil.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulasi;
