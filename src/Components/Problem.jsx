import React from "react";
import Slider from "./Slider";
// import ComparisonSlider from "./ComparisonSlider";

const Problem = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center pt-35">
      <button className="bg-linear-to-l from-[#ff6900] to-[#f0b100] p-1 pl-3.5 pr-3.5 rounded-4xl">
        The problem
      </button>
      <h1 className="text-7xl text-center text-white leading-20 font-[wolf]">
        A <span className="text-[#ff6900]">100-Year-Old <br />Problem </span> Nobody Fixed
      </h1>
      <p className="text-center font-[wolf] text-[#fcfcfc]/80 text-[18px]">
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
      <h1 className="pt-2 bg-clip-text text-clip text-transparent bg-linear-to-r from-cyan-500 to-[#003e83] text-2xl font-bold font-[wolf] text-center">
        We disagree.
      </h1>
      <div className="flex flex-col justify-center items-center">
        <Slider/>
        {/* <ComparisonSlider/> */}
      </div>
    </div>
  );
};

export default Problem;
