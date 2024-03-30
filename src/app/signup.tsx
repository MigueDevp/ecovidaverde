import { useState } from 'react';
import Image from 'next/image';
import homepage from '@/app/images/homepageimage.jpg';
import Link from 'next/link';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/app/controller/firebase';
import { useRouter } from 'next/router';

export default function SignUp() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const { push } = useRouter();

  const changeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      console.log("Usuario registrado automáticamente");

      push("/");
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-full lg:w-1/2 flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <h2 className="mt-6 text-center text-3xl font-medium tracking-tight text-gray-900">
            ¡Regístrate en EcoVidaVerde!
          </h2>
          <form className="mt-8 space-y-6" onSubmit={registerUser}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Ingresa Correo
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={credentials.email}
                  onChange={changeUser}
                  className="rounded-xl w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-900 focus:border-green-600 focus:z-10 sm:text-sm"
                  placeholder="Correo"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Ingresa Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={credentials.password}
                  onChange={changeUser}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-900 focus:border-green-600 focus:z-10 sm:text-sm"
                  placeholder="Contraseña"
                />
              </div>
            </div>

            <div>
              <button
                onClick={registerUser}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-900"
              >
                Registrarse
              </button>
            </div>
          </form>
          <div className="text-sm text-center mt-4">
            <Link href="/" className="font-medium text-blue-700 hover:text-blue-500">
              ¿Ya tienes una cuenta? Inicia sesión
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 relative">
        <div className="w-full h-full flex justify-center items-center">
          <Image
            src={homepage}
            alt="Sign Up image"
            width={500}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}
