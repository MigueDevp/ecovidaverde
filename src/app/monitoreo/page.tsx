import { routes } from "../controller/routes";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Monitoreo() {
    return (
        <div className="bg-gray-100">
            <Navbar routes={routes} />
        
            <Footer></Footer>
        </div>
    );
}
