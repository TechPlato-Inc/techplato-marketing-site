'use client'

import Image from "next/image";

const OurProducts = () => {
  return (
    <div id="ourProducts" className="bg-gradient-style-1-style-2 mx-auto background-image noise-texture px-4">
      <div className="background-container">
        <div className="max-w-screen-xl mx-auto py-20 md:py-32 ">
          <p data-aos="fade-up" data-aos-delay="200" className="font-poppins text-white/55 md:text-[16px] text-[12px]  leading-[24px] font-semibold text-xs tracking-widest">
            O U R <span className="ml-3"> B R A N D S</span>
          </p>
          <h2 data-aos="fade-up" className="font-bold mt-3 md:mt-6 mb-7 md:mb-14 gradient-text-style-1-style-3 font-poppins text-[24px] leading-[32px] md:text-[64px] md:leading-[72px] LarkenDEMOFont">
            Products We&apos;ve <br /> Built &amp; Launched
          </h2>

          {/* Agency */}
          <a
            href="https://www.techplato.agency/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex items-center md:items-end gap-4 group rounded-lg px-4 py-3 -mx-4
              transition-all duration-200 ease-out
              hover:bg-white/5"
            aria-label="Visit TechPlato Agency website"
          >
            <p className="text-white font-bold text-[32px] leading-[40px] md:block hidden">01</p>
            <h3 className="text-7xl md:text-9xl lg:text-[155px] font-extrabold uppercase tracking-tight
               bg-gradient-to-r from-[#a78bfa] to-[#e0d4ff] text-transparent bg-clip-text
               flex items-center gap-3">
              Agency
              <Image
                className="ml-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-[0.5rad]"
                src='/Images/Arrow.png'
                width={22}
                height={50}
                alt=""
                aria-hidden="true"
              />
            </h3>
          </a>

          {/* Condro */}
          <a
            href="https://www.condro.ca/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex items-center md:items-end gap-4 mt-8 md:mt-12 group rounded-lg px-4 py-3 -mx-4
              transition-all duration-200 ease-out
              hover:bg-white/5"
            aria-label="Visit Condro website"
          >
            <p className="text-white font-bold text-[32px] leading-[40px] md:block hidden">02</p>
            <h3 className="text-7xl md:text-[135px] lg:text-[155px] font-extrabold uppercase tracking-tight
               bg-gradient-to-r from-[#a78bfa] to-[#e0d4ff] text-transparent bg-clip-text
               flex items-center gap-3">
              Condro
              <Image
                className="ml-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-[0.5rad]"
                src='/Images/Arrow.png'
                width={22}
                height={50}
                alt=""
                aria-hidden="true"
              />
            </h3>
          </a>

          {/* FlowBites */}
          <a
            href="https://www.flowbites.com/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex items-center md:items-end gap-4 mt-8 md:mt-12 group rounded-lg px-4 py-3 -mx-4
              transition-all duration-200 ease-out
              hover:bg-white/5"
            aria-label="Visit FlowBites website"
          >
            <p className="text-white font-bold text-[32px] leading-[40px] md:block hidden">03</p>
            <h3 className="text-7xl md:text-[135px] lg:text-[155px] font-extrabold uppercase tracking-tight
               bg-gradient-to-r from-[#a78bfa] to-[#e0d4ff] text-transparent bg-clip-text
               flex items-center gap-3">
              FlowBites
              <Image
                className="ml-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-[0.5rad]"
                src='/Images/Arrow.png'
                width={22}
                height={50}
                alt=""
                aria-hidden="true"
              />
            </h3>
          </a>

        </div>
      </div>
    </div>
  );
};
export default OurProducts;
