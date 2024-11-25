// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-auto text-black bg-teal-300 h-auto-white ">
      <div className="p-5">
        <h2 className="text-xl font-semibold">Mi Tienda</h2>
      </div>
      <nav className="mt-5">
        <ul>
          <li>
            <Link 
              to="/products" 
              className="block px-4 py-3 hover:bg-gray-700"
            >
              Productos
            </Link>
          </li>
          <li>
            <Link 
              to="/pedidos" 
              className="block px-4 py-3 hover:bg-gray-700"
            >
              Pedidos
            </Link>
          </li>
          <li>
            <Link 
              to="/detalles-pedidos" 
              className="block px-4 py-3 hover:bg-gray-700"
            >
              Detalles de Pedidos
            </Link>
          </li>
          <li>
            <Link 
              to="/envios" 
              className="block px-4 py-3 hover:bg-gray-700"
            >
              Envíos
            </Link>
          </li>
          <li>
            <Link 
              to="/metodos-pago" 
              className="block px-4 py-3 hover:bg-gray-700"
            >
              Métodos de Pago
            </Link>
          </li>
          <li>
            <Link 
              to="/usuarios" 
              className="block px-4 py-3 hover:bg-gray-700"
            >
              Usuarios
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
