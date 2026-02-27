'use client'

import Arrow from "@/public/Images/ph_arrow-up-thin.png";
import Image from "next/image";
import MagneticButton from "@/components/Shared/MagneticButton";
import FadeIn from "@/components/Shared/FadeIn";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-[#050A1A] via-[#080E24] to-[#050A1A]">
    <div id="contact" className="md:pt-32 pt-20 pb-10 max-w-screen-xl md:mx-auto px-4 overflow-hidden" >
      <div className="flex md:flex-row flex-col md:justify-between md:mx-0 md:items-center gap-10 md:gap-14 lg:gap-20 relative" >
        <div>
          <FadeIn direction="up">
            <h1 className="md:leading-28 lg:leading-[156px] LarkenDEMOFont text-6xl md:text-[110px] lg:text-9xl font-bold gradient-text-style-1">
              Let&apos;s
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.15}>
            <h1 className="md:leading-28 lg:leading-[156px] LarkenDEMOFont text-6xl md:text-[110px] lg:text-9xl font-bold gradient-text-style-1">
              talk.
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <h1 className="text-white/55 text-2xl md:text-[54px] lg:text-[64px] md:leading-[72px] LarkenDEMOFont font-bold mt-6 lg:mt-10 lg:mb-9 mb-3">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@techplato.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200" >info@techplato.com</a>
            </h1>
          </FadeIn>
        </div>
        <FadeIn direction="left" delay={0.3} className="flex justify-end sm:absolute right-10">
          <MagneticButton
            href="https://calendar.app.google/rmCjyc4Lxqx4oV2D6"
            strength={0.4}
          >
            <div className="
              flex border h-40 w-40 justify-center items-center
              bg-white/6 border-white/12 py-6 px-5 rounded-full
              backdrop-blur-xl
              shadow-[0_8px_32px_rgba(109,91,255,0.1)]
              transition-all duration-200 ease-out
              hover:scale-105 hover:shadow-[0_12px_40px_rgba(109,91,255,0.2)] hover:border-white/25">
              <div className="flex flex-col justify-center items-center">
                <p className="text-xl font-semibold text-white">Book a Call</p>
                <Image width="28.5" src={Arrow} alt="arrow" className="brightness-0 invert" />
              </div>
            </div>
          </MagneticButton>
        </FadeIn>
      </div>
    </div>
    </div>
  );
};

export default Contact;
