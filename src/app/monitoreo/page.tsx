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

        <div className="justify-items-center ml-32 mr-32">
          <div className="text-center mt-8">
            <h1 className="text-6xl font-bold tracking-tight">
              Monitoreo en Tiempo Real
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Monitorea tu jardín y asegura el bienestar de tus plantas
            </p>
          </div>
          <div className="text-center">
            <p>Monitorea en tiempo real el estado de tus plantas de una manera nunca antes vista.</p> 
            <p>Puedes incluso</p>
          </div>
        </div>

        <DownWallpaper></DownWallpaper>
      </div>
      <Footer></Footer>
    </div>
  );
}
