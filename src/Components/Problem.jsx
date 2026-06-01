import React, { useEffect, useRef } from "react";
import Slider from "./Slider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Problem = () => {
  const theProblem = useRef();
  const problemContainer = useRef();
  const hundred = useRef();
  const hundredpara = useRef();
  const disagree = useRef();
  


  useEffect(() => {
    gsap.fromTo(
      theProblem.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: problemContainer.current,
          // markers: true,
          start: "top 75%",
          end: "top 70%",
          scrub: 2,
        },
      },
    );
    gsap.fromTo(
      hundred.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: theProblem.current,
          // markers: true,
          start: "top 90%",
          end: "top 85%",
          scrub: 2,
        },
      },
    );
    gsap.fromTo(
      hundredpara.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: hundred.current,
          // markers: true,
          start: "top 75%",
          end: "top 70%",
          scrub: 2,
        },
      },
    );
    gsap.fromTo(
      disagree.current,
      {
        clipPath: "inset(0 100% 0 0)",
        
        
      },
      {
        clipPath: "inset(0 0% 0 0)",
      
        ease: "power4.out",
        scrollTrigger: {
          trigger: hundredpara.current,
          start: "top 50%",
          end: "top 45%",
          // markers:true,
          scrub: true,
        },
      },
    )



  });

  return (
    <div
      ref={problemContainer}
      className="flex flex-col gap-4 justify-center items-center pt-25"
    >
      <button
        ref={theProblem}
        className="bg-linear-to-l from-[#ff6900] to-[#f0b100] p-1 pl-3.5 pr-3.5 rounded-4xl"
      >
        The problem
      </button>
      <h1
        ref={hundred}
        className="text-7xl text-center text-white leading-20 font-[wolf]"
      >
        A{" "}
        <span className="text-[#ff6900]">
          100-Year-Old <br />
          Problem{" "}
        </span>{" "}
        Nobody Fixed
      </h1>
      <p ref={hundredpara} className="text-center font-[wolf] text-[#fcfcfc]/80 text-[18px]">
        For over 100 years, air conditioning has done two jobs at once: cooling
        the air and removing moisture. <br /> That combination is the problem.
        In humid climates,
        <span className="text-white font-semibold">
          removing moisture consumes up to 80% of your <br /> AC’s energy.
        </span>
        Compressors work overtime. Equipment wears out faster. Utility bills
        climb. Mold takesv
        <br /> hold. And comfort is still terrible. The industry's answer has
        always been, "That's just how it works."
      </p>
      <h1 ref={disagree} className="pt-2 bg-clip-text text-clip text-transparent bg-linear-to-r from-cyan-500 to-[#003e83] text-2xl font-bold font-[wolf] text-center">
        We disagree.
      </h1>
      <div className="flex flex-col justify-center items-center">
        <Slider />
        
      </div>
    </div>
  );
};

export default Problem;
