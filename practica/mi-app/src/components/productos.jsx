import React, { useState, useEffect } from 'react';

export function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para cargar productos
 const fetchProductos = async () => {
  try {
    setLoading(true);
    const response = await fetch('http://localhost:8081/productos');

    if (!response.ok) {
      let errorMessage = `Error en la respuesta: ${response.status}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorMessage;
      } catch {
        // No se pudo parsear JSON, queda mensaje básico
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();

    // Esto es opcional si confías en la excepción del backend
    if (!data.content || data.content.length === 0) {
      throw new Error('No hay una lista de productos');
    }

    setProductos(data.content);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchProductos();
  }, []);

  // Función para eliminar producto
  const handleEliminar = async (id) => {
    try {
      const response = await fetch(`http://localhost:8081/productos/delete/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Error al eliminar');
      console.log('Eliminado el producto', id);
      // Actualizar la lista después de eliminar
      setProductos(prev => prev.filter(producto => producto.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Cargando productos...</p>;
 

  return (
    <div>
      <h2 className='bg-gray-950 px-4 py-2 border-1 border-amber-50 rounded  text-amber-50 justify-center flex'>Lista de productos</h2>
      <ul>
        {productos.length > 0 ? (
          productos.map(producto => (
            <li key={producto.id} className='bg-gray-900 px-4 py-2 border-1 border-amber-50 rounded  text-amber-50 justify-center'>
                            {producto.nombre} cantidad: {
                producto.stock === 15
                    ? `${producto.stock} - Poca cantidad de productos`
                    : producto.stock
                }
                <br />
              <button type="button" onClick={() => handleEliminar(producto.id)} className='bg-amber-50 border-2 border-gray-900 text-gray-950 m-2 rounded'>
                Eliminar
              </button>
            </li>
          ))
        ) : (
          <p>No hay productos para mostrar</p>
        )}
      </ul>
    </div>
  );
}
