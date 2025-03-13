"use client"

import CuilForm from "@/components/CuilForm";

function DashboardPage() {
  const handleCuilSubmit = (cuil: string) => {
    alert(`CUIL ingresado: ${cuil}`);
    // Aquí podrías enviarlo a una API o guardarlo en el estado global
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-6">Panel Principal</h1>
      <CuilForm onSubmit={handleCuilSubmit} />
    </div>
  );
}

export default DashboardPage;