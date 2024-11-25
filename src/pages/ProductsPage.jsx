// src/pages/ProductsPage.js
import React, { useState } from 'react';
import ProductsTable from '../componets/ProductTable';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Shampoo Orgánico de Aloe Vera',
      description: 'Shampoo natural elaborado con aloe vera, ideal para cabello sensible.',
      price: 15.99,
      category: 'Cuidado del Cabello',
      stock: 100,
      isActive: true,
    },
    // Otros productos aquí
  ]);

  const handleEdit = (productId) => {
    // Lógica para editar el producto (e.g., abrir un formulario)
    console.log('Editando producto con ID:', productId);
  };

  const handleDelete = (productId) => {
    // Confirmación y lógica para eliminar el producto
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este producto?');
    if (confirmDelete) {
      setProducts(products.filter((product) => product.id !== productId));
      console.log('Producto eliminado con ID:', productId);
    }
  };

  return (
    <div className="p-6">
         
      <h1 className="mb-6 text-2xl font-semibold">Productos</h1>
      <Link to="/add-product">
      <button type="button" className="focus:outline-none text-white bg-teal-200 hover:bg-teal-200 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500">
        Añadir Producto
      </button>
    </Link>
    <br />
    <br />
      <ProductsTable products={products} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default ProductsPage;
