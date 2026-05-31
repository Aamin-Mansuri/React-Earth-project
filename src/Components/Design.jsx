import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Design = () => {
    const divRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(()=>{
      
        const div = divRef.current;
        const title = titleRef.current;

        gsap.timeline({
            scrollTrigger:{
            trigger: div,
            start: "top top",
            end: "+=800",
            scrub: true,
            pin: true,
            },
        })
        .fromTo(
      div,
      {
        backgroundColor: "rgba(0,0,0,0)",
      },
      {
        backgroundColor: "#000",
        duration: 1,
      }
    )
    .fromTo(
      title,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      0
    );
    },[]);

  return (
    <div
    ref={divRef}
    className='h-screen flex items-center justify-center overflow-hidden'>
      <div className='text-center'>
        <h1
        ref={titleRef} className="text-white text-5xl md:text-7xl font-bold leading-tight font-[wolf]">
            Designed for Space
            <br />
            Destined for Earth
        </h1>
      </div>
    </div>
  )
}

export default Design;

