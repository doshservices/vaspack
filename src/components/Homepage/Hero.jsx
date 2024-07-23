import MobileHero from './assets/MobileHero.jpg'
import DesktopHero from './assets/DesktopHero.jpg'


export default function Hero() {

  return (
    <div className="relative  mt-12 ssm:mt-16 sm:mt-20 md:mt-24 lg:mt-28 px-[5%] ">
      <section className=" hidden sm:block ">
        <img src={DesktopHero} className=" full" alt="" />
      </section>
      <section className=" block sm:hidden ">
        <img src={MobileHero} className=" full" alt="" />
      </section>
    </div>
  );
}
{
  /* <div className="home-hero mx-[5%] text-NormalWhite h-[80vh] flex items-end pb-[2vh] px-[1.5%] mt-28 ">
        <section className=" w-[55%]">
          <h1 className=" text-[1.7rem] leading-[178%] font-bold ">
            We are an Integrated Energy Company
          </h1>
          <p className=" text-[0.9rem] leading-[200%] ">
            Vaspack Energy Limited is an indigenous downstream company in the
            Oil & Gas sector with interests in procurement, marketing and
            distribution of Petroleum Products (Automotive Gas Oil (AGO),
            Premium Motor Spirit (PMS) and Liquefied Petroleum Gas (LPG); using
            innovative technology.
          </p>
        </section>
      </div> */
}
