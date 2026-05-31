import React from 'react'
import HomeBg from '../assets/HomeBg.mp4'
import Nav from './Nav'
import TopText from './TopText'
import BottomText from './BottomText'


const BgVideo = () => {
  return (
    <div className='p-5 w-full h-175 overflow-hidden  relative flex justify-center items-center'>
      <video className='w-full h-full object-cover rounded-4xl'  autoPlay loop muted src={HomeBg}></video>       
    </div>
  )
}

export default BgVideo
