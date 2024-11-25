// src/components/TopProductChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const TopProductChart = ({ products }) => {
  // Extraemos los nombres de los productos y las cantidades vendidas
  const productNames = products.map((product) => product.name);
  const productSales = products.map((product) => product.sales);

  const data = {
    labels: productNames,
    datasets: [
      {
        label: 'Cantidad Vendida',
        data: productSales,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-lg font-semibold">Producto Más Vendido</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TopProductChart;
