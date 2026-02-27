'use client'
import facebook from "@/public/Images/Fa.png";
import Behance from "@/public/Images/Be.png";
import Dribbble from "@/public/Images/Vs.png";
import Linkdin from "@/public/Images/In.png";
import VerticleLine from "@/public/Images/Verticle Line.png";
import MouseIcon from "@/public/Images/Mouse Icon.png";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div id="home" className="main ">
      <video autoPlay loop muted playsInline preload="metadata" src='/Videos/HeroSectionBackground.mp4' />
      {/* Dark overlay for WCAG AA contrast */}
      <div className="absolute inset-0 bg-black/40 z-0" aria-hidden="true" />
      <div className="content pb-16 px-4 z-10">
        <div className="mt-60 md:mt-32 lg:mt-44 ">
          <div >
            <h1 data-aos="fade-up" className="HeroSectionHeading uppercase md:text-center font-bold text-white text-[43px] leading-14 md:leading-[72px] sm:text-6xl 2xl:text-[96px] sm:leading-16 md:text-7xl lg:leading-18 2xl:leading-24 mb-10 LarkenDEMOFont tracking-tight">
              <span className="ml-24 md:mr-48">Consulting</span> <br />
              <span className="gradient-text-style-1-style-2">For Innovation</span> <div></div>
              <span className="ml-16">Products</span> <br />{" "}
              <span className="gradient-text-style-1-style-2 ml-16 md:mr-48">for Growth</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" className="md:block hidden mt-3 sm:mt-10 text-[22px] 2xl:text-3xl 2xl:leading-9 leading-relaxed font-poppins text-white/75 text-center">
              AI-powered products and digital platforms <br /> that scale with your ambition.
            </p>
            <p data-aos="fade-up" data-aos-delay="100" className="md:hidden block mt-3 sm:mt-10 text-[16px] leading-relaxed font-poppins text-white/75 text-center">
              AI-powered products and platforms <br /> that scale with your ambition.
            </p>
            {/* CTA Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-12 justify-center items-center"
            >
              <a
                href="https://calendar.app.google/rmCjyc4Lxqx4oV2D6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base sm:text-lg px-8 py-4"
                aria-label="Book a strategy call with TechPlato"
              >
                Book a Strategy Call
              </a>
              <a
                href="#ourProducts"
                className="btn-secondary text-base sm:text-lg px-8 py-4"
                aria-label="Explore our brands and products"
              >
                Explore Our Brands
              </a>
            </div>
          </div>
          {/* social icons  */}
          <div className="hidden lg:flex flex-col items-center justify-center absolute -right-25  2xl:right-17 top-32 2xl:bottom-0 p-4 xl:mr-32 " data-aos="fade-left">
            <a href="https://ca.linkedin.com/company/techplato" aria-label="Follow us on LinkedIn">
              {" "}
              <Image src={Linkdin} className="w-6 h-6 mb-3 transform transition duration-300 hover:scale-125 hover:rotate-6" alt="LinkedIn" />
            </a>
            <a href="https://www.facebook.com/techplato/" aria-label="Follow us on Facebook">
              {" "}
              <Image src={facebook} className="w-6 h-6 mb-3 transform transition duration-300 hover:scale-125 hover:rotate-6" alt="Facebook" />
            </a>
            <a href="https://dribbble.com/" aria-label="Follow us on Dribbble">
              {" "}
              <Image src={Dribbble} className="w-6 h-6 mb-3 transform transition duration-300 hover:scale-125 hover:rotate-6" alt="Dribbble" />
            </a>
            <a href="https://www.behance.net/" aria-label="Follow us on Behance">
              {" "}
              <Image src={Behance} className="w-6 h-6 mb-3 transform transition duration-300 hover:scale-125 hover:rotate-6" alt="Behance" />
            </a>
            <Image src={VerticleLine} className=" mb-3 transform transition duration-300 hover:scale-125 hover:rotate-6" alt="Decorative vertical line" />

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
        </div>

        {/* for Mobile  */}
        <div className="flex w-full flex-col justify-end mt-10  lg:hidden ">
          <div className="flex items-center justify-end  lg:hidden ">
            <p className="text-white  font-semibold ">
              <span className=" ">Follow Us</span>
            </p>
            <Image src={VerticleLine} alt="Decorative vertical line" className=" mx-8  rotate-90" />
          </div>
          <div className=" lg:hidden  flex gap-3  justify-end ">
            <a href="https://ca.linkedin.com/company/techplato" aria-label="Follow us on LinkedIn">
              {" "}
              <Image src={Linkdin} className="w-6 h-6 " alt="LinkedIn" />
            </a>
            <a href="https://www.facebook.com/techplato/" aria-label="Follow us on Facebook">
              {" "}
              <Image src={facebook} className="w-6 h-6 " alt="Facebook" />
            </a>
            <a href="https://dribbble.com/" aria-label="Follow us on Dribbble">
              {" "}
              <Image src={Dribbble} className="w-6 h-6 " alt="Dribbble" />
            </a>
            <a href="https://www.behance.net/" aria-label="Follow us on Behance">
              {" "}
              <Image src={Behance} className="w-6 h-6" alt="Behance" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
