import { useSwiper } from 'swiper/react'
import { BsArrowLeftCircle, BsFillArrowRightCircleFill } from "react-icons/bs";


export default function HeroSwiperNav() {
    const swiper = useSwiper();
  return (
    <div className='flex gap-[0]  py-[3vh] sm:gap-[3%]   ssm:py-[2vh] sm:py-[2.5vh] md:py-[2vh] lg:gap-[2%] xl:py-[3vh] '>
        <div onClick={() => swiper.slidePrev()} className=' cursor-pointer'>
            <BsArrowLeftCircle className='text-[2rem] text-[#DF6751] hover:text-[#FE8B75] ssm:text-[2.5rem] md:text-[1.5rem]  lg:text-[2rem] ' />
        </div>
        <div className='cursor-pointer' onClick={() => swiper.slideNext()} >
            <BsFillArrowRightCircleFill  className='text-[2rem] bg-[#FFFFFF] text-[#DF6751] ml-[30%] sm:ml-[0] ssm:text-[2.5rem] md:text-[1.5rem]  lg:text-[2rem] hover:text-[#FE8B75] ' />
        </div>
    </div>
  )
} 