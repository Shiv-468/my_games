import React from 'react'
import Pocker from '../assets/img/pocker.webp'
import Aviator from '../assets/img/aviator.webp'
import S2e from '../assets/img/S2-ellipse1.webp'
import AviatorSvg from '../assets/img/AviatorSvg.webp'
const Section2 = () => {
  return (
<section className=' bg-[#00141B] relative '>
    <img src={S2e} alt="s2-ellipse" className=' absolute z-0 animate-pulse top-[-10%] hidden lg:block' />
    <div className="container mx-auto px-3 max-w-[1140px] ">
        <div className="flex flex-wrap -mx-3 pt-[75px] pb-[50px] md:pb-[100px] z-10 relative "> 
        <div className="w-full md:w-[50%] px-3 z-10 flex flex-col">
            <img src={Pocker} alt="Pocker" />
            <h2 className=' text-white font-Anton font-[400] text-[48px] leading-[57.6px] pt-[60px] pb-4 '>Nuestra Visión</h2>
            <p className=' text-[16px] font-[500] font-Inter text-white leading-[25.6px] max-w-[444px] opacity-[80%] pb-6'>Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>
            <p className=' font-Inter font-[700] text-[16px] leading-[25.6px] text-[#7AF57A] cursor-pointer '>Aprende más 	&rarr;</p>
        </div>
    <img src={AviatorSvg} alt="AviatorSvg" className='absolute top-[31%] left-[35%]  hidden lg:block ' />
        <div className=" w-full md:w-[50%] px-3 z-40 flex flex-col mt-12 md:mt-0">
        <h2 className=' text-white font-Anton font-[400] text-[48px] leading-[57.6px] pb-4 '>Nuestra Visión</h2>
            <p className=' text-[16px] font-[500] font-Inter text-white leading-[25.6px] max-w-[444px] opacity-[80%] pb-6 '>Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>
            <p className=' font-Inter font-[700] text-[16px] leading-[25.6px] text-[#7AF57A] pb-[60px] cursor-pointer '>Aprende más 	&rarr;</p>
        <img src={Aviator} alt="aviator" className=' z-30' />

        </div>
        </div>
    </div>
</section>
    )
}

export default Section2