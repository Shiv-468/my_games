import React from 'react'
import Jackpot from '../assets/img/jackpot.webp'
import Left from '../assets/img/box-svg-left.webp'
import Right from '../assets/img/box-svg-right.webp'
import Ezugi from '../assets/img/Ezugi.webp'
import Roulette from '../assets/img/Roulette.webp'
import Betting from '../assets/img/Betting.webp'
import S4e from '../assets/img/S4-ellipse.webp'
import { Btnwhite, GreenTick } from '../common/Icons'
const Section4 = () => {
    return (
        <section className='bg-3 bg-cover bg-[#00141B] bg-size relative'>
            <img src={S4e} alt="S4-ellipse" className='absolute bottom-[-20%] z-0 right-0 hidden lg:block' />
            <div className="container max-w-[1140px] mx-auto px-3  ">
                <div className="flex flex-wrap -mx-3 pt-[60px] sm:pt-[90px] pb-[60px] md:pb-[150px] z-20 ">
                    <div className=" w-full md:w-[50%] px-3">
                        <img src={Jackpot} alt="jackpot" />
                    </div>
                    <div className=" w-full md:w-[50%] px-3 mt-6 md:mt-0">
                        <h2 className='text-white text-[42px] sm:text-[48px] leading-[57.6px] font-Anton font-[400]'>Potenciando sus elecciones</h2>
                        <p className='font-Inter font-[500] leading-[25.6px] text-[16px] pt-4 text-white opacity-[80%] pb-6'>Con Exclusive Game lo mejor está de tu lado.</p>
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-2'>
                            <GreenTick/>
                                <p className='font-Inter font-[500] leading-[25.6px] text-[16px] text-white opacity-[80%]'>Tecnología HTML5</p></div>
                                <div className='flex gap-2'>
                                <GreenTick/>
                                <p className='font-Inter font-[500] leading-[25.6px] text-[16px] text-white opacity-[80%]'>Versión PC y móvil</p></div>
                                <div className='flex gap-2'>
                                <GreenTick/>
                                <p className='font-Inter font-[500] leading-[25.6px] text-[16px] text-white opacity-[80%]'>Control de RTP (controlás qué porcentaje pagar)</p></div>
                                <div className='flex gap-2'>
                                <GreenTick/>
                                <p className='font-Inter max-w-[380px] font-[500] leading-[25.6px] text-[16px] text-white opacity-[80%]'>Bonos editables, happy hours, Jackpots, códigos  promocionales.</p></div>
                                <div className='flex gap-2'>
                            <GreenTick/>
                                <p className='font-Inter font-[500] leading-[25.6px] text-[16px] text-white opacity-[80%]'>Aplicación para android y windows de regalo.</p></div>
                        </div>
                        <p className='text-white font-Inter font-[500] text-[16px] leading-[25.6px] opacity-[80%] pt-6 '>Te reintegramos todo lo invertido en fichas en la moneda que elijas.</p>
                    </div>
                </div>
                <div className="border-[0.5px] bg-[#04151B] rounded-[16px] flex items-center justify-center py-[40px] sm:py-[96px] max-w-[1043px] mx-auto border-solid border-white relative z-0">
                    <img src={Left} alt="left-svg" className=' absolute left-0  opacity-[30%] z-0 ' />
                    <img src={Right} alt="right-svg" className=' absolute right-0  opacity-[30%] z-0 ' />
                    <h2 className='text-white text-[30px] sm:text-[48px] z-10 leading-[45px] sm:leading-[57.6px] font-Anton font-[400] max-w-[520px] text-center'>lanza tu propia plataforma en sólo 2 semanas</h2>
                </div>
                <h2 className='text-white text-[48px] z-10 leading-[57.6px] font-Anton font-[400] pt-[75px] md:pt-[150px] pb-[60px] text-center'>Juegos en vivo</h2>
                <div className="flex flex-wrap -mx-3 pb-[40px] md:pb-[100px] justify-center">
                    <div className="w-full sm:w-[50%] md:w-[33.33%] px-3 group flex items-center justify-center">
                    <div className="relative flex overflow-hidden max-w-[365px] h-[256px] w-full ">
                            <img src={Ezugi} alt="Ezugi" />
                            <div className="absolute max-w-[364px] w-full h-[256px] left-[-100%] duration-500 group-hover:left-0 flex items-center justify-center bg-black bg-opacity-[72%] rounded-[8px]">
                                <button className="py-[13px] font-[700] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] duration-300"> <span className='absolute -bottom-2 -left-2'>
                                <Btnwhite/>
                        </span>Reproducir ahora</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-[50%] md:w-[33.33%] px-3 group mt-6 sm:mt-0 flex items-center justify-center">
                    <div className="relative flex overflow-hidden max-w-[365px] h-[256px] w-full ">
                            <img src={Roulette} alt="roulette" className='rounded-[8px]' />
                            <div className="absolute max-w-[364px] w-full h-[256px] left-[-100%] duration-500 group-hover:left-0 flex items-center justify-center bg-black bg-opacity-[72%] rounded-[8px]">
                            <button className="py-[13px] font-[700] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] duration-300"> <span className='absolute -bottom-2 -left-2'>
                            <Btnwhite/>
                        </span>Reproducir ahora</button>
                                
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-[50%] md:w-[33.33%] px-3 group mt-6 md:mt-0 flex items-center justify-center">
                    <div className="relative flex overflow-hidden max-w-[365px] h-[256px] w-full ">
                            <img src={Betting} alt="betting" className=' h-full w-full' />
                            <div className="absolute max-w-[364px] w-full h-[256px] left-[-100%] duration-500 group-hover:left-0 flex items-center justify-center bg-black bg-opacity-[72%] rounded-[8px]">
                            <button className="py-[13px] font-[700] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] duration-300"> <span className='absolute -bottom-2 -left-2'>
                                <Btnwhite/>
                        </span>Reproducir ahora</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4