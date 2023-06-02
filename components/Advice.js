import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

export default function Advice() {
  return (
    <>
      <div className="flex flex-col  h-screen mt-40">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
        >
          <div className="flex flex-col justify-center items-center mt-2">
            <h1 className="text-3xl md:text-6xl max-w-[700px] text-[#0B8892]">
              Cuidemos el agua
            </h1>
            <p className="font-lato max-w-[320px] md:max-w-[600px] mt-4 text-[#34A5AD] text-center">
              El agua es vital para el ser humano y cada vez más escasa por
              factores de contaminación, crecimiento urbano desordenado, e
              incluso las invasiones y tomas clandestinas perjudican el
              abastecimiento a la población de Chiapas, que demanda en mayor
              medida el servicio.
            </p>
            <div className="">
              <ul className="flex justify-between space-x-16 font-extralight font-lato mt-6 text-lg text-[#0B8892]">
                <li>Chiflon</li>
                <li>Montebello</li>
                <li>Agua Azul</li>
                <li>Arcotete</li>
                <li>Cañón del Sumidero</li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          className="mx-32 mt-12"
        >
          <div className="grid grid-cols-10 gap-4 mb-32 ">
            <div className="col-span-6">
                    <img className="rounded-3xl h-[400px] w-[800px]" src="https://images.unsplash.com/photo-1678131913051-6dc29dbffd5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"/></div>
            <div className="col-span-4 ">
                <img className="rounded-3xl h-[400px] w-[400px]" src="https://images.unsplash.com/photo-1630465703173-3eca49dbeaea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"/> </div>
            <div className="col-span-4">
                <img className="rounded-3xl h-[400px] w-[450px]"  src="https://images.unsplash.com/photo-1580142656337-ae0028dce93e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"/> </div>
            <div className="col-span-6">
                <img className="rounded-3xl h-[400px] w-[700px]"  src="https://images.unsplash.com/photo-1599610190481-57d91b849388?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80"/> </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
