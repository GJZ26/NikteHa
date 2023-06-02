import React from 'react'

export default function FormComplaint() {
  return (
    <form>
      <div className="space-y-12 bg-white w-full h-screen font-lato pt-32 flex justify-center">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900 text-center">Denuncia</h2>
          <p className="mt-1 text-center text-sm leading-6 text-gray-400">
            Ésta información será publicada, ten cuidado con lo que compartes
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div>
              <label htmlFor="problem" className=" text-sm font-medium leading-6 text-gray-900">
                Problema
              </label>
              <div className="mt-2">
                <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 ">
                  <input
                    type="text"
                    name="problem"
                    id="problem"
                    className=" border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="Ej. Malos olores"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Descripción
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-500">Describe el problema a detalle para mayor información.</p>
            </div>


            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Foto del problema
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                   <img src='upload.png' className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-[#60CBD3] "
                    >
                      <span>Subir archivo</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">Selecciona o arrastra</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF 10MB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-[#60CBD3] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#54b5bc] "
        >
          Save
        </button>
      </div>
        </div>
      </div>

     
    </form>
  )
}

