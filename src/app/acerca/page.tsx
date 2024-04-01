import Navbar from "../components/navbar";
import { routes } from "../controller/routes";
import Footer from "../components/footer";
import Wallpaper from "../components/wallpaper";
import DownWallpaper from "../components/downwallpaper";


export default function AcercaPage() {
    return(
        <div>
            <div className="h-screen w-screen flex justify-center items-center">
            <Navbar routes={routes} />
            <Wallpaper></Wallpaper>


            <DownWallpaper></DownWallpaper>

        </div>
        <Footer></Footer>

        </div>
    );
}