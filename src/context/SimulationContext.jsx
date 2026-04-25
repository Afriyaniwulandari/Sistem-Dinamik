import React, { createContext, useState, useContext } from "react";

const SimulationContext = createContext();

export const useSimulation = () => {
  const context = useContext(SimulationContext);
  if (!context) {
    throw new Error("useSimulation must be used within SimulationProvider");
  }
  return context;
};

export const SimulationProvider = ({ children }) => {
  const [rainfall, setRainfall] = useState(0.5);
  const [technology, setTechnology] = useState(0.5);
  const [demand, setDemand] = useState(0.5);
  const [importLevel, setImportLevel] = useState(0.5);
  const [governmentRole, setGovernmentRole] = useState(0.5);
  const [simulationData, setSimulationData] = useState([]);
  const [analysis, setAnalysis] = useState(null);
  const [hasRun, setHasRun] = useState(false);

  const runSimulation = () => {
    const data = generateSimulationData(
      rainfall,
      technology,
      demand,
      importLevel,
      governmentRole,
    );
    setSimulationData(data);
    setAnalysis(
      generateAnalysis(
        data,
        rainfall,
        technology,
        demand,
        importLevel,
        governmentRole,
      ),
    );
    setHasRun(true);
  };

  const setScenario = (type) => {
    switch (type) {
      case "high-tech":
        setRainfall(0.5);
        setTechnology(0.9);
        setDemand(0.5);
        setImportLevel(0.3);
        setGovernmentRole(0.6);
        break;
      case "high-rain":
        setRainfall(0.9);
        setTechnology(0.5);
        setDemand(0.5);
        setImportLevel(0.5);
        setGovernmentRole(0.5);
        break;
      case "high-demand":
        setRainfall(0.5);
        setTechnology(0.6);
        setDemand(0.9);
        setImportLevel(0.7);
        setGovernmentRole(0.5);
        break;
      default:
        break;
    }
  };

  return (
    <SimulationContext.Provider
      value={{
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
        setSimulationData,
        analysis,
        setAnalysis,
        runSimulation,
        setScenario,
        hasRun,
      }}
    >
      {children}
    </SimulationContext.Provider>
  );
};

// Simulation logic
const calculateProduction = (
  rainfall,
  technology,
  demand,
  baseProduction = 1000,
) => {
  const rainFactor = 1 - rainfall * 0.7;
  const techFactor = 0.3 + technology * 0.7;
  const demandFactor = 0.5 + demand * 0.5;
  return baseProduction * rainFactor * techFactor * demandFactor;
};

const calculateDistribution = (
  stock,
  production,
  importLevel,
  governmentRole,
) => {
  const available = stock + production;
  const importFactor = 0.3 + importLevel * 0.4;
  const govFactor = 0.5 + governmentRole * 0.3;
  return available * importFactor * govFactor;
};

// const generateSimulationData = (
//   rainfall,
//   technology,
//   demand,
//   importLevel,
//   governmentRole,
//   months = 12,
// ) => {
//   const data = [];
//   let currentStock = 5000;

//   for (let i = 0; i < months; i++) {
//     const monthName = `Bulan ${i + 1}`;
//     const production = calculateProduction(rainfall, technology, demand);
//     const distribution = calculateDistribution(
//       currentStock,
//       production,
//       importLevel,
//       governmentRole,
//     );
//     currentStock = currentStock + production - distribution;

//     if (currentStock < 0) currentStock = 0;

//     const price =
//       5000 + currentStock / 100 - distribution / 200 + Math.random() * 500;

//     data.push({
//       month: monthName,
//       production: Math.round(production),
//       distribution: Math.round(distribution),
//       stock: Math.round(currentStock),
//       price: Math.round(price),
//     });
//   }

//   return data;
// };
const generateSimulationData = (
  rainfall,
  technology,
  demand,
  importLevel,
  governmentRole,
  months = 12,
) => {
  const data = [];
  let stock = 5000; // stok awal

  // Mapping sesuai model Vensim
  const teknologi = governmentRole;
  const permintaan = demand;
  const curahHujan = rainfall;
  const impor = importLevel * 1000;
  const pendapatanPetani = 1;

  for (let i = 0; i < months; i++) {
    const monthName = `Bulan ${i + 1}`;

    // PRODUKSI
    const production =
      6092 *
      teknologi *
      pendapatanPetani *
      (1 - curahHujan);

    // HARGA
    const price =
      2000 /
      (1 +
        0.00002 * stock +
        0.00001 * production +
        0.00001 * impor);

    // DISTRIBUSI
    const distribution =
      0.0002 *
      stock *
      permintaan *
      (price / 2000);

    // STOCK (INTEG)
    stock = stock + production - distribution;

    if (stock < 0) stock = 0;

    data.push({
      month: monthName,
      production: Math.round(production),
      distribution: Math.round(distribution),
      stock: Math.round(stock),
      price: Math.round(price),
    });
  }

  return data;
};

