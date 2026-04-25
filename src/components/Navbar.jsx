import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/simulasi", label: "Simulasi" },
  { to: "/model", label: "Model" },
  { to: "/hasil", label: "Hasil" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `flex items-center rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
      isActive
        ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
        : "text-slate-600 hover:bg-slate-100 hover:text-blue-700"
    }`;

  const sidebarContent = (
    <>
      <Link
        to="/"
        className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
        onClick={() => setIsOpen(false)}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700">
          <span className="text-sm font-bold text-white">SP</span>
        </div>
        <div>
          <h1 className="text-base font-bold text-slate-800 leading-tight">
            Simulasi Garam
          </h1>
          <p className="text-xs text-slate-500">Sistem Dinamis</p>
        </div>
      </Link>

      <div className="mt-8">
        <p className="px-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
          Navigasi
        </p>
        <nav className="mt-3 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="mt-auto rounded-2xl bg-gradient-to-br from-slate-900 to-blue-900 p-5 text-white shadow-xl">
        <p className="text-sm font-semibold">Dashboard Rantai Pasok</p>
        <p className="mt-2 text-sm text-blue-100">
          Jelajahi model, jalankan simulasi, lalu bandingkan hasilnya dari satu
          panel navigasi.
        </p>
      </div>
    </>
  );

  return (
    <>
      <div className="sticky top-0 z-40 border-b border-slate-200 bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100 hover:text-blue-700"
            onClick={() => setIsOpen(true)}
            aria-label="Buka sidebar"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700">
              <span className="text-sm font-bold text-white">SP</span>
            </div>
            <div>
              <h1 className="text-sm font-bold text-slate-800">
                Simulasi Garam
              </h1>
              <p className="text-xs text-slate-500">Sistem Dinamis</p>
            </div>
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/40"
            aria-label="Tutup sidebar"
            onClick={() => setIsOpen(false)}
          />
          <aside className="absolute inset-y-0 left-0 flex w-72 flex-col bg-slate-50 p-6 shadow-2xl">
            <div className="mb-4 flex justify-end">
              <button
                type="button"
                className="rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100 hover:text-blue-700"
                onClick={() => setIsOpen(false)}
                aria-label="Tutup sidebar"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex h-full flex-col">{sidebarContent}</div>
          </aside>
        </div>
      )}
    </>
  );
};

export default Navbar;
