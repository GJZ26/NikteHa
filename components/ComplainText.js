import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import {Link} from 'react-scroll' 

export default function ComplainText() {
  return (
    <div className="flex justify-center flex-col h-screen">
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
      >
        <div className="flex flex-col justify-center items-center ">
        <img className="h-10 md:h-20 " src="/icon.png" />
          <h1 className="text-3xl md:text-7xl text-[#0B8892]">
            Tu opinión es importante
          </h1>
          <p className="text-center font-lato max-w-[320px] md:max-w-[600px] mt-4 text-[#34A5AD]">
          La opinión de la denuncia permite que los problemas relacionados con
          la calidad del agua en las viviendas y las anomalías en los ríos
          chiapanecos sean conocidos por todos. Al hacerlo, se genera una
          conciencia colectiva en torno a estos asuntos, fomentando así un mayor
          compromiso por parte de la comunidad y de las instituciones
          responsables.
        </p>
        <div className="max-w-[600px]">
          <div className="flex justify-center">
           <Link
           to="complaint"
           smooth={true}
           >
           <button className="mt-8 text-[#0B8892] border-[0.1px] py-1 px-14 rounded-md border-[#0B8892] hover:scale-105 duration-300">
              Denunciar ahora
            </button>
           </Link>
          </div>
        </div>
        <hr className="text-center border-[0.01px] border-[#34A5AD] mt-24 w-[550px]"></hr>
        </div>
      </motion.div>
    </div>
  );
}
