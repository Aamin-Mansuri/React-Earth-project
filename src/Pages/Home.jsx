import React from 'react'
import BgVideo from '../Components/BgVideo'
import Nav from '../Components/Nav'
import TopText from '../Components/TopText'
import BottomText from '../Components/BottomText'
import Problem from '../Components/Problem'
import Design from '../Components/Design'
// import ComparisonSlider from '../Components/ComparisonSlider'


const Home = () => {
  return (
  <div>
    <div className='relative flex justify-center w-full items-center'> 
    <Nav/> 
    <BgVideo/>   
    <TopText/> 
    <BottomText/>
    </div>
    <div className='flex flex-col justify-center items-center'>
      <Problem/>
    </div>
    <div>
      <Design />
    </div>
    



   </div>
   
  )
}

export default Home
