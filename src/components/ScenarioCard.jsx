import React from "react";
import { useSimulation } from "../context/SimulationContext";

const ScenarioCard = () => {
  const { setScenario, runSimulation } = useSimulation();

  const scenarios = [
    {
      id: "high-tech",
      title: "Teknologi Tinggi",
      description:
        "Meningkatkan efisiensi produksi dengan teknologi terkini. Produksi meningkat meskipun curah hujan tinggi.",
      color: "green",
      icon: "🏭",
    },
    {
      id: "high-rain",
      title: "Curah Hujan Tinggi",
      description:
        "Kondisi cuaca buruk mengurangi produksi garam. Simulasi dampak hujan lebat pada rantai pasok.",
      color: "blue",
      icon: "🌧️",
    },
    {
      id: "high-demand",
      title: "Permintaan Tinggi",
      description:
        "Lonjakan kebutuhan pasar mendorong peningkatan produksi dan distribusi.",
      color: "orange",
      icon: "📈",
    },
  ];

  const handleScenarioClick = (scenarioId) => {
    setScenario(scenarioId);
    setTimeout(() => {
      runSimulation();
    }, 100);
  };

  const colorClasses = {
    green:
      "from-green-50 to-emerald-50 border-green-200 hover:border-green-400",
    blue: "from-blue-50 to-cyan-50 border-blue-200 hover:border-blue-400",
    orange:
      "from-orange-50 to-amber-50 border-orange-200 hover:border-orange-400",
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
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
            d="M9 20l-5.447-2.724A1 1 0 003 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 7m0 13V7"
          />
        </svg>
        Skenario Perubahan
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
        {scenarios.map((scenario) => (
          <div
            key={scenario.id}
            className={`bg-gradient-to-br ${colorClasses[scenario.color]} rounded-lg p-5 border-2 transition-all duration-200 hover:shadow-lg h-full flex flex-col`}
          >
            <div className="text-4xl mb-3">{scenario.icon}</div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              {scenario.title}
            </h4>
            <p className="text-sm text-gray-600 mb-4">{scenario.description}</p>
            <button
              onClick={() => handleScenarioClick(scenario.id)}
              className="mt-auto bg-white hover:bg-gray-50 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-sm border border-gray-200 hover:border-gray-300 transition-all duration-200 flex items-center justify-center"
            >
              <svg
                className="w-4 h-4 mr-2"
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
              Lihat Skenario
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScenarioCard;
