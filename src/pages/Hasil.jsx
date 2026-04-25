import React from "react";
import { Link } from "react-router-dom";
import { useSimulation } from "../context/SimulationContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Hasil = () => {
  const { analysis, simulationData, hasRun } = useSimulation();

  if (!hasRun || !analysis || !simulationData.length) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
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
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Belum ada hasil simulasi
          </h2>
          <p className="text-gray-500 mb-6">
            Silakan jalankan simulasi terlebih dahulu di halaman Simulasi.
          </p>
          <Link
            to="/simulasi"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
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
            Jalankan Simulasi
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Hasil Analisis
          </h1>
          <p className="text-lg text-gray-600">
            Ringkasan hasil simulasi dan wawasan dari model sistem dinamis.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">🏭</span>
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                Produksi
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              {analysis.avgProduction.toLocaleString()}
            </h3>
            <p className="text-sm text-gray-500">
              Rata-rata produksi per bulan (ton)
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">📦</span>
              <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                Stok
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              {analysis.finalStock.toLocaleString()}
            </h3>
            <p className="text-sm text-gray-500">Stok akhir periode (ton)</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">🚚</span>
              <span className="text-sm font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">
                Distribusi
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              {analysis.avgDistribution.toLocaleString()}
            </h3>
            <p className="text-sm text-gray-500">
              Rata-rata distribusi per bulan (ton)
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">💰</span>
              <span className="text-sm font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded">
                Harga
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              Rp {analysis.finalPrice.toLocaleString()}
            </h3>
            <p className="text-sm text-gray-500">Harga per ton periode akhir</p>
          </div>
        </div>

        {/* Mini Charts */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 mb-8">
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
                d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
              />
            </svg>
            Grafik Tren
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={simulationData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                  dataKey="month"
                  stroke="#64748b"
                  fontSize={12}
                  tickLine={false}
                  axisLine={{ stroke: "#e2e8f0" }}
                />
                <YAxis
                  stroke="#64748b"
                  fontSize={12}
                  tickLine={false}
                  axisLine={{ stroke: "#e2e8f0" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="stock"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={false}
                  name="Stok"
                />
                <Line
                  type="monotone"
                  dataKey="production"
                  stroke="#f97316"
                  strokeWidth={2}
                  dot={false}
                  name="Produksi"
                />
                <Line
                  type="monotone"
                  dataKey="distribution"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={false}
                  name="Distribusi"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Analysis Text */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-8">
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Analisis & Rekomendasi
          </h2>

          <div className="space-y-6">
            {/* Main Summary */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
              <h3 className="font-bold text-blue-800 mb-3 flex items-center">
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Ringkasan Eksekutif
              </h3>
              <p className="text-blue-900 leading-relaxed">
                {analysis.summary}
              </p>
            </div>

            {/* Key Insights */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                Wasanis Detail
              </h3>
              <div className="space-y-3">
                {analysis.insights.map((insight, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-gray-50 rounded-lg p-4"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{insight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
              <h3 className="font-bold text-amber-800 mb-3 flex items-center">
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                Rekomendasi
              </h3>
              <ul className="space-y-2 text-amber-700">
                {analysis.finalStock > 6000 && (
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>
                      Stok berlebih: pertimbangkan untuk meningkatkan distribusi
                      atau mengurangi produksi.
                    </span>
                  </li>
                )}
                {analysis.finalStock < 3000 && (
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>
                      Stok menipis: tingkatkan produksi atau aktifkan impor
                      untuk mencegah kelangkaan.
                    </span>
                  </li>
                )}
                {analysis.finalPrice > 6000 && (
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>
                      Harga tinggi: bisa diakibatkan stok rendah. Pertimbangkan
                      subsidi atau pengendalian harga.
                    </span>
                  </li>
                )}
                {analysis.finalPrice < 4000 && (
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>
                      Harga rendah: cenderung terjadi saat stok berlebihan.
                      Pertimbangkan program gayung untuk petani.
                    </span>
                  </li>
                )}
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>
                    Monitor curah hujan dan siapkan rencana mitigasi untuk musim
                    kemarau atau musim hujan.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>
                    Investasi teknologi pengering dan penanganan pasca panen
                    untuk meningkatkan efisiensi.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            to="/model"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
          >
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Kembali ke Model
          </Link>
          <Link
            to="/simulasi"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Simulasi Lagi
            <svg
              className="w-5 h-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hasil;
