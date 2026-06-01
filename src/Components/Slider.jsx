import React, { useEffect, useRef } from 'react'
import Dschool from '../../public/Dirtyschool.avif'
import School from '../../public/School.avif'
import Kitchen from '../../public/Kitchen.avif'
import Cleank from '../../public/Cleankit.avif'
import Office from '../../public/Office.avif'
import Doffice from '../../public/Dirtyoffice.avif'
import { useState } from 'react'
import ComparisonSlider from './ComparisonSlider'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
   const [showImage,setImage] = useState('img1')
   const activeBtn = 'bg-linear-to-r from-[#003e83] to-cyan-500 p-3 px-18 rounded-4xl';
   const normalBtn = 'bg-[#051d3b] p-3 px-18 rounded-4xl';
   const fadeupBtn = useRef();
   const main = useRef();
  
   useEffect(()=>{  
   gsap.fromTo(fadeupBtn.current,{
    opacity:0,
    y:50,
   },{
    opacity:1,
    y:0,
    scrollTrigger:{
     trigger:main.current,
     markers:true,
     start:"top 75%",
     end:"top 65%",
     scrub:2,
    }
   })
   })

   
  return (
    <div ref={main} className='flex flex-col justify-center items-center'>
    <div ref={fadeupBtn} className="flex gap-2 justify-center items-center text-[20px] text-white pt-7">
            <button onClick={()=>{ setImage('img1')}} className={`transition-all duration-800 ease-linear ${showImage === "img1" ? activeBtn : normalBtn}`}>Quick Service Restaurants</button>
            <button onClick={()=>{ setImage('img2')}} className={`transition-all duration-800 ease-linear ${showImage === "img2" ? activeBtn : normalBtn}`}>Schools and Universities</button>
            <button onClick={()=>{ setImage('img3')}} className={`transition-all duration-800 ease-linear ${showImage === "img3" ? activeBtn : normalBtn}`}>Office Buildings</button>
          </div>
    <div ref={fadeupBtn} className='pt-5'>
        {showImage ==="img1" && ( <div className='rounded-4xl overflow-hidden relative left-50% w-250'>
          <ComparisonSlider beforeImg={Kitchen} afterImg={Cleank}/>
        </div>
        )}
         {showImage ==="img2" && ( <div className='rounded-4xl overflow-hidden relative left-50% w-250'>
          <ComparisonSlider  beforeImg={Dschool} afterImg={School}/>
        </div>
        )}
         {showImage ==="img3" && ( <div className='rounded-4xl overflow-hidden relative left-50% w-250'>
          <ComparisonSlider beforeImg={Doffice} afterImg={Office} />
        </div>
        )}
         
       
    </div>
    </div>
    
  )
}

export default Slider
