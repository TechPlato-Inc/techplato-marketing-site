'use client'

import LinkedIn from "@/public/Images/Vector (18).png";
import Facebook from "@/public/Images/Vector (19).png";
import Behance from "@/public/Images/Vector (20).png";
import Dribbble from "@/public/Images/Group 1000003316 (1).png";
import Image from "next/image";
import FadeIn from "@/components/Shared/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/Shared/StaggerContainer";

const socialLinks = [
  { href: "https://ca.linkedin.com/company/techplato", label: "Follow us on LinkedIn", src: LinkedIn, alt: "LinkedIn" },
  { href: "https://www.facebook.com/techplato/", label: "Follow us on Facebook", src: Facebook, alt: "Facebook" },
  { href: "https://www.behance.net/", label: "Follow us on Behance", src: Behance, alt: "Behance" },
  { href: "https://dribbble.com/", label: "Follow us on Dribbble", src: Dribbble, alt: "Dribbble" },
];

const Footer = () => {
  return (
    <footer className="bg-[#050A1A] border-t border-white/[0.08]">
    <div id="anchor-name" className="py-16 max-w-screen-xl mx-auto px-4">
      <FadeIn direction="up">
        <div className="flex items-center gap-5">
          <p className="hidden md:block LarkenDEMOFont text-white font-bold text-xl">
            Follow Us
          </p>
          <p className="font-poppins block md:hidden text-white text-[16px] sm:text-xl">
            Follow Us
          </p>
          <div className="w-11 h-0.5 bg-white/20"></div>
        </div>
      </FadeIn>
      <StaggerContainer staggerDelay={0.06} className="mt-5 sm:mt-6 flex gap-2 sm:gap-4 items-center">
        {socialLinks.map((link) => (
          <StaggerItem key={link.alt}>
            <a href={link.href} aria-label={link.label}>
              <Image className="size-10 sm:size-12 transform transition duration-200 ease-out hover:scale-110 brightness-0 invert opacity-70 hover:opacity-100" src={link.src} alt={link.alt} height={50} width={50} />
            </a>
          </StaggerItem>
        ))}
      </StaggerContainer>
      <FadeIn direction="up" delay={0.3}>
        <div className="flex items-center md:gap-10 gap-5 mt-10">
          <p className="leading-5 sm:text-xl text-white/55">
            &copy;2026 TechPlato, Inc.
          </p>
          <div>
            <a className="leading-5 sm:text-xl text-white/55 hover:text-white transition-colors duration-200" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
    </footer>
  );
};
export default Footer;
