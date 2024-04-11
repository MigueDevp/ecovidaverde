import Image from "next/image";
import homepage from "@/app/images/hoja.png";

interface NavigationItem {
  name: string;
  href: string;
}

interface NavbarProps {
  routes: Record<string, string>;
}

export default function Navbar({ routes }: NavbarProps) {
  const navigation = [
    { name: "Inicio", href: routes.home },
    { name: "Monitoreo", href: routes.monitoreo },
    { name: "Acerca", href: routes.acerca },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-end justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 items-center">
          <a href="/home" className="-m-1.5 p-1.5">
            <div className="h-8 w-8">
              <Image src={homepage} alt="iconPage" width={42} height={42} />
            </div>
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 mb-0">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base font-semibold leading-6 text-gray-900 hover:text-green-600"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/"
            className="text-base font-semibold leading-6 text-gray-900"
          >
            Salir <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
