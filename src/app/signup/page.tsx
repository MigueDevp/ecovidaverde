"use client";
import { useState } from "react";
import Image from "next/image";
import homepage from "@/app/images/homepageimage.jpg";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/database/firebase";

export default function SignUp() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const changeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      setRegistrationSuccess(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      console.log(error);

      if (
        error == "FirebaseError: Firebase: Error (auth/email-already-in-use)."
      ) {
        setErrorMessage("El correo que ingresaste ya se encuentra registrado.");
      }
      if (
        error ==
        "FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password)."
      ) {
        setErrorMessage(
          "La contraseña debe contener por lo menos 6 carácteres"
        );
      }
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-full lg:w-1/2 flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong>Error:</strong> {error}
            </div>
          )}
          {registrationSuccess && (
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong>Registro exitoso!</strong> Serás redirigido a la página de
              inicio de sesión en breve.
            </div>
          )}
          {!registrationSuccess && (
            <>
              <h2 className="mt-6 mb-0 text-center text-3xl font-medium tracking-tight text-gray-900">
                ¡Regístrate en EcoVidaVerde!
              </h2>

              <form className="mt-8 space-y-6" onSubmit={registerUser}>
                <div className="rounded-md shadow-sm space-y-4">
                  <div>
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-400 mb-2 ml-2"
                    >
                      Ingresa tu correo
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={credentials.email}
                      onChange={changeUser}
                      className="w-full px-3 py-2 border mb-3 border-gray-300 rounded-xl placeholder-gray-500 text-gray-900  focus:ring-green-900 focus:border-green-600 sm:text-sm"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-400 mb-2 ml-2"
                    >
                      Ingresa tu contraseña
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={credentials.password}
                      onChange={changeUser}
                      className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-xl placeholder-gray-500 text-gray-900  focus:ring-green-900 focus:border-green-600 sm:text-sm"
                      placeholder="Ingresa 6 carácteres como mínimo"
                    />
                  </div>
                </div>
                {errorMessage && (
                  <div className="text-red-500 ml-2 mb-2 text-xs">
                    {errorMessage}
                  </div>
                )}
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-900"
                  >
                    Regístrarse
                  </button>
                </div>
              </form>
              <div className="text-sm text-center mt-4">
                <Link
                  href="/"
                  className="font-medium text-blue-700 hover:text-blue-500"
                >
                  ¿Ya tienes una cuenta? Inicia sesión
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 relative">
        <div className="w-full h-full">
          <Image
            src={homepage}
            alt="Sign Up image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
