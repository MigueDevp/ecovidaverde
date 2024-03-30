import Navbar from "../components/navbar";
import { routes } from "../controller/routes";
import Footer from "../components/footer";


const navigation = [
    { name: 'Inicio', href: '/home' },
    { name: 'Monitoreo', href: '#' },
    { name: 'Vida Verde', href: '#' },
    { name: 'Acerca', href: '#' },
  ]

export default function Acerca() {
    return(
        <div className="bg-white">
            <Navbar routes={routes} />


            <Footer></Footer>
        </div>
    );
}