import FormComplaint from '@/components/Atoms/FormComplaint'
import ComplainText from '@/components/ComplainText'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React from 'react'
const complaints = [
    {
      id: 2,
      name: 'María Sánchez',
      href: '#',
      imageSrc: 'https://www.eluniversal.com.mx/resizer/9-4G-Lgj98TVcCY0I9fSHwmzg70=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/EGREVSA735E5TPWFM6VZCJ5JCQ.jpg',
      imageAlt: "complaint",
      priority: '8',
      description: 'Presencia de sustancias químicas en el agua potable',
    },
    {
      id: 3,
      name: 'Carlos Ramírez',
      href: '#',
      imageSrc: 'https://images.milenio.com/USSFLTClVsmryoiup4ZukvA6ME4=/345x237/uploads/media/2020/07/05/conagua-registrado-descargas-aguas-residuales.jpeg',
      imageAlt: "complaint",
      priority: '5',
      description: 'Contaminación por desechos industriales en el río',
    },
    {
      id: 4,
      name: 'Laura Hernández',
      href: '#',
      imageSrc: 'https://imgsnotigram.s3.amazonaws.com/uploads/2022/07/agua-sucia.jpg',
      imageAlt: "complaint",
      priority: '9',
      description: 'Escasez de agua en las viviendas',
    },
    {
      id: 5,
      name: 'Javier López',
      href: '#',
      imageSrc: 'https://www.elsoldemexico.com.mx/metropoli/cdmx/yq3wec-alcaldias-de-la-cdmx-recibiran-menos-agua-por-obras-de-mantenimiento.png/ALTERNATES/LANDSCAPE_768/Alcald%C3%ADas%20de%20la%20CDMX%20recibir%C3%A1n%20menos%20agua%20por%20obras%20de%20mantenimiento.png',
      imageAlt: "complaint",
      priority: '7',
      description: 'Mal olor y sabor del agua potable',
    },
    {
      id: 6,
      name: 'Ana Martínez',
      href: '#',
      imageSrc: 'https://marandua.com.co/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-26-at-6.29.37-AM-1.jpeg',
      imageAlt: "complaint",
      priority: '6',
      description: 'Crecimiento excesivo de algas en el río',
    },
    {
      id: 7,
      name: 'Roberto Castro',
      href: '#',
      imageSrc: 'https://almomento.mx/wp-content/uploads/2022/09/AGUAS-NEGRAS.jpg',
      imageAlt: "complaint",
      priority: '3',
      description: 'Derrame de sustancias tóxicas en el agua',
    },
    {
      id: 8,
      name: 'Lucía Vargas',
      href: '#',
      imageSrc: 'https://us.cdn.eltribuno.com/062018/1530077117036.JPG',
      imageAlt: "complaint",
      priority: '2',
      description: 'Falta de tratamiento de aguas residuales',
    },
    {
      id: 9,
      name: 'Pedro Gómez',
      href: '#',
      imageSrc: 'https://www.prensajuridica.com/media/k2/items/cache/78f9562d9def237e4a6a6ce11f84d10e_XL.jpg',
      imageAlt: "complaint",
      priority: '4',
      description: 'Desperdicio de agua en la zona industrial',
    }
  ]  
  
  export default function Complaint() {
    return (
      <>
      <Head>
        <title>Nikte Ha! | Denuncia</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Navbar/>
      <div className="bg-[#FFFFF6]">
        <ComplainText/>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-5xl font-playfair tracking-tight text-[#0B8892] duration-300">Haz tu denuncia ahora</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {complaints.map((complaint) => (
              <div key={complaint.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={complaint.imageSrc}
                    alt={complaint.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-900 font-lato">
                      <a href={complaint.href}>
                        <span aria-hidden="true" className="absolute inset-0 font-lato" />
                        {complaint.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 font-lato">{complaint.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id='complaint'>
            <FormComplaint/>
          </div>
      </div>
      </>
    )
  }
  