const generateAnalysis = (
  data,
  rainfall,
  technology,
  demand,
  importLevel,
  governmentRole,
) => {
  const totalProduction = data.reduce((sum, d) => sum + d.production, 0);
  const totalDistribution = data.reduce((sum, d) => sum + d.distribution, 0);
  const avgProduction = totalProduction / data.length;
  const avgDistribution = totalDistribution / data.length;
  const finalStock = data[data.length - 1].stock;
  const initialStock = data[0].stock;
  const finalPrice = data[data.length - 1].price;

  const insights = [];

  if (rainfall > 0.6) {
    insights.push(
      `Curah hujan tinggi (${rainfall.toFixed(2)}) mengurangi produksi secara signifikan.`,
    );
  } else if (rainfall < 0.3) {
    insights.push(
      `Curah hujan rendah (${rainfall.toFixed(2)}) mendukung produksi yang optimal.`,
    );
  } else {
    insights.push(
      `Curah hujan sedang (${rainfall.toFixed(2)}) memberikan dampak netral pada produksi.`,
    );
  }

  if (technology > 0.7) {
    insights.push(
      `Tingkat teknologi tinggi (${technology.toFixed(2)}) meningkatkan efisiensi produksi sebesar 70-100%.`,
    );
  } else if (technology < 0.3) {
    insights.push(
      `Tingkat teknologi rendah (${technology.toFixed(2)}) membatasi kapasitas produksi maksimal.`,
    );
  }

  if (demand > 0.7) {
    insights.push(
      `Permintaan pasar tinggi (${demand.toFixed(2)}) mendorong peningkatan produksi.`,
    );
  } else if (demand < 0.3) {
    insights.push(
      `Permintaan pasar rendah (${demand.toFixed(2)}) menekan produksi.`,
    );
  }

  if (finalStock > initialStock * 1.2) {
    insights.push(
      `Stok garam meningkat ${((finalStock / initialStock - 1) * 100).toFixed(0)}%, distribusi kurang optimal.`,
    );
  } else if (finalStock < initialStock * 0.8) {
    insights.push(
      `Stok garam menurun ${((1 - finalStock / initialStock) * 100).toFixed(0)}%, berisiko kekurangan inventory.`,
    );
  } else {
    insights.push(`Stok garam tetap stabil dalam rentang yang sehat.`);
  }

  if (avgDistribution > avgProduction * 1.1) {
    insights.push(
      `Distribusi (${avgDistribution.toFixed(0)} ton) melebihi produksi rata-rata, dibutuhkan penambahan stok awal.`,
    );
  } else if (avgDistribution < avgProduction * 0.9) {
    insights.push(
      `Distribusi (${avgDistribution.toFixed(0)} ton) lebih rendah dari produksi, menyebabkan akumulasi stok.`,
    );
  }

  let summary = "";
  if (rainfall > 0.6 && technology < 0.4) {
    summary =
      "Produksi garam menurun drastis akibat curah hujan tinggi dan teknologi rendah. Distribusi tidak dapat dipertahankan.";
  } else if (rainfall > 0.6 && technology > 0.6) {
    summary =
      "Produksi garam tetap stabil meskipun curah hujan tinggi berkat teknologi yang canggih.";
  } else if (rainfall < 0.3 && technology > 0.6) {
    summary =
      "Kondisi optimal: curah hujan rendah dan teknologi tinggi menghasilkan produksi maksimal.";
  } else {
    summary = `Produksi garam ${rainfall > 0.5 ? "menurun" : "stabil"} seiring dengan curah hujan. Distribusi relatif ${avgDistribution > avgProduction * 1.05 ? "melebihi" : "mencocokkan"} produksi, ${finalStock > initialStock ? "menyebabkan akumulasi stok" : "menjaga stok tetap"}.`;
  }

  return {
    summary,
    avgProduction: Math.round(avgProduction),
    avgDistribution: Math.round(avgDistribution),
    finalStock: Math.round(finalStock),
    finalPrice: Math.round(finalPrice),
    insights,
  };
};
