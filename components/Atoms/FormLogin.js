import Link from "next/link";
import React from "react";

export default function FormLogin() {
  return (
    <>
      <div className="flex min-h-full justify-center px-4 items-center sm:px-6 lg:px-8 bg-[#FCFCFC] ">
        <div className="w-full max-w-md">
          <div className="flex flex-col justify-center items-center space-y-6">
            <img className="w-12" src="/icon.png" alt="" />
            <h1 className="mx-auto h-12 w-auto text-5xl flex justify-center text-[#60CBD3] font-playfair mb-12">
              Nikté Ha
            </h1>
          </div>
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm">
              <div>
                <label
                  className="text-[#B7B7B7] font-lato text-md"
                  htmlFor="user"
                >
                  Usuario:
                </label>
                <input
                  id="user"
                  type="text"
                  required
                  autoComplete="off"
                  className="relative w-full rounded-sm py-1 text-gray-500 border-[0.1px] border-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6 font-lato pl-2"
                  placeholder="Ej: Rutilio"
                />
              </div>
              <div className="mt-8">
                <label className="text-[#B7B7B7] font-lato" htmlFor="password">
                  Contraseña:
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="off"
                  required
                  className="relative block w-full rounded-sm py-1 text-gray-500 border-[0.1px] border-gray-400 placeholder:text-gray-400  sm:text-sm sm:leading-6 font-lato pl-2"
                  placeholder="●●●●●●●●"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-6">
                <div className="flex items-center mb-4">
                  <input
                    id="checkbox"
                    className="border-[#B7B7B7] mr-2"
                    type="checkbox"
                  />
                  <label
                    htmlFor="checkbox"
                    className="text-sm font-lato text-[#B7B7B7] "
                  >
                    Recordarme por 30 días
                  </label>
                </div>
                <div>
                  <p className="font-lato text-sm text-[#60CBD3] cursor-pointer hover:text-[#34A5AD] duration-300 ">
                    ¿Olvidaste tú contraseña?
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-sm bg-[#60CBD3] px-3 py-2 text-sm font-light text-white hover:bg-[#34A5AD] transition duration-300 font-lato mb-4 hover:scale-105"
              >
                Ingresar
              </button>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-sm bg-white px-3 py-2 text-sm font-light text-[#444444]  transition duration-300 font-lato border-[0.1px] mb-4 border-gray-400 hover:scale-105"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* <LockClosedIcon className="h-5 w-5 text-orange-500 group-hover:text-orange-400" aria-hidden="true" /> */}
                  <img className="h-5 w-5" src="/google.png" alt="" />
                </span>
                Ingresar con Google
              </button>
              <div className="flex justify-center">
                <div className="flex items-center mb-4 text-sm ">
                  <label
                    htmlFor="checkbox"
                    className="font-lato text-[#B7B7B7] "
                  >
                    ¿No tienes una cuenta?
                  </label>
                  <Link href="/register">
                    <span className="text-[#60CBD3] font-lato ml-2 cursor-pointer hover:text-[#34A5AD] duration-300 ">Registrarse</span>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
