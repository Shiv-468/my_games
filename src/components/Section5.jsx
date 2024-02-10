import React from 'react'
import Casino from '../assets/img/Casino-night.webp'
import { Btngreen } from '../common/Icons'
import S6E1 from '../assets/img/S6-ellipse-1.webp'

const Section5 = () => {
  return (
    <section className=' bg-2 bg-[#00141B] bg-[100%] bg-size relative '>
        <img src={S6E1} alt="s6-ellipse-1" className='absolute bottom-[-44%] left-0 z-10 hidden xl:block' />
        <div className="container mx-auto px-3 max-w-[1140px]">
            <div className=" flex flex-wrap -mx-3 pt-[100px] pb-[150px] lg:pt-[304px] lg:pb-[324px] items-center">
                <div className=" w-full md:w-[50%] px-3 z-10">
                    <h2 className='text-[#00141B]  text-[48px] leading-[57.6px] font-Anton font-[400]'>Por qué elegirnos</h2>
                    <p className=' max-w-[526px] font-Inter font-[500] leading-[25.6px] text-[16px] pt-4 pb-6 text-[#00141B] opacity-[80%]'>Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos todo lo invertido en fichas en la moneda que elijas. En Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los juegos interactivos que más pide la gente. Con Exclusive Games empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.</p>
                    <button className="py-[13px] px-[46px] duration-300 relative flex items-center justify-center bg-gradient-to-tl from-[#51C8EF] to-[#7AF57A]  rounded-[41px] hover:bg-gradient-to-br hover:shadow-[0px_4px_30px_-3px#67E0B2] hover:from-[#51C8EF] hover:to-[#7AF57A] font-[700] font-Inter text-[16px] text-[#00141B]"> <span className='absolute -bottom-2 -left-2'>
                     <Btngreen/>
                    </span>Aprende más</button>
                </div>
                <div className=" w-full md:w-[50%] px-3 mt-6">
                    <img src={Casino} alt="casino-night" />
                </div>
            </div>
        </div>
</section>
  )
}

export default Section5