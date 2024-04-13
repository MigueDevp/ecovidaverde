"use client";
import { useState } from "react";
import Image from "next/image";
import homepage from "@/app/images/homepageV3.jpg";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./database/firebase";
import { useRouter } from "next/navigation";

export default function LoginHome() {




  const [errorMessage, setErrorMessage] = useState("");
  const { push } = useRouter();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const changeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const [loginSuccess, setLoginSuccess] = useState(false);

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      setLoginSuccess(true);
      push("/home");
    } catch (error) {
      console.log("El error es: " + error);

      if (
        error == "FirebaseError: Firebase: Error (auth/invalid-credential)."
      ) {
        setErrorMessage("Contraseña incorrecta");
      }

      if (
        error ==
        "FirebaseError: Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
      ) {
        setErrorMessage(
          "Has ingresado demasiados intentos. El acceso a tu cuenta ha sido temporalmente deshablitado. Por favor ponte en contacto con el administrador para recuperarlo.  "
        );
      } else {
        console.log(error);
      }
    }
  };

  const handleTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAccepted(e.target.checked);
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-full lg:w-1/2 flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <h2 className="mt-6 text-center text-3xl font-medium tracking-tight text-gray-900">
            ¡Bienvenido a EcoVidaVerde!
          </h2>
          <form className="mt-8 space-y-6" onSubmit={loginUser}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-400 ml-2 mb-2"
                >
                  Ingresa tu correo
                </label>

                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={credentials.email}
                  required
                  onChange={changeUser}
                  className=" rounded-xl  mb-2 w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900   focus:ring-green-900 focus:border-green-600 focus:z-10 sm:text-sm"
                  placeholder="Correo"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-400 ml-2 mb-2 mt-3"
                >
                  Ingresa tu contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={credentials.password}
                  onChange={changeUser}
                  required
                  className=" rounded-xl w-full px-3 mb-4 py-2 border border-gray-400 placeholder-gray-500 text-gray-900   focus:ring-green-900 focus:border-green-600 focus:z-10 sm:text-sm"
                  placeholder="Contraseña"
                />
              </div>

              {errorMessage && (
                <div className="text-red-500 ml-2 mb-2 text-xs">
                  {errorMessage}
                </div>
              )}
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <input
                  id="terms-and-conditions"
                  name="terms-and-conditions"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  onChange={handleTermsChange}
                />
                <label
                  htmlFor="terms-and-conditions"
                  className="ml-2 block text-sm text-blue-700 hover:text-blue-500"
                >
                  <a
                    href="/pdf/TERMINOS Y CONDICIONES.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Acepto los términos y condiciones
                  </a>
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={!termsAccepted}
                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-xl text-white ${
                  termsAccepted
                    ? "bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-900"
                    : "bg-green-600 cursor-not-allowed"
                }`}
              >
                Continuar
              </button>
            </div>
          </form>
          <div className="text-sm text-center text-blue-700  hover:text-blue-500 mt-4">
            <Link href="/signup">¿No tienes cuenta aún? ¡Regístrate!</Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image src={homepage} alt="Start image" layout="fill" />
      </div>
    </div>
  );
}
