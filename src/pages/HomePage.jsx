// src/pages/HomePage.js
import React from 'react';
import Card from '../componets/Card';
import { FaShoppingCart, FaDollarSign, FaBox } from 'react-icons/fa';
import SalesChart from '../componets/SalesChart'; // Importamos el gráfico
import TopProductChart from '../componets/TopProductChart';

const HomePage = () => {

    const products = [
        { name: 'Producto A', sales: 150 },
        { name: 'Producto B', sales: 300 },
        { name: 'Producto C', sales: 50 },
        { name: 'Producto D', sales: 200 },
        { name: 'Producto E', sales: 100 },
      ];
    
    return (
        <div className="p-8">
            <h1 className="mb-6 text-3xl font-semibold">Bienvenido al Dashboard</h1>

            {/* Cards Section */}
            <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3">
                <Card title="Ventas Totales" value="$10,250" icon={<FaDollarSign />} bgColor="bg-green-600" />
                <Card title="Productos Vendidos" value="1200" icon={<FaShoppingCart />} bgColor="bg-blue-600" />
                <Card title="Pedidos Pendientes" value="30" icon={<FaBox />} bgColor="bg-yellow-600" />

            </div>

            {/* Sección del gráfico */}
            <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-4 text-xl font-semibold">Ventas por Mes</h2>
                <SalesChart /> {/* Mostramos el gráfico aquí */}
            </div>
            <TopProductChart products={products} />

            {/* Resumen de ventas */}
            <div className="p-6 mt-8 bg-white rounded-lg shadow-md">
                <h2 className="mb-4 text-xl font-semibold">Resumen de Ventas</h2>
                <p className="text-lg">En este mes se han generado un total de <span className="font-bold">$10,250 en ventas</span>. El número total de productos vendidos es <span className="font-bold">1200</span>. Actualmente, hay <span className="font-bold">30 pedidos pendientes</span>.</p>
            </div>
        </div>
    );
};

export default HomePage;
