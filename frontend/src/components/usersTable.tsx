import React from 'react';

// Definir una interfaz para el tipo de usuario
interface IUser {
  nombre: string;
  apellido: string;
  correo: string;
  cuil: string;
  fechaRealizacion: string;
}

const ListaDeUsuarios: React.FC = () => {
  // Datos de ejemplo de usuarios
  const usuarios: IUser[] = [
    { nombre: 'Juan', apellido: 'Pérez', correo: 'juan@example.com', cuil: '20-12345678-9', fechaRealizacion: '2025-03-01' },
    { nombre: 'Ana', apellido: 'Gómez', correo: 'ana@example.com', cuil: '20-23456789-0', fechaRealizacion: '2025-02-15' },
    { nombre: 'Carlos', apellido: 'Lopez', correo: 'carlos@example.com', cuil: '20-34567890-1', fechaRealizacion: '2025-03-05' },
  ];

  return (
    <div>
      <h1>Lista de Peticiones</h1>
      <table className="table-auto border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Nombre</th>
            <th className="px-4 py-2 border">Apellido</th>
            <th className="px-4 py-2 border">Correo</th>
            <th className="px-4 py-2 border">CUIL</th>
            <th className="px-4 py-2 border">Fecha de Realización</th>
            <th className="px-4 py-2 border">Resultados</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border">{usuario.nombre}</td>
              <td className="px-4 py-2 border">{usuario.apellido}</td>
              <td className="px-4 py-2 border">{usuario.correo}</td>
              <td className="px-4 py-2 border">{usuario.cuil}</td>
              <td className="px-4 py-2 border">{usuario.fechaRealizacion}</td>
              <td className="px-4 py-2 border">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Editar</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded ml-2">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaDeUsuarios;
