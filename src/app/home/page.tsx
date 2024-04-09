import Navbar from "../components/navbar";
import { routes } from "../controller/routes";
import Footer from "../components/footer";
import Wallpaper from "../components/wallpaper";
import DownWallpaper from "../components/downwallpaper";

export default function Home() {
  return (
    <div>
      <Navbar routes={routes} />
      <Wallpaper></Wallpaper>

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center mt-0">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Descubre más acerca de EcoVidaVerde.{" "}
            <a href="/acerca" className="font-semibold text-green-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Leer más <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Bienvenido a EcoVidaVerde
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Descubre el mundo de posibilidades en EcoVidaVerde. El lugar ideal
            para el monitoreo en tiempo real de tus plantas.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/monitoreo"
              className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-gray-100 shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Monitoreo
            </a>
            <a
              href="#Ecovida"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Leer más. <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="py-16 px-8 bg-gray-100">
        <span id="Ecovida"></span>
        <div className="mx-auto max-w-4xl shadow-lg py-20 px-20 mt-0 rounded-xl">
          <h2 className="text-center text-6xl font-bold text-gray-900 mb-14 ">
            ¿Cómo funciona EcoVidaVerde?
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            EcoVidaVerde es una solución de jardinería inteligente que utiliza
            la tecnología IoT para automatizar el riego de tus plantas. Mediante
            sensores de humedad estratégicamente colocados en la base del
            jardín, nuestro sistema monitorea constantemente las necesidades
            hídricas de cada planta.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            La información recogida por los sensores es procesada por una
            Raspberry Pi, que activa el sistema de riego cuando es necesario,
            asegurando que cada planta reciba la cantidad exacta de agua que
            necesita. Además de la humedad, EcoVidaVerde también te permite
            visualizar datos en tiempo real sobre la temperatura ambiental y
            otros parámetros importantes para el cuidado de tus plantas.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Con EcoVidaVerde, puedes estar tranquilo sabiendo que tu jardín está
            siendo cuidado de manera eficiente y sostenible, permitiéndote
            disfrutar de un entorno verde y saludable sin preocupaciones.
          </p>
        </div>

        <div className="mx-auto max-w-4xl shadow-lg py-20 px-20 mt-32 rounded-xl">
          <h2 className="text-center text-6xl font-bold text-gray-900 mb-14 ">
            Funcionalidad del jardin automatizado
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Para la elaboracion de un sistema de riego automatizado utilizando
            ioT (Internet de las cosas). Es necesario contar con las
            herramientas adecuadas para poder realizar diversas funciones
            relacionadas con:
          </p>
          <br />
          <ul className="list-disc list-inside text-gray-600">
            <li>Lectura de datos de humedad en la tierra</li>
            <li>Lectura de datos de temperatura ambiental</li>
            <li>Procesamiento de datos en CPU</li>
            <li>Envío de datos en tiempo real</li>
            <li>Sincronizacion de motores</li>
            <li>Conexiones fisicas y electricidad</li>
            <li>Proceso de riego automatizado</li>
          </ul>

          <p className="mt-6 text-gray-600">Entre otros.</p>
        </div>

        <div className="mx-auto max-w-4xl shadow-lg py-20 px-20 mt-20 rounded-xl">
          <h2 className="text-center text-6xl font-bold text-gray-900 mb-14 ">
            Herramientas empleadas
          </h2>

          <p className="mt-6 text-lg text-gray-600 mb-10">
            Las herramientas para poder llevar a cabo el proyecto{" "}
            <strong>EcoVidaVerde</strong> son cruciales, ya que estas nos
            permiten llevar a cabo los procedimientos correctamente. Llevando a
            cabo una serie de pasos que constituyen el sistema de riego.
          </p>
          <p className="mt-6 text-lg text-gray-600 mb-10">
            Las herramientas utilizadas constan de 2 partes escenciales en el
            desarrollo del proyecto, estas son tanto de Software y de Hardware.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 ">SOFTWARE</h2>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Broker MQTT</li>
            <li>Servidor</li>
            <li>Editor de codigo</li>
            <li>
              Lenguajes de programacion: Python, HTML, Javascript, TypeScript,
              TailwindCSS
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 ">HARDWARE</h2>

          <ul className="list-disc list-inside text-gray-600">
            <li>Base de aluminio para las plantas 100x60 cm aproximádamente</li>
            <li>Cables hembra-macho</li>
            <li>Cables macho-macho</li>
            <li>Pintura en aerosol</li>
            <li>Tubos de metal para movimiento</li>
            <li>Bandas de movimiento</li>
            <li>Poleas</li>
            <li>2 Servomotores</li>
            <li>Arduino uno</li>
            <li>Raspberry Pi</li>
            <li>3 placas protoboard</li>
            <li>6 sensores de húmedad</li>
            <li>Sensor de temperatura</li>
            <li>Módulo ESP32</li>
            <li>6 macetas</li>
            <li>Taladro</li>
            <li>Sierra para cortar</li>
            <li>Placas de madera de 10x10 cm aproximádamente</li>
            <li>2 bombas de agua</li>
            <li>Mangueras</li>
            <li>Base de metal parte de arriba 100x60 cm aproximadamente</li>
          </ul>
        </div>
      </div>

      <DownWallpaper></DownWallpaper>
      <Footer></Footer>
    </div>
  );
}
