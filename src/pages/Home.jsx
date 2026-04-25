import React from "react";
import { Link } from "react-router-dom";
import { useSimulation } from "../context/SimulationContext";
import garamImg from "../assets/garam.png";

const Home = () => {
  const { analysis, hasRun } = useSimulation();

  const summaryCards = [
    {
      title: "Produksi",
      value: hasRun
        ? analysis?.avgProduction.toLocaleString() + " ton"
        : "0 ton",
      description: "Rata-rata produksi bulanan",
      icon: "🏭",
      color: "blue",
    },
    {
      title: "Stok",
      value: hasRun ? analysis?.finalStock.toLocaleString() + " ton" : "0 ton",
      description: "Stok akhir periode",
      icon: "📦",
      color: "green",
    },
    {
      title: "Distribusi",
      value: hasRun
        ? analysis?.avgDistribution.toLocaleString() + " ton"
        : "0 ton",
      description: "Rata-rata distribusi bulanan",
      icon: "🚚",
      color: "orange",
    },
    {
      title: "Harga",
      value: hasRun
        ? "Rp " + (analysis?.finalPrice || 0).toLocaleString()
        : "Rp 0",
      description: "Harga per ton",
      icon: "💰",
      color: "purple",
    },
  ];

  const colorClasses = {
    blue: "bg-blue-50 border-blue-200 text-blue-600",
    green: "bg-green-50 border-green-200 text-green-600",
    orange: "bg-orange-50 border-orange-200 text-orange-600",
    purple: "bg-purple-50 border-purple-200 text-purple-600",
  };

  return (
    <div className="min-h-screen">
      <div className="py-20 px-4 h-screen relative"
      style={{
        backgroundImage: `url(${garamImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
      >
        <div className="absolute inset-0 bg-black/15 z-0"></div>
        {/* <div className="relative max-w-4x1 mx-auto text-center text-white"></div> */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Simulasi Sistem Dinamik Rantai Pasok Garam Madura
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Aplikasi visualisasi dan simulasi model sistem dinamik untuk
            menganalisis dinamika produksi, distribusi, stok, dan harga garam di
            wilayah Madura. Dapatkan wawasan mendalam melalui berbagai skenario
            parameter.
          </p>
          <div className="mt-8">
            <Link
              to="/simulasi"
              className="inline-flex items-center bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
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
              Mulai Simulasi
            </Link>
          </div>
        </div>
      </div>

      {/* Summary Cards Grid */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Ringkasan Sistem
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Indikator kinerja utama rantai pasok garam Madura
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {summaryCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{card.icon}</span>
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full ${colorClasses[card.color]}`}
                  >
                    {card.title}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {card.value}
                </h3>
                <p className="text-sm text-gray-500">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Fitur Aplikasi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
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
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Input Parameter
              </h3>
              <p className="text-gray-600">
                Atur parameter seperti curah hujan, teknologi, permintaan,
                impor, dan peran pemerintah.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Visualisasi Data
              </h3>
              <p className="text-gray-600">
                Grafik interaktif yang menampilkan stok, produksi, distribusi,
                dan harga garam.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
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
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Analisis Skenario
              </h3>
              <p className="text-gray-600">
                Simulasikan berbagai skenario dan dapatkan analisis mendalam
                dari hasil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
