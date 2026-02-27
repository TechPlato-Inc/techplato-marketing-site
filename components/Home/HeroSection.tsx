'use client'
import facebook from "@/public/Images/Fa.png";
import Behance from "@/public/Images/Be.png";
import Dribbble from "@/public/Images/Vs.png";
import Linkdin from "@/public/Images/In.png";
import VerticleLine from "@/public/Images/Verticle Line.png";
import MouseIcon from "@/public/Images/Mouse Icon.png";
import Image from "next/image";
import MagneticButton from "@/components/Shared/MagneticButton";
import FadeIn from "@/components/Shared/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/Shared/StaggerContainer";
import Parallax from "@/components/Shared/Parallax";

const HeroSection = () => {
  return (
    <div id="home" className="main ">
      <Parallax speed={-0.2} className="absolute inset-0">
        <video autoPlay loop muted playsInline preload="metadata" src='/Videos/HeroSectionBackground.mp4' />
      </Parallax>
      {/* Dark overlay for WCAG AA contrast */}
      <div className="absolute inset-0 bg-black/40 z-0" aria-hidden="true" />
      <div className="content pb-16 px-4 z-10">
        <div className="mt-60 md:mt-32 lg:mt-44 ">
          <div >
            <h1 className="HeroSectionHeading uppercase md:text-center font-bold text-white text-[43px] leading-14 md:leading-[72px] sm:text-6xl 2xl:text-[96px] sm:leading-16 md:text-7xl lg:leading-18 2xl:leading-24 mb-10 LarkenDEMOFont tracking-tight">
              <FadeIn direction="up" delay={0}>
                <span className="ml-24 md:mr-48 block">Consulting</span>
              </FadeIn>
              <FadeIn direction="up" delay={0.15}>
                <span className="gradient-text-style-1-style-2 block">For Innovation</span>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <span className="ml-16 block">Products</span>
              </FadeIn>
              <FadeIn direction="up" delay={0.45}>
                <span className="gradient-text-style-1-style-2 ml-16 md:mr-48 block">for Growth</span>
              </FadeIn>
            </h1>
            <FadeIn direction="up" delay={0.6}>
              <p className="md:block hidden mt-3 sm:mt-10 text-[22px] 2xl:text-3xl 2xl:leading-9 leading-relaxed font-poppins text-white/75 text-center">
                AI-powered products and digital platforms <br /> that scale with your ambition.
              </p>
              <p className="md:hidden block mt-3 sm:mt-10 text-[16px] leading-relaxed font-poppins text-white/75 text-center">
                AI-powered products and platforms <br /> that scale with your ambition.
              </p>
            </FadeIn>
            {/* CTA Buttons */}
            <StaggerContainer
              staggerDelay={0.1}
              className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-12 justify-center items-center"
            >
              <StaggerItem>
                <MagneticButton
                  href="https://calendar.app.google/rmCjyc4Lxqx4oV2D6"
                  target="_blank"
                  rel="noopener noreferrer"
                  ariaLabel="Book a strategy call with TechPlato"
                >
                  <span className="btn-primary text-base sm:text-lg px-8 py-4">
                    Book a Strategy Call
                  </span>
                </MagneticButton>
              </StaggerItem>
              <StaggerItem>
                <MagneticButton
                  href="#ourProducts"
                  ariaLabel="Explore our brands and products"
                >
                  <span className="btn-secondary text-base sm:text-lg px-8 py-4">
                    Explore Our Brands
                  </span>
                </MagneticButton>
              </StaggerItem>
            </StaggerContainer>
          </div>
          {/* social icons  */}
          <FadeIn direction="left" delay={0.8}>
            <div className="hidden lg:flex flex-col items-center justify-center absolute -right-25  2xl:right-17 top-32 2xl:bottom-0 p-4 xl:mr-32 ">
              <StaggerContainer staggerDelay={0.05} className="flex flex-col items-center">
                <StaggerItem direction="left">
                  <a href="https://ca.linkedin.com/company/techplato" aria-label="Follow us on LinkedIn">
                    <Image src={Linkdin} className="w-6 h-6 mb-3 transform transition duration-300 hover:scale-125 hover:rotate-6" alt="LinkedIn" />
                  </a>
                </StaggerItem>
                <StaggerItem direction="left">
                  <a href="https://www.facebook.com/techplato/" aria-label="Follow us on Facebook">
                    <Image src={facebook} className="w-6 h-6 mb-3 transform transition duration-300 hover:scale-125 hover:rotate-6" alt="Facebook" />
                  </a>
                </StaggerItem>
                <StaggerItem direction="left">
                  <a href="https://dribbble.com/" aria-label="Follow us on Dribbble">
                    <Image src={Dribbble} className="w-6 h-6 mb-3 transform transition duration-300 hover:scale-125 hover:rotate-6" alt="Dribbble" />
                  </a>
                </StaggerItem>
                <StaggerItem direction="left">
                  <a href="https://www.behance.net/" aria-label="Follow us on Behance">
                    <Image src={Behance} className="w-6 h-6 mb-3 transform transition duration-300 hover:scale-125 hover:rotate-6" alt="Behance" />
                  </a>
                </StaggerItem>
                <StaggerItem direction="left">
                  <Image src={VerticleLine} className="mb-3" alt="Decorative vertical line" />
                </StaggerItem>
              </StaggerContainer>

              <a href="#anchor-name" aria-label="Follow us on social media">
                <p className="text-white font-semibold mt-4 flex  flex-col ">
                  <span className="transform rotate-90">Follow Us</span>
                </p>
              </a>
              <a
                href="#anchor-name"
                className="inline-block transition-transform duration-500 ease-in-out hover:translate-y-3"
              >
                <Image
                  src={MouseIcon}
                  className="mt-26"
                  alt="Scroll down"
                />
              </a>

            </div>
          </FadeIn>
        </div>

        {/* for Mobile  */}
        <FadeIn direction="up" delay={0.6}>
          <div className="flex w-full flex-col justify-end mt-10  lg:hidden ">
            <div className="flex items-center justify-end  lg:hidden ">
              <p className="text-white  font-semibold ">
                <span className=" ">Follow Us</span>
              </p>
              <Image src={VerticleLine} alt="Decorative vertical line" className=" mx-8  rotate-90" />
            </div>
            <div className=" lg:hidden  flex gap-3  justify-end ">
              <a href="https://ca.linkedin.com/company/techplato" aria-label="Follow us on LinkedIn">
                <Image src={Linkdin} className="w-6 h-6 " alt="LinkedIn" />
              </a>
              <a href="https://www.facebook.com/techplato/" aria-label="Follow us on Facebook">
                <Image src={facebook} className="w-6 h-6 " alt="Facebook" />
              </a>
              <a href="https://dribbble.com/" aria-label="Follow us on Dribbble">
                <Image src={Dribbble} className="w-6 h-6 " alt="Dribbble" />
              </a>
              <a href="https://www.behance.net/" aria-label="Follow us on Behance">
                <Image src={Behance} className="w-6 h-6" alt="Behance" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default HeroSection;
