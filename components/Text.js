import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

export default function Text() {
  return (
    <div className="flex justify-between h-screen mt-40">
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView={"show"}
        className=" ml-8 md:ml-32"
      >
        <div className="flex justify-start items-center mt-12">
          <h1 className="text-3xl md:text-7xl text-[#0B8892]">Nikté Ha</h1>
          <img className="h-10 md:h-16 ml-4 md:ml-12" src="/icon.png" />
        </div>
        <p className="font-lato max-w-[320px] md:max-w-[600px] mt-4 text-[#34A5AD]">
          La leyenda de Nicté-Ha es una narración que explica el origen mítico
          de una planta acuática de hojas flotantes y bellas flores blancas de
          delicado perfume, llamada Nicté-Ha, flor de agua (del maya nikte’,
          conocida en español como “sol de agua” o ninfa (Nimphaea
          ampla-Salisbury); y justifica la razón por la cual los cardenales
          cantan todas las mañanas al pie de los lagos y cenotes donde crecen
          esas flores.
        </p>
        <div className="max-w-[600px]">
          <div className="flex justify-center">
            <button className="mt-8 text-[#0B8892] border-[0.1px] py-1 px-14 rounded-md border-[#0B8892]">
              Saber más
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        className="hidden md:flex justify-around"
      >
        <img
          className="rounded-3xl rounded-tl-[8rem] hidden xl:block xl:max-h-[350px] mr-14 mt-60"
          src="https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <img
          className="rounded-3xl rounded-tl-[12rem] max-h-[350px]  xl:max-h-[550px] mr-12 mt-10"
          src="https://images.pexels.com/photos/10570707/pexels-photo-10570707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </motion.div>
    </div>
  );
}
