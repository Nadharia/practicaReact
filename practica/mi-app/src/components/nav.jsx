import React from 'react';

export function Nav() {
  return (
    <nav className='bg-black w-screen h-16 flex justify-center p-2'>
      <ul className='flex gap-4 ml-5'>
        <li>
          <button className='bg-gray-900 px-4 py-2 border-1 border-amber-50 rounded  text-amber-50'>
            Crear producto
          </button>
        </li>
        <li>
          <button className='bg-gray-900 px-4 py-2 border-1 border-amber-50 rounded text-amber-50' >
            Ver productos
          </button>
        </li>
      </ul>
    </nav>
  );
}
