
import React, { useEffect, useRef, useState } from "react";
import Logo from "../../public/Logo.svg";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NavComp = () => {
  
  const [ showColor,setshowColor]=useState("toggleHome");
  const toggleActive = "text-white px-4 py-2 border-2 border-transparent rounded-full hover:border-red-950 hover:text-white transition-all duration-300";
  const toggleDisable = "text-gray-400 px-4 py-2 border-2 border-transparent rounded-full hover:border-red-950 hover:text-white transition-all duration-300"


  const navContainer = useRef();
  const nav = useRef();

  useEffect(() => {
    gsap.to(nav.current, {
      y: -35,
      duration: 1,
      scrollTrigger: {
        trigger: navContainer.current,
        start: "top top",
        end: "+=300",
        scrub: 2,
      },
    });
  }, []);

  return (
    <div ref={navContainer}>
      <div
        ref={nav}
        className="text-white backdrop-blur-[84px] bg-white/5 p-5 w-7xl h-15 rounded-full flex justify-between items-center font-[wolf] z-50"
      >
        {/* Logo */}
        <div>
          <Link to="/">
            <img width={40} src={Logo} alt="Logo" />
          </Link>
        </div>

        {/* Navigation */}
        <ul className="flex items-center gap-3 text-gray-400">
          <li
          onClick={()=>{setshowColor("toggleHome")}}
          className={`${showColor==="toggleHome" ? toggleActive : toggleDisable }`}>
            <Link to="/">Home</Link>
          </li>

          <li 
          onClick={()=>{setshowColor("toggleretrofit")}}
          className={`${showColor==="toggleretrofit" ? toggleActive : toggleDisable }`}>
            <Link to="/retrofit">Retrofit Advantage</Link>
          </li>

          <li 
            onClick={()=>{setshowColor("toggleowners")}}
          className={`${showColor==="toggleowners" ? toggleActive : toggleDisable }`}>
            <Link to="/owners">For Building Owners</Link>
          </li>

          <li 
            onClick={()=>{setshowColor("togglecompany")}}
          className={`${showColor==="togglecompany" ? toggleActive : toggleDisable }`}>
            <Link to="/company">Company</Link>
          </li>

          <li 
          onClick={()=>{setshowColor("togglepartners")}}
          className={`${showColor==="togglepartners" ? toggleActive : toggleDisable }`} >
            <Link to="/partners">For Partners</Link>
          </li>

          <li 
          onClick={()=>{setshowColor("toggleinvestors")}}
          className={`${showColor==="toggleinvestors" ? toggleActive : toggleDisable }`}>
            <Link to="/investors">For Investors</Link>
          </li>
        </ul>

        {/* Button */}
        <div>
          <a className="group flex items-center justify-center bg-white text-black rounded-full w-40 h-10 gap-1 cursor-pointer hover:bg-black hover:text-white transition-all duration-500">
            <span>Join The Wishlist</span>

            <span className="opacity-0 -translate-x-3 w-0 overflow-hidden group-hover:opacity-100 group-hover:translate-x-0 group-hover:w-4 transition-all duration-500">
              ➔
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavComp;