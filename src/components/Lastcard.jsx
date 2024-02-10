import React from 'react'
import Card_left from '../assets/img/card-left.webp'
import Card_right from '../assets/img/card-right.webp'
import { Btngreen } from '../common/Icons'
const Lastcard = () => {
  return (
   <section className='bg-[#00141B]'>
    <div className="container mx-auto px-3 lg:px-0 py-[75px] md:py-[150px] max-w-[1140px]">
        <div className=" max-w-[1140px] w-full xl:h-[341px] border-[0.5px] border-[#829094] py-[60px] md:py-[104px] rounded-[16px] flex flex-col items-center bg-[#061F26] relative ">
            <img src={Card_left} alt="card-left" className='absolute top-0 left-0 w-[50%] h-[100%]' />
            <img src={Card_right} alt="card-left" className='absolute top-0 right-0  w-[50%] h-[100%]' />
        <h2 className='text-white text-[30px] md:text-[48px] leading-[42px] md:leading-[57.6px] font-Anton font-[400] text-center pb-[40px] z-10 '>Lanza tu propia plataforma en sólo 2 semanas</h2>
      
        <button className="py-[13px] duration-300 px-[46px] relative flex items-center justify-center bg-gradient-to-tl from-[#51C8EF] to-[#7AF57A]  rounded-[41px] hover:bg-gradient-to-br hover:shadow-[0px_4px_30px_-3px#67E0B2] hover:from-[#51C8EF] hover:to-[#7AF57A] font-[700] font-Inter text-[16px] text-[#00141B]"> <span className='absolute -bottom-2 -left-2'>
                <Btngreen/>
                    </span>Leer más</button>
        </div>
    </div>
   </section>
  )
}

export default Lastcard