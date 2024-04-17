"use client";
import { routes } from "../controller/routes";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Wallpaper from "../components/wallpaper";
import DownWallpaper from "../components/downwallpaper";
import { firestore } from "@/app/database/firestore";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import ModalPlanta from "../components/modal";

export default function Monitoreo() {
  const [documents, setDocuments] = useState<any[]>([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "lecturas"));
        const documentsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDocuments(documentsData);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchDocuments();
  }, []);

  const plantas = [
    { nombre: "Planta 1", humedad: "88%", temperatura: "21°C" },
    { nombre: "Planta 2", humedad: "90%", temperatura: "22°C" },
    { nombre: "Planta 3", humedad: "90%", temperatura: "20°C" },
    { nombre: "Planta 4", humedad: "21%", temperatura: "20°C" },
    { nombre: "Planta 5", humedad: "26%", temperatura: "21°C" },
    { nombre: "Planta 6", humedad: "11%", temperatura: "19°C" },
  ];

  return (
    <div>
      <div className="h-screen w-screen flex justify-center items-center">
        <Navbar routes={routes} />

        <Wallpaper></Wallpaper>

        <div className="justify-items-center ml-32 mr-32">
          <div className="text-center mt-8">
            <h1 className="text-6xl font-bold tracking-tight mt-28">
              Monitoreo en Tiempo Real
            </h1>

            <div>
              {/*<h1>Documentos de Firebase:</h1>*/}
              <ul>
                {/*documents.map((doc) => (
          <li key={doc.id}>
            <pre>{JSON.stringify(doc, null, 2)}</pre>
          </li>
        ))*/}
              </ul>
            </div>

            <p className="mt-2 text-lg text-gray-600">
              Datos en tiempo real acerca de tu jardin:
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mx-20 my-9 mt-12">
            {plantas.map((planta, index) => (
              <div
                key={index}
                className="shadow-2xl rounded-xl p-6 border-green-500 hover:scale-110 transition-transform duration-300"
              >
                <h2 className="text-xl font-semibold">{planta.nombre}</h2>
                <p>Humedad: {planta.humedad}</p>
                <p>Temperatura: {planta.temperatura}</p>
              </div>
            ))}
          </div>
        </div>
        <DownWallpaper></DownWallpaper>
      </div>
      <Footer></Footer>
    </div>
  );
}
