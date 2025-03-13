"use client"

import { useState } from "react";

interface CuilFormProps {
  onSubmit: (cuil: string) => void;
}

const CuilForm: React.FC<CuilFormProps> = ({ onSubmit }) => {
  const [cuil, setCuil] = useState("");
  const [error, setError] = useState("");

  const validarCUIL = (cuil: string) => /^\d{2}-?\d{8}-?\d{1}$/.test(cuil);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validarCUIL(cuil)) {
      setError("El CUIL ingresado no es válido.");
      return;
    }

    setError("");
    onSubmit(cuil);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-center mb-4">Ingresa tu CUIL</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="cuil" className="mb-2 font-medium">CUIL</label>
        <input
          id="cuil"
          type="text"
          value={cuil}
          onChange={(e) => setCuil(e.target.value)}
          className="p-2 border rounded mb-2"
          placeholder="20-12345678-9"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default CuilForm;
