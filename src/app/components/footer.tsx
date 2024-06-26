import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t w-full from-[rgb(110,213,90)] to-[#078212] py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div>
            <h5 className="text-lg font-bold mb-3">
              EcoVidaVerde
            </h5>
            <p>Av. La Palma No. 125, Col. Vista Hermosa</p>
            <p>San Juan del Río, Qro. | C.P. 76800</p>
            <p>Todos los derechos reservados. 2024</p>
          </div>
        </div>

        <div className="mt-6 text-center md:text-left md:mt-0">
          <Link
            href="/pdf/TERMINOS Y CONDICIONES.pdf"
            className="text-sm font-medium hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lee los Términos y Condiciones
          </Link>
        </div>

        <div className="mt-6 text-center md:text-right md:mt-0">
          <p>Desarrollada por Miguel Ángel Ramírez Ramírez</p>
        </div>
      </div>
    </footer>
  );
}
