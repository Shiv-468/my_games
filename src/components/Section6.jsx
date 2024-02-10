import React from 'react'
import Rolling from '../assets/img/Rolling-Jackpot.webp'
import Svg1 from '../assets/img/reason1.webp'
import Svg2 from '../assets/img/reason-2.webp'
import Svg3 from '../assets/img/reason3.webp'
import Roler from '../assets/img/Casino-roler.webp'
import Trippleseven from '../assets/img/Trippleseven.webp'
import A_of_diamond from '../assets/img/A_of_diamond.webp'
import A_of_heart from '../assets/img/A_of_heart.webp'
import Dice from '../assets/img/Dice.webp'
import Green_tocken from '../assets/img/Green-tocken.webp'
import S6E2 from '../assets/img/S6-ellipse2.webp'
import RollerElllip from '../assets/img/RollerEllip.webp'
import S6E3 from '../assets/img/S6-ellipse3.webp'
import Trip7E from '../assets/img/Trip7E.webp'
import { Btngreen, Btnwhite, GreenTick } from '../common/Icons'
const Section6 = () => {
  return (
    <section className='bg-[#00141B] relative overflow-hidden'>
        <img src={S6E2} alt="s6-ellipse-2" className=' absolute right-0 z-0 top-0 hidden lg:block' />
        <img src={S6E3} alt="s6-ellipse-3" className=' absolute left-0 top-[58%] z-0 hidden lg:block' />
        <div className="container mx-auto px-3 max-w-[1140px] z-10">
            <div className=" flex flex-wrap -mx-3 pt-[20px] md:pt-[100px] md:pb-[75px] items-center md:items-start">
                <div className=" w-full md:w-[50%] px-3 flex justify-center z-10">
                    <img src={Rolling} alt="Rolling-Jackpot" />
                </div>
                <div className=" w-full md:w-[50%] px-3 flex justify-center flex-col items-center md:items-start mt-6 md:mt-0">
                    <h2 className='text-white text-[44px] sm:text-[48px] leading-[57.6px] font-Anton font-[400] pb-[60px]'>Más razones para elegirnos</h2>
                    <div className="p-[1px] reason-box max-w-[374px]  w-full">
                        <div className="px-[56px] py-[24px] max-w-[374px] flex items-center gap-[37px] rounded-[16px]">
                            <img src={Svg1} alt="reason1" />
                            <div className="flex flex-col">
                                <h3 className='text-[32px] font-Anton font-[400] text-white leading-[41.6px]'>200</h3>
                                <p className='font-Inter font-[500] leading-[25.6px] text-[16px] text-white'>Páginas creadas</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-[1px] reason-box max-w-[374px] w-full mt-6 mb-6">
                        <div className="px-[56px] py-[24px] max-w-[374px] flex items-center gap-[37px] rounded-[16px]">
                            <img src={Svg2} alt="reason2" />
                            <div className="flex flex-col">
                                <h3 className='text-[32px] font-Anton font-[400] text-white leading-[41.6px]'>98%</h3>
                                <p className='font-Inter font-[500] leading-[25.6px] text-[16px] text-white text-nowrap max-sm:text-wrap'>Clientes Satisfechas</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-[1px] reason-box max-w-[374px] w-full">
                        <div className="px-[56px] py-[24px] max-w-[374px] flex items-center gap-[37px] rounded-[16px]">
                            <img src={Svg3} alt="reason3" />
                            <div className="flex flex-col">
                                <h3 className='text-[32px] font-Anton font-[400] text-white leading-[41.6px]'>200</h3>
                                <p className='font-Inter font-[500] leading-[25.6px] text-[16px] text-white text-n owrap'>Divisas Disponibles</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-[75px] pb-[60px]">
                <h2 className='text-white text-[44px] sm:text-[48px] leading-[57.6px] font-Anton font-[400]'>Nuestras ofertas</h2>
                <p className='font-Inter font-[500] leading-[25.6px] text-[16px] text-white pt-4'>Te ofrecemos las mejores experiencias de juegos para tus clientes.</p>
            </div>
        </div>
        <div className="container mx-auto max-w-[1140px] px-3 xl:px-0 relative z-10">
        <img src={RollerElllip} alt="roller-ellip" className=' absolute z-0 top-[-4%] left-[-2%] hidden lg:block' />
            <div className=" sm:pt-[57px] sm:pr-[40px] pr-[20px] pb-[32px] pt-[25px] sm:pb-[32px] pl-[25px] sm:pl-[46px] bg-gradient-to-t from-[#072125] to-[#072125] border-[0.5px] border-[#828F93] rounded-[16px]">
            <div className="flex flex-wrap -mx-3">
                <div className=" w-full md:w-[50%] md:px-3 pt-[20px] z-10">
                    <img src={Roler} alt="casino-roler" />
                </div>
                <div className=" w-full md:w-[50%] md:px-3">
                <h3 className='text-[32px] font-Anton font-[400] text-white leading-[41.6px]'>Silver</h3>
                <p className='font-Inter font-[500] leading-[25.6px] text-[16px] text-white opacity-[80%] pt-4 max-w-[400px] pb-[32px]'>Diseño predeterminado, atractivo y fácil de navegar, tecnología HTLM5.</p>
                <h2 className='text-white text-[48px] leading-[57.6px] font-Anton font-[400] pb-4'>$5000</h2>
                <div className='flex flex-col gap-3 pb-[40px]'>
                            <div className='flex gap-2'>
                          <GreenTick/>
                                <p className='font-Inter font-[500] leading-[25.6px] text-[16px] max-w-[387px] text-white opacity-[80%]'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p></div>
                                <div className='flex gap-2'>
                                <GreenTick/>
                                <p className='font-Inter font-[500] leading-[25.6px] text-[16px] text-white opacity-[80%]'>Control de RTP (controlás qué porcentaje pagar)</p></div>
                                <div className='flex gap-2'>
                                <GreenTick/>
                                <p className='font-Inter font-[500] leading-[25.6px] text-[16px] text-white opacity-[80%]'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p></div>
                                <div className='flex gap-2'>
                                <GreenTick/>
                                <p className='font-Inter max-w-[388px] font-[500] leading-[25.6px] text-[16px] text-white opacity-[80%]'>Aplicación para Android y Windows de regalo.</p></div>
                                <div className='flex gap-2'>
                                <GreenTick/>
                                <p className='font-Inter font-[500] leading-[25.6px] text-[16px] text-white opacity-[80%]'>Tiempo de creación 2 a 3 semanas</p></div>
                        </div>
                        <button className="py-[13px] font-[700] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] duration-300"> <span className='absolute -bottom-2 -left-2'>
                         <Btnwhite/>
                        </span>Comprar ahora</button>
                </div>
            </div>
            </div>
          
        </div>
        <div className="container mx-auto max-w-[1140px] px-3 xl:px-0 ">
            <div className=" border-[0.5px] border-[#828F93] rounded-[16px] bg-container py-[46px] bg-cover bg-no-repeat mt-[64px] mb-[64px] relative">
                <img src={Green_tocken} alt="green-tocken"  className=' absolute top-[16%] left-[20%] hidden lg:block'/>
                <img src={A_of_diamond} alt="A-of-diamond" className=' absolute top-[55%] left-[13%] hidden lg:block' />
                <img src={A_of_heart} alt="A-of-heart"  className=' absolute top-[16%] right-[13%] hidden lg:block ' />
                <img src={Dice} alt="dice" className=' absolute bottom-[18%] right-[16%] hidden lg:block ' />
            <div className=" flex items-center justify-center flex-col px-3">
            <h3 className='text-[32px] font-Anton font-[400] text-white leading-[41.6px] text-center'>Luxury</h3>
            <p className='font-Inter font-[500] leading-[25.6px] text-[16px] text-white pt-4 max-w-[391px] text-center opacity-[80%]'>lleva tu experiencia de juego al siguiente nivel. Con todas las características de la versión Silver y la potencia adicional de la tecnología React .</p>
            <h2 className='text-white text-[48px] leading-[57.6px] font-Anton font-[400] pb-4 text-center pt-[32px]'>$9000</h2>
            <div className='flex flex-col gap-3 pb-[40px] max-w-[419px] justify-center'>
                            <div className='flex gap-2'><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.456 7.95506C13.6673 7.7539 13.9485 7.64268 14.2402 7.64489C14.5319 7.6471 14.8114 7.76256 15.0196 7.9669C15.2279 8.17124 15.3486 8.44848 15.3563 8.74013C15.364 9.03177 15.2581 9.31501 15.061 9.53006L9.07597 17.0151C8.97305 17.1259 8.84885 17.2149 8.71077 17.2766C8.57269 17.3384 8.42357 17.3716 8.27235 17.3744C8.12112 17.3772 7.97087 17.3495 7.8306 17.2929C7.69033 17.2363 7.56292 17.152 7.45597 17.0451L3.48697 13.0761C3.37644 12.9731 3.28779 12.8489 3.2263 12.7109C3.16481 12.5729 3.13175 12.4239 3.12908 12.2728C3.12642 12.1218 3.1542 11.9718 3.21078 11.8317C3.26737 11.6916 3.35158 11.5643 3.45841 11.4575C3.56524 11.3507 3.69249 11.2665 3.83257 11.2099C3.97265 11.1533 4.1227 11.1255 4.27375 11.1282C4.42481 11.1308 4.57378 11.1639 4.71178 11.2254C4.84977 11.2869 4.97398 11.3755 5.07697 11.4861L8.21797 14.6256L13.426 7.98806C13.4353 7.97648 13.4453 7.96546 13.456 7.95506ZM12.076 15.6651L13.456 17.0451C13.5629 17.1518 13.6902 17.2359 13.8303 17.2923C13.9705 17.3488 14.1205 17.3765 14.2716 17.3737C14.4226 17.3709 14.5716 17.3377 14.7095 17.2761C14.8475 17.2144 14.9716 17.1257 15.0745 17.0151L21.0625 9.53006C21.17 9.42387 21.2551 9.29708 21.3126 9.15728C21.3701 9.01748 21.3988 8.86752 21.397 8.71638C21.3952 8.56523 21.363 8.41599 21.3023 8.27756C21.2416 8.13914 21.1536 8.01437 21.0436 7.91071C20.9336 7.80705 20.8038 7.72662 20.662 7.67423C20.5202 7.62184 20.3693 7.59856 20.2183 7.60578C20.0674 7.613 19.9194 7.65057 19.7832 7.71625C19.6471 7.78193 19.5256 7.87438 19.426 7.98806L14.2165 14.6256L13.489 13.8966L12.0745 15.6651H12.076Z" fill="url(#paint0_linear_88_126)" />
                                <defs>
                                    <linearGradient id="paint0_linear_88_126" x1="26.4852" y1="16.8828" x2="14.0628" y2="-0.616319" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#51C8EF" />
                                        <stop offset="1" stop-color="#7AF57A" />
                                    </linearGradient>
                                </defs>
                            </svg>
                                <p className='font-Inter font-[500] leading-[25.6px] text-[16px] max-w-[387px] text-white opacity-[80%] text-center'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p></div>
                                <div className='flex gap-2'><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.456 7.95506C13.6673 7.7539 13.9485 7.64268 14.2402 7.64489C14.5319 7.6471 14.8114 7.76256 15.0196 7.9669C15.2279 8.17124 15.3486 8.44848 15.3563 8.74013C15.364 9.03177 15.2581 9.31501 15.061 9.53006L9.07597 17.0151C8.97305 17.1259 8.84885 17.2149 8.71077 17.2766C8.57269 17.3384 8.42357 17.3716 8.27235 17.3744C8.12112 17.3772 7.97087 17.3495 7.8306 17.2929C7.69033 17.2363 7.56292 17.152 7.45597 17.0451L3.48697 13.0761C3.37644 12.9731 3.28779 12.8489 3.2263 12.7109C3.16481 12.5729 3.13175 12.4239 3.12908 12.2728C3.12642 12.1218 3.1542 11.9718 3.21078 11.8317C3.26737 11.6916 3.35158 11.5643 3.45841 11.4575C3.56524 11.3507 3.69249 11.2665 3.83257 11.2099C3.97265 11.1533 4.1227 11.1255 4.27375 11.1282C4.42481 11.1308 4.57378 11.1639 4.71178 11.2254C4.84977 11.2869 4.97398 11.3755 5.07697 11.4861L8.21797 14.6256L13.426 7.98806C13.4353 7.97648 13.4453 7.96546 13.456 7.95506ZM12.076 15.6651L13.456 17.0451C13.5629 17.1518 13.6902 17.2359 13.8303 17.2923C13.9705 17.3488 14.1205 17.3765 14.2716 17.3737C14.4226 17.3709 14.5716 17.3377 14.7095 17.2761C14.8475 17.2144 14.9716 17.1257 15.0745 17.0151L21.0625 9.53006C21.17 9.42387 21.2551 9.29708 21.3126 9.15728C21.3701 9.01748 21.3988 8.86752 21.397 8.71638C21.3952 8.56523 21.363 8.41599 21.3023 8.27756C21.2416 8.13914 21.1536 8.01437 21.0436 7.91071C20.9336 7.80705 20.8038 7.72662 20.662 7.67423C20.5202 7.62184 20.3693 7.59856 20.2183 7.60578C20.0674 7.613 19.9194 7.65057 19.7832 7.71625C19.6471 7.78193 19.5256 7.87438 19.426 7.98806L14.2165 14.6256L13.489 13.8966L12.0745 15.6651H12.076Z" fill="url(#paint0_linear_88_126)" />
                                <defs>
                                    <linearGradient id="paint0_linear_88_126" x1="26.4852" y1="16.8828" x2="14.0628" y2="-0.616319" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#51C8EF" />
                                        <stop offset="1" stop-color="#7AF57A" />
                                    </linearGradient>
                                </defs>
                            </svg>
                                <p className='font-Inter font-[500] leading-[25.6px] text-[16px] max-w-[387px] text-white opacity-[80%] text-center'>Control de RTP (controlás qué porcentaje pagar)</p></div>
                                <div className='flex gap-2'><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.456 7.95506C13.6673 7.7539 13.9485 7.64268 14.2402 7.64489C14.5319 7.6471 14.8114 7.76256 15.0196 7.9669C15.2279 8.17124 15.3486 8.44848 15.3563 8.74013C15.364 9.03177 15.2581 9.31501 15.061 9.53006L9.07597 17.0151C8.97305 17.1259 8.84885 17.2149 8.71077 17.2766C8.57269 17.3384 8.42357 17.3716 8.27235 17.3744C8.12112 17.3772 7.97087 17.3495 7.8306 17.2929C7.69033 17.2363 7.56292 17.152 7.45597 17.0451L3.48697 13.0761C3.37644 12.9731 3.28779 12.8489 3.2263 12.7109C3.16481 12.5729 3.13175 12.4239 3.12908 12.2728C3.12642 12.1218 3.1542 11.9718 3.21078 11.8317C3.26737 11.6916 3.35158 11.5643 3.45841 11.4575C3.56524 11.3507 3.69249 11.2665 3.83257 11.2099C3.97265 11.1533 4.1227 11.1255 4.27375 11.1282C4.42481 11.1308 4.57378 11.1639 4.71178 11.2254C4.84977 11.2869 4.97398 11.3755 5.07697 11.4861L8.21797 14.6256L13.426 7.98806C13.4353 7.97648 13.4453 7.96546 13.456 7.95506ZM12.076 15.6651L13.456 17.0451C13.5629 17.1518 13.6902 17.2359 13.8303 17.2923C13.9705 17.3488 14.1205 17.3765 14.2716 17.3737C14.4226 17.3709 14.5716 17.3377 14.7095 17.2761C14.8475 17.2144 14.9716 17.1257 15.0745 17.0151L21.0625 9.53006C21.17 9.42387 21.2551 9.29708 21.3126 9.15728C21.3701 9.01748 21.3988 8.86752 21.397 8.71638C21.3952 8.56523 21.363 8.41599 21.3023 8.27756C21.2416 8.13914 21.1536 8.01437 21.0436 7.91071C20.9336 7.80705 20.8038 7.72662 20.662 7.67423C20.5202 7.62184 20.3693 7.59856 20.2183 7.60578C20.0674 7.613 19.9194 7.65057 19.7832 7.71625C19.6471 7.78193 19.5256 7.87438 19.426 7.98806L14.2165 14.6256L13.489 13.8966L12.0745 15.6651H12.076Z" fill="url(#paint0_linear_88_126)" />
                                <defs>
                                    <linearGradient id="paint0_linear_88_126" x1="26.4852" y1="16.8828" x2="14.0628" y2="-0.616319" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#51C8EF" />
                                        <stop offset="1" stop-color="#7AF57A" />
                                    </linearGradient>
                                </defs>
                            </svg>
                                <p className='font-Inter font-[500] leading-[25.6px] text-[16px] max-w-[387px] text-white opacity-[80%] text-center'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p></div>
                                <div className='flex gap-2'><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.456 7.95506C13.6673 7.7539 13.9485 7.64268 14.2402 7.64489C14.5319 7.6471 14.8114 7.76256 15.0196 7.9669C15.2279 8.17124 15.3486 8.44848 15.3563 8.74013C15.364 9.03177 15.2581 9.31501 15.061 9.53006L9.07597 17.0151C8.97305 17.1259 8.84885 17.2149 8.71077 17.2766C8.57269 17.3384 8.42357 17.3716 8.27235 17.3744C8.12112 17.3772 7.97087 17.3495 7.8306 17.2929C7.69033 17.2363 7.56292 17.152 7.45597 17.0451L3.48697 13.0761C3.37644 12.9731 3.28779 12.8489 3.2263 12.7109C3.16481 12.5729 3.13175 12.4239 3.12908 12.2728C3.12642 12.1218 3.1542 11.9718 3.21078 11.8317C3.26737 11.6916 3.35158 11.5643 3.45841 11.4575C3.56524 11.3507 3.69249 11.2665 3.83257 11.2099C3.97265 11.1533 4.1227 11.1255 4.27375 11.1282C4.42481 11.1308 4.57378 11.1639 4.71178 11.2254C4.84977 11.2869 4.97398 11.3755 5.07697 11.4861L8.21797 14.6256L13.426 7.98806C13.4353 7.97648 13.4453 7.96546 13.456 7.95506ZM12.076 15.6651L13.456 17.0451C13.5629 17.1518 13.6902 17.2359 13.8303 17.2923C13.9705 17.3488 14.1205 17.3765 14.2716 17.3737C14.4226 17.3709 14.5716 17.3377 14.7095 17.2761C14.8475 17.2144 14.9716 17.1257 15.0745 17.0151L21.0625 9.53006C21.17 9.42387 21.2551 9.29708 21.3126 9.15728C21.3701 9.01748 21.3988 8.86752 21.397 8.71638C21.3952 8.56523 21.363 8.41599 21.3023 8.27756C21.2416 8.13914 21.1536 8.01437 21.0436 7.91071C20.9336 7.80705 20.8038 7.72662 20.662 7.67423C20.5202 7.62184 20.3693 7.59856 20.2183 7.60578C20.0674 7.613 19.9194 7.65057 19.7832 7.71625C19.6471 7.78193 19.5256 7.87438 19.426 7.98806L14.2165 14.6256L13.489 13.8966L12.0745 15.6651H12.076Z" fill="url(#paint0_linear_88_126)" />
                                <defs>
                                    <linearGradient id="paint0_linear_88_126" x1="26.4852" y1="16.8828" x2="14.0628" y2="-0.616319" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#51C8EF" />
                                        <stop offset="1" stop-color="#7AF57A" />
                                    </linearGradient>
                                </defs>
                            </svg>
                                <p className='font-Inter max-w-[388px] font-[500] leading-[25.6px] w-full text-[16px] text-white opacity-[80%] text-center'>Aplicación para Android y Windows de regalo.</p></div>
                                <div className='flex gap-2'><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.456 7.95506C13.6673 7.7539 13.9485 7.64268 14.2402 7.64489C14.5319 7.6471 14.8114 7.76256 15.0196 7.9669C15.2279 8.17124 15.3486 8.44848 15.3563 8.74013C15.364 9.03177 15.2581 9.31501 15.061 9.53006L9.07597 17.0151C8.97305 17.1259 8.84885 17.2149 8.71077 17.2766C8.57269 17.3384 8.42357 17.3716 8.27235 17.3744C8.12112 17.3772 7.97087 17.3495 7.8306 17.2929C7.69033 17.2363 7.56292 17.152 7.45597 17.0451L3.48697 13.0761C3.37644 12.9731 3.28779 12.8489 3.2263 12.7109C3.16481 12.5729 3.13175 12.4239 3.12908 12.2728C3.12642 12.1218 3.1542 11.9718 3.21078 11.8317C3.26737 11.6916 3.35158 11.5643 3.45841 11.4575C3.56524 11.3507 3.69249 11.2665 3.83257 11.2099C3.97265 11.1533 4.1227 11.1255 4.27375 11.1282C4.42481 11.1308 4.57378 11.1639 4.71178 11.2254C4.84977 11.2869 4.97398 11.3755 5.07697 11.4861L8.21797 14.6256L13.426 7.98806C13.4353 7.97648 13.4453 7.96546 13.456 7.95506ZM12.076 15.6651L13.456 17.0451C13.5629 17.1518 13.6902 17.2359 13.8303 17.2923C13.9705 17.3488 14.1205 17.3765 14.2716 17.3737C14.4226 17.3709 14.5716 17.3377 14.7095 17.2761C14.8475 17.2144 14.9716 17.1257 15.0745 17.0151L21.0625 9.53006C21.17 9.42387 21.2551 9.29708 21.3126 9.15728C21.3701 9.01748 21.3988 8.86752 21.397 8.71638C21.3952 8.56523 21.363 8.41599 21.3023 8.27756C21.2416 8.13914 21.1536 8.01437 21.0436 7.91071C20.9336 7.80705 20.8038 7.72662 20.662 7.67423C20.5202 7.62184 20.3693 7.59856 20.2183 7.60578C20.0674 7.613 19.9194 7.65057 19.7832 7.71625C19.6471 7.78193 19.5256 7.87438 19.426 7.98806L14.2165 14.6256L13.489 13.8966L12.0745 15.6651H12.076Z" fill="url(#paint0_linear_88_126)" />
                                <defs>
                                    <linearGradient id="paint0_linear_88_126" x1="26.4852" y1="16.8828" x2="14.0628" y2="-0.616319" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#51C8EF" />
                                        <stop offset="1" stop-color="#7AF57A" />
                                    </linearGradient>
                                </defs>
                            </svg>
                                <p className='font-Inter font-[500] leading-[25.6px] text-[16px] max-w-[387px] w-full text-white opacity-[80%]  text-center'>Tiempo de creación 2 a 3 semanas</p></div>
                        </div>
                    <button className="py-[13px] duration-300 px-[46px] relative flex items-center justify-center bg-gradient-to-tl from-[#51C8EF] to-[#7AF57A]  rounded-[41px] hover:bg-gradient-to-br hover:shadow-[0px_4px_30px_-3px#67E0B2] hover:from-[#51C8EF] hover:to-[#7AF57A] font-[700] font-Inter text-[16px] text-[#00141B]"> <span className='absolute -bottom-2 -left-2'>
                <Btngreen/>
                    </span>Comprar ahora</button>
            </div>
            </div>
            
        </div>
        <div className="container mx-auto max-w-[1140px] max-xl:px-3">
            <div className=" sm:py-[78px] sm:pr-[40px]  sm:pl-[50px] py-[40px] pr-[20px] pl-[25px] bg-gradient-to-t from-[#072125] to-[#072125] border-[0.5px] border-[#828F93] rounded-[16px]">
            <div className="flex flex-wrap -mx-3 items-center relative z-10 ">
            <img src={Trip7E} alt="Trip7E" className=' absolute right-[-5%] top-[-27%] z-0  hidden lg:block ' />
                <div className=" w-full md:w-[50%] px-3">
                <h3 className='text-[32px] font-Anton font-[400] text-white leading-[41.6px]'>Platinum</h3>
                <p className='font-Inter font-[500] leading-[25.6px] text-[16px] text-white pt-4 max-w-[391px] opacity-[80%]'>Diseño totalmente personalizado. Contáctanos para un presupuesto.</p>
                <h2 className='text-white text-[48px] leading-[57.6px] font-Anton font-[400] pb-4 pt-[32px]'>Consultar precio</h2>
                <div className='flex gap-2 pb-[40px]'>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.456 7.95506C13.6673 7.7539 13.9485 7.64268 14.2402 7.64489C14.5319 7.6471 14.8114 7.76256 15.0196 7.9669C15.2279 8.17124 15.3486 8.44848 15.3563 8.74013C15.364 9.03177 15.2581 9.31501 15.061 9.53006L9.07597 17.0151C8.97305 17.1259 8.84885 17.2149 8.71077 17.2766C8.57269 17.3384 8.42357 17.3716 8.27235 17.3744C8.12112 17.3772 7.97087 17.3495 7.8306 17.2929C7.69033 17.2363 7.56292 17.152 7.45597 17.0451L3.48697 13.0761C3.37644 12.9731 3.28779 12.8489 3.2263 12.7109C3.16481 12.5729 3.13175 12.4239 3.12908 12.2728C3.12642 12.1218 3.1542 11.9718 3.21078 11.8317C3.26737 11.6916 3.35158 11.5643 3.45841 11.4575C3.56524 11.3507 3.69249 11.2665 3.83257 11.2099C3.97265 11.1533 4.1227 11.1255 4.27375 11.1282C4.42481 11.1308 4.57378 11.1639 4.71178 11.2254C4.84977 11.2869 4.97398 11.3755 5.07697 11.4861L8.21797 14.6256L13.426 7.98806C13.4353 7.97648 13.4453 7.96546 13.456 7.95506ZM12.076 15.6651L13.456 17.0451C13.5629 17.1518 13.6902 17.2359 13.8303 17.2923C13.9705 17.3488 14.1205 17.3765 14.2716 17.3737C14.4226 17.3709 14.5716 17.3377 14.7095 17.2761C14.8475 17.2144 14.9716 17.1257 15.0745 17.0151L21.0625 9.53006C21.17 9.42387 21.2551 9.29708 21.3126 9.15728C21.3701 9.01748 21.3988 8.86752 21.397 8.71638C21.3952 8.56523 21.363 8.41599 21.3023 8.27756C21.2416 8.13914 21.1536 8.01437 21.0436 7.91071C20.9336 7.80705 20.8038 7.72662 20.662 7.67423C20.5202 7.62184 20.3693 7.59856 20.2183 7.60578C20.0674 7.613 19.9194 7.65057 19.7832 7.71625C19.6471 7.78193 19.5256 7.87438 19.426 7.98806L14.2165 14.6256L13.489 13.8966L12.0745 15.6651H12.076Z" fill="url(#paint0_linear_88_126)" />
                                <defs>
                                    <linearGradient id="paint0_linear_88_126" x1="26.4852" y1="16.8828" x2="14.0628" y2="-0.616319" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#51C8EF" />
                                        <stop offset="1" stop-color="#7AF57A" />
                                    </linearGradient>
                                </defs>
                            </svg>
                    <p className='font-Inter font-[500] leading-[25.6px] text-[16px] text-white opacity-[80%]'>Personalizable </p>
                 </div>
                 <button className="py-[13px] font-[700] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] duration-300"> <span className='absolute -bottom-2 -left-2'>
                          <Btnwhite/>
                        </span>Comprar ahora</button>
                </div>
                <div className=" w-full md:w-[50%] px-3 mt-6 md:mt-0 z-10 ">
                    <img src={Trippleseven} alt="tripple-seven" className='sm:h-[419px] h-[300px]' />
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Section6