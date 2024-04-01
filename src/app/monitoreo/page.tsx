import { routes } from "../controller/routes";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Wallpaper from "../components/wallpaper";
import DownWallpaper from "../components/downwallpaper";

export default function Monitoreo() {
  return (
    <div>
      <div className="h-screen w-screen flex justify-center items-center">
        <Navbar routes={routes} />

        <Wallpaper></Wallpaper>

        <div className="mt-0 p-4 text-center shadow-md">
          <div className="text-lg text-gray-800 mb-4">
            Introduce tu número de celular para recibir notificaciones acerca de
            tus plantas y estar siempre al tanto de su cuidado.
          </div>
          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="Introduce tu número de celular"
              className="px-4 py-2 mr-6 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
              Conectar con WhatsApp
            </button>
          </div>
        </div>

        <DownWallpaper></DownWallpaper>
      </div>
      <Footer></Footer>
    </div>
  );
}
