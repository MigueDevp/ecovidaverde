"use client";
import { useState } from "react";
import Navbar from "../components/navbar";
import { routes } from "../controller/routes";
import Footer from "../components/footer";
import Wallpaper from "../components/wallpaper";
import DownWallpaper from "../components/downwallpaper";

const navigation = [
  { name: "Inicio", href: "/home" },
  { name: "Monitoreo", href: "#" },
  { name: "Vida Verde", href: "#" },
  { name: "Acerca", href: "/acerca" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <Navbar routes={routes} />
      <Wallpaper></Wallpaper>

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center mt-0">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Descubre más acerca del cuidado de las plantas.{" "}
            <a href="/vidaverde" className="font-semibold text-green-600">
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
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Leer más. <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <DownWallpaper></DownWallpaper>
      <Footer></Footer>
    </div>
  );
}
