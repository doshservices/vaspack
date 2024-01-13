import React from "react";

export default function ContactHero() {
  return (
    <div className="contact-hero mx-[0%] sm:mx-[5%] text-NormalWhite  h-[30rem] ssm:h-[34rem] sm:h-[50vh] lg:h-[65vh] xl:h-[80vh] xxl:h-[75vh] flex justify-between items-center px-[1.5%] mt-12 ssm:mt-16 sm:mt-24 md:mt-24 lg:mt-28  ">
      <section className=" mx-[3%] lg:mx-[7.5%] xl:mx-[12.5%] text-center text-[1rem] xl:text-[1.1rem] font-semibold leading-[155%] ">
        <h1 className=" text-[1.6rem] ssm:text-[1.8rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.7rem] xl:text-[2rem] leading-[155%] font-bold ">
          Contact Vaspack Energy Limited
        </h1>
        <div className="leading-[155%] text-[0.8rem] ssm:text-[0.9rem]  sm:text-[0.8rem] md:text-[0.9rem] lg:text-base flex flex-col gap-4 mt-4 sm:mt-4 xl:mt-2">
          <p>
            Fill out our form for any questions, feedback or enquiries about our
            products, services, or solutions.
          </p>
          <p>Alternatively you can email us using: sales@vaspackenergy.com</p>
        </div>
      </section>
    </div>
  );
}
