import React from 'react';
import { motion } from 'framer-motion';
import { PiCubeTransparent } from "react-icons/pi";
import { FaRegCircle } from "react-icons/fa";

export const animationSettings = {
  style: {
    top: 140,
    left: -100,
    zIndex: 20,
    position: "absolute",
  },
  animate: {
    x: [0, 100, 100, 0, 0],
    y: [0, -60, -60, 0, 0],
  },
  transition: {
    duration: 2.5,
    times: [0, 0.25, 0.5, 0.75, 1],
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
  },
};


export default function App() {
  return (
    <>
      <div className='flex justify-between items-center p-4 px-15 m-5'>
        <PiCubeTransparent size={42} className="text-white" />
        <div className='flex items-center gap-6'>
          <ul className='flex gap-4 text-white'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Jobs</a></li>
          </ul>
          <button className='bg-[rgb(0,138,159)] rounded-2xl text-white px-3 py-1.5'>
            GET STARTED
          </button>
        </div>
      </div>


      <motion.div
        {...animationSettings}
        className="flex flex-col items-center space-y-3 w-full"
      >
        <div className="w-28 h-20 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] rounded-lg border border-gray-200"></div>
        <div className="w-28 h-3 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.2)] border-gray-200"></div>
        <div className="w-28 h-3 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.2)] border-gray-200"></div>
        <div className="w-20 h-3 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.2)] border border-gray-200"></div>
      </motion.div>

      <div>
        <div className="flex px-10 py-10 gap-10">
          <div className="flex justify-start relative">
            <div className="absolute -top-15 left-84 bg-amber-100 w-40 h-52 overflow-x-auto rounded-lg shadow-2xl flex flex-col items-center justify-center text-center space-y-3 p-3">

            </div>

            <div className="bg-[#37a0aa] w-80 h-auto rounded-lg p-3 flex flex-col justify-center items-center pb-15 ml-32">
              <div className="w-[90%] h-auto p-13 bg-[#3FC0CB] shadow-lg rounded-lg mt-3"></div>
              <div className="w-[90%] h-auto p-5 bg-[#3FC0CB] shadow-lg rounded-lg mt-3"></div>
              <div className="w-[90%] h-auto p-5 bg-[#3FC0CB] shadow-lg rounded-lg mt-3"></div>
              <div className="w-[90%] h-auto p-5 bg-[#3FC0CB] shadow-lg rounded-lg mt-3"></div>

            </div>
            <div class="relative w-64 h-64 -ml-90 mt-3">

              <div class="absolute left-0 top-0 border-l-2 border-white border-dashed h-[110%]"></div>


              <div class="absolute left-0 top-0 border-t-2 border-white border-dashed w-full"></div>


              <div class="absolute left-0 top-0 flex flex-col items-center space-y-10 mt-1 ml-[-6px] z-10">
                <div class="w-3 h-3 rounded-full bg-white relative -top-2"></div>
                <div class="w-3 h-3 rounded-full bg-white"></div>
                <div class="w-3 h-3 rounded-full bg-white"></div>
                <div class="w-3 h-3 rounded-full bg-white"></div>
                <div class="w-3 h-3 rounded-full bg-white"></div>
              </div>
            </div>

            {/* 2 */}
            <div class="relative w-64 h-64 -ml-40 mt-20 ">

              <div class="absolute left-0 top-0 border-l-2 border-white border-dashed h-[110%]"></div>


              <div class="absolute left-0 top-0 border-t-2 border-white border-dashed w-full"></div>


              <div class="absolute left-0 top-0 flex flex-col items-center space-y-10 mt-1 ml-[-6px] z-10">
                <div class="w-3 h-3 rounded-full bg-white relative -top-2"></div>
                <div class="w-3 h-3 rounded-full bg-white"></div>
                <div class="w-3 h-3 rounded-full bg-white"></div>
                <div class="w-3 h-3 rounded-full bg-white"></div>
                <div class="w-3 h-3 rounded-full bg-white"></div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-12 left-26 bg-[rgb(75,146,153)] w-40 h-42 rounded-lg shadow-2xl flex flex-col items-center justify-center text-center space-y-3 p-3 ">
            <div className="relative w-full h-full">
              <motion.div
                className="absolute"
                style={{ top: 60, left: 20 }}
                animate={{
                  x: [0, -90, -90, 0, 0],
                  y: [0, -110, -110, 0, 0],
                }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <div className="flex">
                  <div className="w-12 h-10 bg-[rgb(46,106,112)] shadow-[0_4px_20px_rgba(0,0,0,0.3)] m-1"></div>
                  <div className="w-12 h-10 bg-[rgb(12,100,100)] shadow-[0_4px_20px_rgba(0,0,0,0.3)] m-1"></div>
                </div>
                <div className="w-28 h-1.5 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.2)] border-gray-200 m-1"></div>
                <div className="w-28 h-1.5 bg-[rgb(143,188,143)] shadow-[0_2px_10px_rgba(0,0,0,0.2)] m-1"></div>
                <div className="w-28 h-1.5 bg-[rgb(46,106,113)] shadow-[0_2px_10px_rgba(0,0,0,0.2)] m-1"></div>
                <div className="w-20 h-1.5 bg-[rgb(12,100,100)] shadow-[0_2px_10px_rgba(0,0,0,0.2)] m-1"></div>
              </motion.div>
            </div>
          </div>



          <div className="flex flex-col justify-center pl-25 -mt-29 ">
            <h1 className="font-bold text-4xl text-white w-[500px] leading-snug font-sans">
              Build visual tracking systems for your customers
            </h1>
            <button className="bg-[rgb(0,138,159)] rounded-2xl text-white px-4 py-2 mt-4 w-fit">
              GET STARTED
            </button>
          </div>

          <motion.div
            className="absolute text-center"
            style={{ bottom: 90, left: 10 }}
            animate={{
              x: [0, 100, 100, 0, 0],
              y: [0, -100, -100, 0, 0],
            }}
            transition={{
              duration: 2.5,
              times: [0, 0.25, 0.5, 0.75, 1],
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <p className='text-slate-400 text-[12px]'>PK194-ABI <br />Tokyo</p>
            <PiCubeTransparent size={32} className="text-white" />
            <FaRegCircle size={62} className="text-[rgb(4,179,199)]" />
          </motion.div>
        </div>

        <div className="absolute inset-0 -z-10 pointer-events-none top-80 left-1/2 ">
          <div className="absolute top-1/2 left-1/2 w-[950px] h-[950px] border border-cyan-400 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] border border-cyan-300 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-cyan-200 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] border border-cyan-400 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] border border-cyan-300 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2 bg-blue-950"></div>
          <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] border border-cyan-300 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2 bg-blue-800"></div>
          <motion.div
            className="absolute top-1/2 left-1/2 w-[100px] h-[100px] border border-cyan-200 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2 bg-blue-950"
            animate={{
              scale: [1, 0.7, 1, 0.7, 1],
            }}
            transition={{
              duration: 2.5,
              times: [0, 0.25, 0.5, 0.75, 1],
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute text-center"
            style={{ bottom: 300, left: 600, rotate: -60 }}
            animate={{
              x: [0, -90, -90, 0, 0],
              y: [0, -110, -110, 0, 0],
            }}
            transition={{
              duration: 2.5,
              times: [0, 0.25, 0.5, 0.75, 1],
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <p className='text-slate-400 text-[12px]'>PK194-ABI <br />Tokyo</p>
            <PiCubeTransparent size={32} className="text-white" />
            <FaRegCircle size={62} className="text-[rgb(4,179,199)]" />
          </motion.div>

        </div>

        <div className="-rotate-15 fixed left-1/3 w-4/5 h-[214px] flex flex-col justify-end -bottom-25 overflow-hidden">
          <div className="bg-[rgb(6,50,50)] w-full h-19"></div>
          <div className="bg-[rgb(9,75,75)] w-full h-25"></div>
          <motion.div
            className="bg-[rgb(6,50,50)] w-full h-29 origin-bottom"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </div>
      </div >
    </>
  );
}
