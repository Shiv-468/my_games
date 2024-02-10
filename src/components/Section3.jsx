import React from 'react'
import Intell from '../assets/img/intelligence.webp'
import Productive from '../assets/img/productive.webp'
import JetX from '../assets/img/JetX.webp'
import Jocker from '../assets/img/jocker.webp'
import Toy from '../assets/img/toy-star.webp'
import Lucky from '../assets/img/lucky-fortune.webp'
import Summer from '../assets/img/hello-summer.webp'
import RPG from '../assets/img/casino-RPG.webp'
import Upper from '../assets/img/upper-arrow.webp'
import Down from '../assets/img/down-arrow.webp'
import S3e from '../assets/img/S3-ellipse1.webp'
import S3e2 from '../assets/img/S3-ellipse2.webp'
import { Btngreen } from '../common/Icons'
const Section3 = () => {
    return (
        <section className=' bg-2 bg-[#00141B] z-10 bg-size max-md:bg-white  max-sm:bg-cover relative '>
            <img src={S3e} alt="S3-ellipse1" className='absolute right-0 z-0 top-[-24%] hidden lg:block' />
            <img src={S3e2} alt="s3-ellipse2" className=' absolute left-0 z- 0 bottom-[-30%] hidden lg:block' />
            <div className="container max-w-[1140px] mx-auto px-3  md:pb-[243px] ">
            {/* Our Brand Attributes */}
                <h2 className='text-[#00141B] text-[34px] sm:text-[48px] leading-[40.6px] sm:leading-[57.6px] font-Anton font-[400] pt-[60px] md:pt-[243px] text-center '>Nuestros Atributos de Marca</h2>
                <div className=" flex flex-wrap -mx-3 md:pt-[60px] pt-[20px] pb-[20px] sm:pb-[75px] relative justify-center z-10">
                    <div className=" absolute left-[19%]">
                        <img src={Upper} alt="Upper-arrow" className='hidden lg:block' />
                    </div>
                    <div className=" absolute right-[19%] top-[33%]">
                        <img src={Down} alt="Down-arrow" className='hidden lg:block' />
                    </div>
                    <div className="w-full sm:w-[50%] md:w-[33.33%] px-3 flex md:justify-start justify-center">
                        <div className=" max-w-[263px] flex flex-col items-center">
                            <img src={Intell} alt="intelligence" />
                            <h3 className=' font-Anton font-[400] leading-[26px] text-[20px] text-center pt-4 text-[#00141B] '>Inteligencia</h3>
                            <p className='font-Inter font-[500] leading-[25.6px] text-[16px] text-center pt-4 text-[#00141B] opacity-[80%] '>Comprendemos a la perfección los gustos de las personas y el mundo del gaming.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-[50%] md:w-[33.33%] px-3 flex justify-center">
                        <div className=" max-w-[235px] flex flex-col items-center">
                            <img src={Productive} alt="productive" />
                            <h3 className=' font-Anton font-[400] leading-[26px] text-[20px] text-center pt-4 text-[#00141B] '>Proactividad</h3>
                            <p className='font-Inter font-[500] leading-[25.6px] text-[16px] text-center pt-4 text-[#00141B] opacity-[80%] '>Somos creadores de cambios que exploran nuevas formas de entretenimiento.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-[50%] md:w-[33.33%] px-3 flex md:justify-end justify-center ">
                        <div className=" max-w-[244px] flex flex-col items-center">
                            <img src={Intell} alt="intell" />
                            <h3 className=' font-Anton font-[400] leading-[26px] text-[20px] text-center pt-4 text-[#00141B] '>Innovación</h3>
                            <p className='font-Inter font-[500] leading-[25.6px] text-[16px] text-center pt-4 text-[#00141B] opacity-[80%] '>Pensamos fuera de la caja para estar siempre un paso adelante.</p>
                        </div>
                    </div>
                </div>
                <h2 className='text-[#00141B] text-[34px] sm:text-[48px] leading-[40.6px] sm:leading-[57.6px] font-Anton font-[400] md:pt-[75px] text-center '>Slots</h2>
                <div className=" flex justify-center">
                    <p className=' max-w-[904px] font-Inter font-[500] leading-[20px] sm:leading-[25.6px] text-[14px] sm:text-[16px] text-center pt-4 text-[#00141B] opacity-[80%]'>En Exclusive Games, ofrecemos una selección de más de 600 juegos de los principales desarrolladores, como Aristocrat, Amatic, EGT, Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja incansablemente para innovar y ampliar nuestra oferta de experiencias, garantizando la máxima seguridad con operaciones protegidas por cifrado SSL de 256 bits.</p>
                </div>
                <div className="flex flex-wrap -mx-3 pt-[20px] sm:pt-[60px]">
                    <div className=" w-full sm:w-[50%] md:w-[33.33%] flex justify-center md:justify-normal px-3 group">
                        <div className="relative flex overflow-hidden max-w-[365px] max-h-[264px] w-full border border-transparent rounded-[8px] group-hover:border-[#64DDB9] ">
                            <img src={JetX} alt="JetX" />
                            <div className="absolute max-w-[364px] w-full max-h-[265px] h-full left-[-100%] duration-500 group-hover:left-0 flex items-center justify-center bg-black bg-opacity-[72%] rounded-[8px]">
                            <button className="py-[13px]  font-[700] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] duration-300"> <span className='absolute -bottom-2 -left-2'>
                            <svg width="106" height="28" viewBox="0 0 106 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1C1 15.3594 12.6406 27 27 27H105" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                        </span>Jugar</button>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full sm:w-[50%] md:w-[33.33%] flex justify-center md:justify-normal px-3 group mt-6 sm:mt-0">
                        <div className="relative flex overflow-hidden max-w-[365px] max-h-[264px] w-full border border-transparent rounded-[8px] group-hover:border-[#64DDB9] ">
                            <img src={Jocker} alt="Jocker" />
                            <div className="absolute max-w-[364px] w-full max-h-[265px] h-full left-[-100%] duration-500 group-hover:left-0 flex items-center justify-center bg-black bg-opacity-[72%] rounded-[8px]">
                            <button className="py-[13px] font-[700] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] duration-300"> <span className='absolute -bottom-2 -left-2'>
                            <svg width="106" height="28" viewBox="0 0 106 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1C1 15.3594 12.6406 27 27 27H105" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                        </span>Jugar</button>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full sm:w-[50%] md:w-[33.33%] flex justify-center md:justify-normal px-3 group mt-6 md:mt-0">
                        <div className="relative flex overflow-hidden max-w-[365px] max-h-[264px] w-full border border-transparent rounded-[8px] group-hover:border-[#64DDB9] ">
                            <img src={Toy} alt="JetX" />
                            <div className="absolute max-w-[364px] w-full max-h-[265px] h-full left-[-100%] duration-500 group-hover:left-0 flex items-center justify-center bg-black bg-opacity-[72%] rounded-[8px]">
                            <button className="py-[13px] font-[700] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] duration-300"> <span className='absolute -bottom-2 -left-2'>
                            <svg width="106" height="28" viewBox="0 0 106 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1C1 15.3594 12.6406 27 27 27H105" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                        </span>Jugar</button>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full sm:w-[50%] md:w-[33.33%] flex justify-center md:justify-normal px-3 group mt-6">
                        <div className="relative flex overflow-hidden max-w-[365px] max-h-[264px] w-full border border-transparent rounded-[8px] group-hover:border-[#64DDB9] ">
                            <img src={Lucky} alt="lucky" />
                            <div className="absolute max-w-[364px] w-full max-h-[265px] h-full left-[-100%] duration-500 group-hover:left-0 flex items-center justify-center bg-black bg-opacity-[72%] rounded-[8px]">
                            <button className="py-[13px] font-[700] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] duration-300"> <span className='absolute -bottom-2 -left-2'>
                            <svg width="106" height="28" viewBox="0 0 106 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1C1 15.3594 12.6406 27 27 27H105" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                        </span>Jugar</button>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full sm:w-[50%] md:w-[33.33%] flex justify-center md:justify-normal px-3 group mt-6">
                        <div className="relative flex overflow-hidden max-w-[365px] max-h-[264px] w-full border border-transparent rounded-[8px] group-hover:border-[#64DDB9] ">
                            <img src={Summer} alt="summer" />
                            <div className="absolute max-w-[364px] w-full max-h-[265px] h-full left-[-100%] duration-500 group-hover:left-0 flex items-center justify-center bg-black bg-opacity-[72%] rounded-[8px]">
                            <button className="py-[13px] font-[700] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] duration-300"> <span className='absolute -bottom-2 -left-2'>
                            <svg width="106" height="28" viewBox="0 0 106 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1C1 15.3594 12.6406 27 27 27H105" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                        </span>Jugar</button>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full sm:w-[50%] md:w-[33.33%] flex justify-center md:justify-normal px-3 group mt-6">
                        <div className="relative flex overflow-hidden max-w-[365px] max-h-[264px] w-full border border-transparent rounded-[8px] group-hover:border-[#64DDB9] ">
                            <img src={RPG} alt="RPG" />
                            <div className="absolute max-w-[364px] w-full max-h-[265px] h-full left-[-100%] duration-500 group-hover:left-0 flex items-center justify-center bg-black bg-opacity-[72%] rounded-[8px]">
                            <button className="py-[13px] font-[700] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] duration-300"> <span className='absolute -bottom-2 -left-2'>
                            <svg width="106" height="28" viewBox="0 0 106 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1C1 15.3594 12.6406 27 27 27H105" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                        </span>Jugar</button>
                            </div>
                        </div>
                    </div>
                </div>
               <div className="flex justify-center pt-[40px] max-sm:pb-[70px]">
               <button className="py-[13px] px-[46px] duration-300 relative flex items-center justify-center bg-gradient-to-tl from-[#51C8EF] to-[#7AF57A]  rounded-[41px] hover:bg-gradient-to-br hover:shadow-[0px_4px_30px_-3px#67E0B2] hover:from-[#51C8EF] hover:to-[#7AF57A] font-[700] font-Inter text-[16px] text-[#00141B]"> <span className='absolute -bottom-2 -left-2'>
                    <Btngreen/>
                    </span>Mostrar más</button>
               </div>
               
            </div>
        </section>
    )
}

export default Section3