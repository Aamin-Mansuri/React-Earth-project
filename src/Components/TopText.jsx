import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const TopText = () => {
  const tittleRef = useRef();
   
  useEffect(()=>{
    gsap.from(tittleRef.current,{
    opacity: 0,
    y: 40,
    duration: 0.5,
  }),
  gsap.to(tittleRef.current,{
    opacity: 1,
    y: 0,
    duration: 0.5,
  })
  })
 
  return ( 
    <div ref={tittleRef} className="absolute h-50 top-35 flex justify-center place-items-center pl-1.5">
      <h1 className="text-[215px] font-[wolf] font-semibold text-white/80 mt-15 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] hover:text-white transition-all duration-300">
        Helix Earth
      </h1>
      <h1 className="text-white font-[wolf] font-semibold text-2xl mr-0.5">TM</h1>
      <div className="text-white font-[wolf] font-bold  flex flex-col gap-2.5">
        <p>
          Advanced Humidity Control
        </p>
        <p>
          Code-Ready Ventilation
        </p>
        <p>
          Drier Air, Healthier Spaces
        </p>
        <p>
          Drop-in Solution
        </p>
        <p>
          Lower HVAC Energy Use
        </p>
      </div>
    </div>
  );
};

export default TopText;
