import React from "react";
import { fadeIn } from "./variants";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <div className="flex justify-between h-screen mt-40">
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          className=" ml-8 md:ml-32"
        >
          <div className="flex justify-start items-center mt-12">
            <h1 className="text-3xl md:text-6xl max-w-[700px] text-[#0B8892]">
              ¿Sabes qué calidad de agua te llega a casa?
            </h1>
          </div>
          <p className="font-lato max-w-[320px] md:max-w-[600px] mt-4 text-[#34A5AD]">
            En relación con México, un estudio de la Organización de las
            Naciones Unidas (ONU) revela que la calidad del agua se encuentra en
            un estado crítico, ya que ocupa el lugar 106 de una lista de 122
            países que más enfrentan esta problemática. El uso descontrolado del
            recurso y la contaminación por causas diversas se configuran como
            los problemas más sobresalientes y afectan tanto al abastecimiento
            humano como el uso en los medios de producción.
          </p>
          <div className="max-w-[600px]">
            <div className="flex justify-center">
              <p className="mt-8 text-[#0B8892] border-[0.1px] py-1 px-14 rounded-md border-[#0B8892] cursor-pointer">
                Saber más
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          className="hidden md:flex justify-center"
        >
          <img
            className="rounded-3xl max-h-[350px]  xl:max-h-[550px] mr-32 "
            src="https://images.pexels.com/photos/12331565/pexels-photo-12331565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </motion.div>
      </div>


      <div className="flex justify-between h-screen ">
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          className="hidden md:flex justify-center"
        >
          <img
            className="rounded-3xl max-h-[450px]  xl:max-h-[450px] ml-32 "
            src="https://images.unsplash.com/photo-1630730041073-c75e98030355?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          className=" ml-8 md:ml-24"
        >
          <div className="flex justify-start items-center mt-12">
            <h1 className="text-3xl md:text-6xl max-w-[750px] text-[#0B8892]">
              Paisaje Cuenca Baja Grijalva-Usumacinta
            </h1>
          </div>
          <p className="font-lato max-w-[320px] md:max-w-[600px] mt-6 text-[#34A5AD]">
            Se encuentra ubicado en el estado de Tabasco y en menor proporción
            en los estados de Campeche y Chiapas, en el sureste de México. Es un
            paisaje en el cual fluye el 33% del agua dulce del país y es la
            cuenca que posee al río de mayor caudal en México y Centroamérica.
            Es una región que se considera con alto impacto antropogénico,
            especialmente por la pérdida y degradación de los ecosistemas y sus
            servicios ecosistémicos, resultando en una acelerada afectación a
            los medios de vida de las comunidades locales.
          </p>
          <div className="max-w-[600px]">
            <div className="flex justify-center">
              <button className="mt-8 text-[#0B8892] border-[0.1px] py-1 px-14 rounded-md border-[#0B8892]">
                Saber más
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
