import React, { useEffect, useRef } from "react";
import SmallVBg from "../assets/SmallVBg.mp4";
import gsap from "gsap";

const BottomText = () => {
  const paraRef = useRef();
  const homeContainer = useRef();
  useEffect(() => {
    gsap.fromTo(
      paraRef.current,
      {
        clipPath: "inset(0 0% 0 0)",
      },
      {
        clipPath: "inset(0 100% 0 0)",
        duration: 8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: homeContainer.current,
          start: "top 20%",
          end: "top 80%",
          scrub: true,
        },
      },
    );gsap.fromTo(paraRef.current, {
        clipPath: "inset(0 100% 0 0)",
      },
      {  
        clipPath: "inset(0 0% 0 0)",     
        duration: 2,
        ease: "power4.out",
      })
  });
  return (
    <div className="absolute bottom-0 left-50% flex items-center justify-center gap-25 ">
      <div
        ref={homeContainer}
        className=" text-white font-[wolf] flex flex-col gap-2 w-full"
      >
        <p
          ref={paraRef}
          className="text-2xl hover:scale-105 transition-all duration-500 overflow-hidden w-full h-30"
        >
          From space to your rooftop. The first retrofit system that gives{" "}
          <br />
          <span className="text-white/60">
            commercial buildings fresher air, lower humidity, and lower energy{" "}
            <br />
            costs without replacing a thing.
          </span>{" "}
          Powered by NASA technology.
        </p>
        <p>© 2026 Helix Earth™</p>
      </div>
      <button className="relative w-120 h-50 overflow-hidden border-5 border-black/90 rounded-3xl mb-20 ">
        <video
          className="w-full h-full object-cover "
          autoPlay
          loop
          muted
          src={SmallVBg}
        ></video>
        <div className=" absolute  top-0 left-0 w-full h-full overflow-hidden flex justify-center items-center opacity-0 hover:opacity-100 bg-white/90 duration-500 ease-in " >
          <p class="font-semibold font-[wolf] text-black   ">Learn how it works</p>
        </div>
        <span className="absolute -bottom-2 -right-5 font-[wolf] text-16 text-white bg-black rounded-2xl p-3 pr-7 group-hover:translate-x-7 ">
          Helix MICRA™
        </span>
      </button>
    </div>
  );
};

export default BottomText;
