import { routes } from "../controller/routes";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function VidaVerde () {
    return (
        <div>
            <Navbar routes={routes} />


            <Footer></Footer>
        </div>
    );
}