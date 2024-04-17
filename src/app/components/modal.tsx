import React from 'react';

interface Planta {
  nombre: string;
  humedad: string;
  temperatura: string;
}

interface ModalPlantaProps {
  planta: Planta;
  cerrarModal: () => void;
}

const ModalPlanta: React.FC<ModalPlantaProps> = ({ planta, cerrarModal }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
        <div className="flex justify-end">
          <button onClick={cerrarModal} className="text-red-500 text-2xl">×</button>
        </div>
        <h2 className="text-2xl font-semibold mb-4">{planta.nombre}</h2>
        <p className="mb-2">Humedad: {planta.humedad}</p>
        <p>Temperatura: {planta.temperatura}</p>
      </div>
    </div>
  );

}

export default ModalPlanta;