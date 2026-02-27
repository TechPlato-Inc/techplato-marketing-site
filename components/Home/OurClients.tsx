import image1 from "@/public/Images/Group 1000003319.png";
import image2 from "@/public/Images/Vector.png";
import image3 from "@/public/Images/Group 1000003320.png";
import image4 from "@/public/Images/Vector (1).png";
import image5 from "@/public/Images/Group 1000003327.png";
import image6 from "@/public/Images/Group 1000003323.png";
import image7 from "@/public/Images/Group 1000003325.png";
import image8 from "@/public/Images/Group 1000003326.png";
import Image from "next/image";

const clientLogos = [
  { src: image1, alt: "Client logo 1" },
  { src: image2, alt: "Client logo 2" },
  { src: image3, alt: "Client logo 3" },
  { src: image4, alt: "Client logo 4" },
  { src: image5, alt: "Client logo 5" },
  { src: image6, alt: "Client logo 6" },
  { src: image7, alt: "Client logo 7" },
  { src: image8, alt: "Client logo 8" },
];

const OurClients = () => {
  return (
    <section
      className="bg-[#0D1229] py-12 md:py-16 border-t border-b border-white/[0.06]"
      aria-label="Trusted by leading companies"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <p
          data-aos="fade-up"
          className="text-center text-white/55 font-poppins font-semibold text-sm md:text-base tracking-widest uppercase mb-8"
        >
          Trusted by 50+ Companies Worldwide
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
        >
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="grayscale opacity-50 hover:grayscale-0 hover:opacity-85 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
