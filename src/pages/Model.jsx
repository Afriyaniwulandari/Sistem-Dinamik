import React, {useState} from "react";
import { Link } from "react-router-dom";

const Model = () => {
  const [sfdImage, setSfdImage] = useState(null);
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Model Sistem Dinamik
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Representasi visual dari hubungan ketergantungan antara produksi,
            distribusi, stok, dan harga dalam rantai pasok garam Madura.
          </p>
        </div>

        {/* SFD Diagram Placeholder */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center">
            <div className="mb-6 text-center">
  <input
    type="file"
    accept="image/*"
    onChange={(e) => {
      const file = e.target.files[0];
      if (file) {
        setSfdImage(URL.createObjectURL(file));
      }
    }}
  />
</div>
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
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {/* Diagram SFD (Stock and Flow Diagram) */}
          </h2>

          {/* Placeholder for SFD */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-12 border-2 border-dashed border-gray-300 text-center">
            <div className="max-w-2xl mx-auto">
              {sfdImage ? (
  <img
    src={sfdImage}
    alt="SFD"
    className="mx-auto max-h-[500px] w-full object-contain rounded-lg shadow-lg"
  />
) : (
  <p className="text-gray-500">
    Silakan upload gambar SFD dari laptop Anda
  </p>
)}
              <p className="text-gray-500 text-sm">
                Diagram Stocks & Flows (SFD) menunjukkan hubungan antara
                variabel-variabel kunci dalam sistem rantai pasok garam.
              </p>
            </div>
          </div>
        </div>

        {/* Model Description */}
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
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            Penjelasan Model
          </h2>

          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              Model sistem dinamik untuk rantai pasok garam Madura terdiri dari
              beberapa komponen utama yang saling berinteraksi:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-800 mb-2 flex items-center">
                  <span className="text-2xl mr-2">📊</span> Stok Garam
                </h4>
                <p className="text-blue-700 text-sm">
                  Variabel stok yang menyimpan persediaan garam. Stok bertambah
                  dari produksi dan berkurang akibat distribusi ke pasar.
                </p>
              </div>

              <div className="bg-orange-50 rounded-lg p-5 border-l-4 border-orange-500">
                <h4 className="font-bold text-orange-800 mb-2 flex items-center">
                  <span className="text-2xl mr-2">🏭</span> Produksi
                </h4>
                <p className="text-orange-700 text-sm">
                  Aliran produksi garam yang dipengaruhi oleh curah hujan,
                  tingkat teknologi, dan permintaan pasar. Produksi maksimal
                  normal adalah 1000 ton per bulan.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-5 border-l-4 border-green-500">
                <h4 className="font-bold text-green-800 mb-2 flex items-center">
                  <span className="text-2xl mr-2">🚚</span> Distribusi
                </h4>
                <p className="text-green-700 text-sm">
                  Aliran distribusi garam ke pasar yang dipengaruhi oleh tingkat
                  persediaan, tingkat impor, dan peran pemerintah dalam regulasi
                  distribusi.
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-5 border-l-4 border-purple-500">
                <h4 className="font-bold text-purple-800 mb-2 flex items-center">
                  <span className="text-2xl mr-2">💰</span> Harga
                </h4>
                <p className="text-purple-700 text-sm">
                  Variabel pendukung yang berbalik arah dengan stok: harga naik
                  jika stok rendah, dan harga turun jika stok berlebihan.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-3">
                Hubungan Antar Variabel
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>
                    <strong>Curah Hujan</strong> mempengaruhi produksi: curah
                    tinggi mengurangi produksi hingga 70%.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>
                    <strong>Teknologi</strong> meningkatkan efisiensi produksi
                    dari 30% hingga 100%.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>
                    <strong>Permintaan</strong> pasar secara langsung menentukan
                    target produksi.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>
                    <strong>Impor</strong> menambah pasokan dan mengurangi
                    tekanan produksi dalam negeri.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>
                    <strong>Peran Pemerintah</strong> dapat mengatur distribusi
                    dan stok strategis.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            to="/"
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
            Kembali ke Home
          </Link>
          <Link
            to="/simulasi"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Ke Halaman Simulasi
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Model;
