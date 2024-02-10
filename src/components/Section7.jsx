import React from 'react'
import Giros from '../assets/img/grioswebp.webp'
import Todos from '../assets/img/todos.webp'
import Easin from '../assets/img/easin.webp'
import { Btnwhite, Icons } from '../common/Icons'
const Section7 = () => {
    return (
        <section className='bg-[#00141B] relative'>
            <div className="container mx-auto px-3 max-w-[1140px]">
                <h2 className='text-white text-[32px] md:text-[48px] leading-[57.6px] font-Anton font-[400] pb-[60px] text-center pt-[70px] md:pt-[150px]'>Ellos eligieron apostar con nosotros</h2>
                <div className="flex flex-wrap -mx-3 justify-center">

                    <div className=" w-full sm:w-[50%] lg:w-[33.33%] px-3 group flex justify-center md:justify-start z-10">
                        <div className="relative flex overflow-hidden max-w-[365px] h-[256px] w-full ">
                            <img src={Giros} alt="giros" />
                            <div className="absolute max-w-[364px] w-full h-[256px] left-[-100%] duration-500 group-hover:left-0 flex items-center justify-center bg-black bg-opacity-[72%] rounded-[8px]">
                                <button className="py-[13px] font-[700] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] duration-300"> <span className='absolute -bottom-2 -left-2'>
                        <Btnwhite/>
                        </span>Rcasinovip</button>
                                
                            </div>
                        </div>
                    </div>
                    <div className=" w-full sm:w-[50%] lg:w-[33.33%] px-3 group flex justify-center md:justify-start mt-6 sm:mt-0">
                        <div className="relative flex overflow-hidden max-w-[365px] h-[256px] w-full ">
                            <img src={Todos} alt="todos" className='rounded-[8px]' />
                            <div className="absolute max-w-[364px] w-full h-[256px] left-[-100%] duration-500 group-hover:left-0 flex items-center justify-center bg-black bg-opacity-[72%] rounded-[8px]">
                            <button className="py-[13px] font-[700] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] duration-300"> <span className='absolute -bottom-2 -left-2'>
                            <Btnwhite/>
                        </span>Rcasinovip</button>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full sm:w-[50%] lg:w-[33.33%] px-3 group flex justify-center md:justify-start mt-6 lg:mt-0">
                        <div className="relative flex overflow-hidden max-w-[365px] h-[256px] w-full ">
                            <img src={Easin} alt="easin" className=' h-full w-full' />
                            <div className="absolute max-w-[364px] w-full h-[256px] left-[-100%] duration-500 group-hover:left-0 flex items-center justify-center bg-black bg-opacity-[72%] rounded-[8px]">
                            <button className="py-[13px] font-[700] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] duration-300"> <span className='absolute -bottom-2 -left-2'>
                            <Btnwhite/>
                        </span>Rcasinovip</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <p className='font-Inter font-[500] leading-[25.6px] text-[16px] pt-[38px] text-white opacity-[80%] pb-[30px] md:pb-[75px] text-center max-w-[883px]'>Clientes satisfechos que confiaron en Exclusive Games y han disfrutado de emocionantes experiencias de juego.
                        <span className='block'>Ahora, la próxima apuesta está en tus manos.</span>
                        Elige ganar. Elige exclusive game.</p>
                        
                </div>
            </div>
        </section>
    )
}

export default Section7