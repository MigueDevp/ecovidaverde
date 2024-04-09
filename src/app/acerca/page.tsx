import Navbar from "../components/navbar";
import { routes } from "../controller/routes";
import Footer from "../components/footer";
import Wallpaper from "../components/wallpaper";
import DownWallpaper from "../components/downwallpaper";

export default function AcercaPage() {
  return (
    <div>
      <div className="flex justify-items-center ml-32 mr-32 mb-96">
        <Navbar routes={routes} />
        <Wallpaper />
        <div className="h-screen w-screen flex flex-col justify-between mt-28">
          <div className="text-center p-10 justify-center">
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-12">
              Sobre Nosotros
            </h1>
            <p className="mb-2 justify-center">
              <strong>EcoVidaVerde</strong> surge como una chispa de innovación
              en la <strong>Universidad Tecnológica de San Juan del Río</strong>
              , Nuestro proyecto es el resultado de combinar pasión por la
              sostenibilidad con la más avanzada tecnología IoT, para
              revolucionar la agricultura sostenible y el cuidado de las
              plantas.
            </p>
          </div>

          <div className="bg-green-200 p-10 rounded-t-xl hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-4">
              <strong>Misión</strong>
            </h2>
            <p className="mb-2">
              Nos dedicamos a la optimización del uso de recursos naturales,
              implementando un sistema de riego automatizado de vanguardia.
              Utilizamos sensores IoT para monitorear en tiempo real el
              bienestar de las plantas, garantizando un manejo eficiente del
              agua y promoviendo un futuro más verde y sustentable.
            </p>
          </div>

          <div className="bg-green-400 p-10 hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-4">
              <strong>Visión</strong>
            </h2>
            <p className="mb-2">
              Aspiramos a ser pioneros en la implementación de soluciones
              tecnológicas avanzadas en el sector agrícola. Nuestro objetivo es
              expandir nuestro impacto más allá de las fronteras, contribuyendo
              al desarrollo de comunidades autosuficientes y en armonía con el
              medio ambiente.
            </p>
          </div>

          <div className="bg-green-600 text-white p-10 hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-4">
              <strong className="text-white">Objetivos</strong>
            </h2>
            <ul className="list-disc list-inside">
              <li>
                <strong>Automatización Avanzada:</strong> Implementar algoritmos
                de aprendizaje automático para predecir las necesidades hídricas
                de las plantas y ajustar el riego automáticamente.
              </li>
              <li>
                <strong>Integración de Datos:</strong> Asegurar que la
                plataforma pueda integrarse con otras bases de datos o sistemas
                para ampliar su funcionalidad.
              </li>
              <li>
                <strong>Seguridad de Datos:</strong> Implementar medidas de
                seguridad robustas para proteger la información recopilada por
                los sensores IoT.
              </li>
              <li>
                <strong>Soporte Técnico:</strong> Ofrecer soporte técnico para
                resolver cualquier problema que surja con el sistema de
                monitoreo.
              </li>
            </ul>
          </div>

          <div className="bg-green-800 text-white p-10 rounded-b-xl  mb-40 hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-4">
              <strong>Equipo</strong>
            </h2>
            <p className="mb-2">
              Liderado por <strong>Miguel Ángel Ramírez Ramírez</strong>, con el
              apoyo de{" "}
              <strong>
                Giovani Alberto Villagrán Valdés, Marto Antonio Nieto Arellano,
                Ángel Guillermo Vanegas Bernal y Carlos Bocanegra Trejo
              </strong>
              .
            </p>
          </div>
        </div>
        <DownWallpaper></DownWallpaper>
      </div>
      <Footer></Footer>
    </div>
  );
}
