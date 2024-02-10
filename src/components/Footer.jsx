import React from 'react'
import Logo from '../assets/img/logo.webp'
import Gmail from '../assets/img/Gmail.webp'
import Calling from '../assets/img/Calling.webp'
import FooterE1 from '../assets/img/footer-e1.webp'
import FooterE2 from '../assets/img/footer-e2.webp'
import { Facebook, Instagram, LinkedIn } from '../common/Icons'
const Footer = () => {
    return (
        <section className=' bg-black overflow-hidden relative '>
                     <img src={FooterE1} alt="footerE1" className='absolute left-0 bottom-0 z-0 ' />
                <img src={FooterE2} alt="footerE2" className=' absolute right-0 z-0' />
            <div className="container mx-auto px-3 max-w-[1140px]">
                <div className="flex flex-wrap -mx-3 pt-[64px] pb-[40px] z-10">
                    <div className=" w-full lg:w-[41.66%] px-3 z-10">
                        <img src={Logo} alt="footer-logo" />
                        <p className=' max-w-[369px] font-Inter font-[500] leading-[25.6px] text-[16px] pt-4 pb-6 text-white opacity-[80%]'>En Exclusive Games somos un equipo apasionado de personas dedicadas al desarrollo de multiplataformas para juegos de azar</p>
                        <div className="flex gap-[12px]">
                        <Instagram/>
                            {/* Facebook  */}
                         <Facebook/>
                            {/* linkedIn */}
                         <LinkedIn/>
                        </div>
                    </div>
                    <div className=" w-full lg:w-[58.33%] px-3 z-10">
                        <div className="flex flex-wrap -">
                            <div className=" w-full sm:w-[50%] lg:w-[33.33%] md:px-3 mt-6 lg:mt-0">
                                <h4 className=' font-Inter font-[700] leading-[25.6px] pt-[10px] pb-4 text-[16px] text-white'>Menú principal</h4>
                                <ul className='flex flex-col gap-[14px]'>
                                    <li><a href="#" className=' font-Inter text-white text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>Hogar</a></li>
                                    <li><a href="#" className=' font-Inter text-white text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>Misión</a></li>
                                    <li><a href="#" className=' font-Inter text-white text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>Tragamonedas</a></li>
                                    <li><a href="#" className=' font-Inter text-white text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>Por qué elegirnos</a></li>
                                    <li><a href="#" className=' font-Inter text-white text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>Ofertas</a></li>
                                </ul>
                            </div>
                            <div className=" w-full sm:w-[50%] lg:w-[33.33%] md:px-3 mt-6 lg:mt-0 flex flex-col flex-wrap">
                                <h4 className=' font-Inter font-[700] leading-[25.6px] pt-[10px] pb-4 text-[16px] text-white'>Atención al cliente</h4>
                                <ul className='flex flex-col gap-[14px]'>
                                    <li><a href="#" className=' font-Inter text-white text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>¿Necesitas ayuda?</a></li>
                                    <li><a href="#" className=' font-Inter text-white text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>política de privacidad</a></li>
                                    <li><a href="#" className=' font-Inter text-white text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>Términos de servicios</a></li>
                                </ul>
                            </div>
                            <div className=" w-full sm:w-[50%] lg:w-[33.33%] md:px-3 mt-6 lg:mt-0">
                            <h4 className=' font-Inter font-[700] leading-[25.6px] pt-[10px] pb-4 text-[16px] text-white'>Ponerse en contacto</h4>
                            <div className=" flex items-center gap-[10px]">
                                <img src={Gmail} alt="gmail" />
                                <p className=' font-Inter text-wrap  text-white  text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>juegosexclusivos@gmail.com</p>
                            </div>
                            <div className=" flex items-center gap-[10px] pt-3">
                                <img src={Calling} alt="calling" />
                                <p className=' font-Inter text-white text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>(101)342-7873</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" h-[1px] bg-[#1A1A1A] "></div>
            <p className=' text-[16px] cursor-pointer text-center font-Inter font-[500] leading-[25.6px] py-[20px] text-white opacity-[50%] '>© Juegos exclusivos - Todos los derechos reservados 2023</p>
        </section>
    )
}

export default Footer