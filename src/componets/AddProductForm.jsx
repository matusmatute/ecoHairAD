// src/components/AddProductForm.js
import React, { useState } from 'react';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    imageURL: '',
    isActive: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Producto añadido:', formData);
    // Aquí puedes agregar la lógica para enviar los datos a Firebase u otra API
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md p-6 mx-auto bg-white rounded shadow-md">
      <h2 className="mb-6 text-2xl font-semibold">Añadir Nuevo Producto</h2>

      <label className="block mb-2">Nombre del Producto</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />

      <label className="block mb-2">Descripción</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      ></textarea>

      <label className="block mb-2">Precio</label>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />

      <label className="block mb-2">Categoría</label>
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />

      <label className="block mb-2">Stock</label>
      <input
        type="number"
        name="stock"
        value={formData.stock}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />

      <label className="block mb-2">URL de la Imagen</label>
      <input
        type="text"
        name="imageURL"
        value={formData.imageURL}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />

      <label className="flex items-center mb-4">
        <input
          type="checkbox"
          name="isActive"
          checked={formData.isActive}
          onChange={handleChange}
          className="mr-2"
        />
        Producto Activo
      </label>

      <button type="submit" className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
        Guardar Producto
      </button>
    </form>
  );
};

export default AddProductForm;
