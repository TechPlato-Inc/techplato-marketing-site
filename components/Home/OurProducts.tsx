'use client'

import Image from "next/image";
import FadeIn from "@/components/Shared/FadeIn";

const brands = [
  { num: "01", name: "Agency", href: "https://www.techplato.agency/", textSize: "text-7xl md:text-9xl lg:text-[155px]" },
  { num: "02", name: "Condro", href: "https://www.condro.ca/", textSize: "text-7xl md:text-[135px] lg:text-[155px]" },
  { num: "03", name: "FlowBites", href: "https://www.flowbites.com/", textSize: "text-7xl md:text-[135px] lg:text-[155px]" },
];

const OurProducts = () => {
  return (
    <div id="ourProducts" className="bg-gradient-style-1-style-2 mx-auto background-image noise-texture px-4">
      <div className="background-container">
        <div className="max-w-screen-xl mx-auto py-20 md:py-32 ">
          <FadeIn direction="up">
            <p className="font-poppins text-white/55 md:text-[16px] text-[12px]  leading-[24px] font-semibold text-xs tracking-widest">
              O U R <span className="ml-3"> B R A N D S</span>
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h2 className="font-bold mt-3 md:mt-6 mb-7 md:mb-14 gradient-text-style-1-style-3 font-poppins text-[24px] leading-[32px] md:text-[64px] md:leading-[72px] LarkenDEMOFont">
              Products We&apos;ve <br /> Built &amp; Launched
            </h2>
          </FadeIn>

          {brands.map((brand, i) => (
            <FadeIn key={brand.name} direction="up" delay={i * 0.15}>
              <a
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`brand-link flex items-center md:items-end gap-4 group rounded-lg px-4 py-3 -mx-4
                  transition-all duration-200 ease-out
                  hover:bg-white/5 ${i > 0 ? 'mt-8 md:mt-12' : ''}`}
                aria-label={`Visit ${brand.name} website`}
              >
                <p className="text-white font-bold text-[32px] leading-[40px] md:block hidden">{brand.num}</p>
                <h3 className={`${brand.textSize} font-extrabold uppercase tracking-tight
                   bg-gradient-to-r from-[#a78bfa] to-[#e0d4ff] text-transparent bg-clip-text
                   flex items-center gap-3`}>
                  {brand.name}
                  <Image
                    className="brand-arrow ml-4"
                    src='/Images/Arrow.png'
                    width={22}
                    height={50}
                    alt=""
                    aria-hidden="true"
                  />
                </h3>
              </a>
            </FadeIn>
          ))}

        </div>
      </div>
    </div>
  );
};
export default OurProducts;
