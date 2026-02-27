import LinkedIn from "@/public/Images/Vector (18).png";
import Facebook from "@/public/Images/Vector (19).png";
import Behance from "@/public/Images/Vector (20).png";
import Dribbble from "@/public/Images/Group 1000003316 (1).png";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-[#050A1A] border-t border-white/[0.08]">
    <div id="anchor-name" className="py-16 max-w-screen-xl mx-auto px-4">
      <div data-aos="fade-up" className="flex items-center gap-5">
        <p className="hidden md:block LarkenDEMOFont text-white font-bold text-xl">
          Follow Us
        </p>
        <p data-aos="fade-up" data-aos-delay="200" className="font-poppins block md:hidden text-white text-[16px] sm:text-xl">
          Follow Us
        </p>
        <div className="w-11 h-0.5 bg-white/20"></div>
      </div>
      <div data-aos="fade-up" data-aos-delay="200" className="mt-5 sm:mt-6 flex gap-2 sm:gap-4 items-center">
        <a href="https://ca.linkedin.com/company/techplato" aria-label="Follow us on LinkedIn">
          {" "}
          <Image className="size-10 sm:size-12 transform transition duration-200 ease-out hover:scale-110 brightness-0 invert opacity-70 hover:opacity-100" src={LinkedIn} alt="LinkedIn" height={50} width={50} />
        </a>
        <a href="https://www.facebook.com/techplato/" aria-label="Follow us on Facebook">
          <Image className="size-10 sm:size-12 transform transition duration-200 ease-out hover:scale-110 brightness-0 invert opacity-70 hover:opacity-100" src={Facebook} alt="Facebook" height={50} width={50}/>
        </a>
        <a href="https://www.behance.net/" aria-label="Follow us on Behance">
          <Image className="size-10 sm:size-12 transform transition duration-200 ease-out hover:scale-110 brightness-0 invert opacity-70 hover:opacity-100" src={Behance} alt="Behance" height={50} width={50}/>
        </a>
        <a href="https://dribbble.com/" aria-label="Follow us on Dribbble">
          {" "}
          <Image className="size-10 sm:size-12 transform transition duration-200 ease-out hover:scale-110 brightness-0 invert opacity-70 hover:opacity-100" src={Dribbble} alt="Dribbble" height={50} width={50}/>
        </a>
      </div>
      <div data-aos="fade-up" data-aos-offset="0" data-aos-delay="300" className="flex items-center md:gap-10 gap-5 mt-10">
        <p className="leading-5 sm:text-xl text-white/55">
          &copy;2026 TechPlato, Inc.
        </p>
        <div>
          <a className="leading-5 sm:text-xl text-white/55 hover:text-white transition-colors duration-200" href="#">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
    </footer>
  );
};
export default Footer;
