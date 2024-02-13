import React, { useState } from 'react'
import logo from '../assets/img/logo.webp'
import { Btngreen, Btnwhite } from '../common/Icons'
const Header = () => {
 const [data , setdata]=useState(false);
 function view (){setdata(!data)
if(data === false){
    document.body.classList.add("overflow_hidden");
}
else{
    document.body.classList.remove("overflow_hidden");
}
}
    return (
        <header className=' bg-black bg-img min-h-screen bg-no-repeat flex flex-col bg-center bg-cover'>
            <div className="bg-white bg-opacity-[10%]">
            <div className="contianer mx-auto max-w-[1140px] px-3">
                <div className="flex py-[24px] justify-between items-center">
                    <img src={logo} alt="logo" />
                    <ul className={`${data ? "right-0":"right-[-100%]"} flex items-center w-f justify -between z-[50] gap-[20px] max-lg:fixed  max-lg:bg-[#00141B] max-lg:w-full max-lg:h-full max-xl:top-0  max-lg:flex-col max-lg:justify-center duration-500`}>
                        <li><a href="#" className='text-[16px] font-Inter opacity-[80%] leading-[25.6px] font-[500] text-white'>Hogar</a></li>
                        <li><a href="#" className='text-[16px] font-Inter opacity-[80%] leading-[25.6px] font-[500] text-white'>Misión</a></li>
                        <li><a href="#" className='text-[16px] font-Inter opacity-[80%] leading-[25.6px] font-[500] text-white'>Tragamonedas</a></li>
                        <li><a href="#" className='text-[16px] font-Inter opacity-[80%] leading-[25.6px] font-[500] text-white'>Por qué elegirnos</a></li>
                        <li><a href="#" className='text-[16px] font-Inter opacity-[80%] leading-[25.6px] font-[500] text-white'>Ofertas</a></li>
                    </ul>
                <div className='flex items-center gap-[30px]'>
                <button className="py-[13px] font-[700] hidden  px-[46px] relative md:block sm:flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] duration-300"> <span className='absolute -bottom-2 -left-2'>
                          <Btnwhite/>
                        </span>Acceso</button>
                        <div onClick={view} className="menuicon lg:hidden block z-50 ">
                    <span className="bar h-[3px] block bg-white w-[25px] duration-300"></span>
                    <span className="bar h-[3px] block  bg-white w-[25px] my-[6px]"></span>
                    <span className="bar h-[3px] block  bg-white w-[25px]  duration-300"></span>
                </div>
                </div>
                </div>

            </div>
            </div>
            <div className="container mx-auto px-3 max-w-[1140px] flex items-center justify-center flex-col flex-grow">
                <div className=" flex items-center justify-center flex-col ">
                    <h1 className='font-Anton text-[49px] md:text-[72px] font-[400] text-white max-w-[505px] text-center '>Exclusive Games. Pasión por ganar</h1>
                    <p className=' font-Inter font-[500] text-[16px] text-center max-w-[727px] text-white pt-4 pb-[40px] '>En Exclusive Games somos un equipo apasionado de personas dedicados al desarrollo de multiplataformas para juegos de azar. A lo largo de nuestra vida consumimos todo tipo de juegos hasta que un día decidimos crear los propios.</p>
                    <button className="py-[13px] px-[46px] relative flex items-center justify-center bg-gradient-to-tl from-[#51C8EF] to-[#7AF57A]  rounded-[41px] hover:bg-gradient-to-br hover:shadow-[0px_4px_30px_-3px#67E0B2] hover:from-[#51C8EF] hover:to-[#7AF57A] font-[700] duration-300 font-Inter text-[16px] text-[#00141B]"> <span className='absolute -bottom-2 -left-2'>
                 <Btngreen/>
                    </span>Empezar</button>
                </div>
            </div>
        
        </header>
    )
}

export default Header