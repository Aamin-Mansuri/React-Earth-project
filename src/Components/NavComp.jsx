import React, { useEffect, useRef, useState } from "react";
import Logo from "../../public/Logo.svg";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const NavComp = () => {
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
  });

  return (
    <div ref={navContainer}>
      <div
        ref={nav}
        className="text-white backdrop-blur-[84px] bg-white/5 p-5 w-319 h-15 rounded-4xl flex justify-between items-center font-[wolf] z-99"
      >
        <div>
          <img width={40} src={Logo} alt="Logo" />
        </div>

        <ul className="flex gap-8 text-gray-400">
          <li className="text-white">
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/retrofit">Retrofit Advantage</Link>
          </li>

          <li>
            <Link to="/owners">For Building Owners</Link>
          </li>

          <li>
            <Link to="/company">Company</Link>
          </li>

          <li>
            <Link to="/partners">For Partners</Link>
          </li>

          <li>
            <Link to="/investors">For Investors</Link>
          </li>
        </ul>

        <div>
          <a className="group flex items-center justify-center bg-white text-black rounded-4xl w-40 h-10 gap-1 hover:bg-black hover:text-white transition-all duration-800">
            <span>Join The Wishlist </span>
            <span className=" opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 group-ease-linear transition-all duration-800 w-0 group-hover:w-2.5">
              ➔
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavComp;
