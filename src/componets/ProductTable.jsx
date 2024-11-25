// src/components/ProductTable.js

const ProductTable = ({ products, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-separate shadow-md border-sep dark:bg-gray-800">
        <thead>
          <tr>
            <th className="px-4 py-2 text-white border-b dark:border-gray-700">Nombre</th>
            <th className="px-4 py-2 text-white border-b dark:border-gray-700">Descripción</th>
            <th className="px-4 py-2 text-white border-b dark:border-gray-700">Precio</th>
            <th className="px-4 py-2 text-white border-b dark:border-gray-700">Categoria</th>
            <th className="px-4 py-2 text-white border-b dark:border-gray-700">Stock</th>
            <th className="px-4 py-2 text-white border-b dark:border-gray-700">Activo</th>
            <th className="px-4 py-2 text-white border-b dark:border-gray-700">Acciones</th>
          </tr>
        </thead>
        <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="px-4 py-2 text-black bg-teal-200 border-b ">{product.name}</td>
            <td className="px-4 py-2 text-black bg-teal-200 border-b ">{product.description}</td>
            <td className="px-4 py-2 text-black bg-teal-200 border-b ">{product.price}</td>
            <td className="px-4 py-2 text-black bg-teal-200 border-b ">{product.category}</td>
            <td className="px-4 py-2 text-black bg-teal-200 border-b ">{product.stock}</td>
            <td className="px-4 py-2 text-black bg-teal-200 border-b ">{product.isActive ? 'Sí' : 'No'}</td>
            <td className="px-4 py-2 text-black bg-teal-200 border-b ">
              <button
                onClick={() => onEdit(product.id)}
                className="px-3 py-1 mr-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(product.id)}
                className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
