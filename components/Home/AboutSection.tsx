import checkMark from "@/public/Images/checkMark.png";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#050A1A] via-[#080E24] to-[#050A1A]">
    <div id="aboutUs" className="max-w-screen-xl mx-auto">
      <div className="pb-20 md:pb-32 pt-20 md:pt-32 mx-4">

        <div
          className="grid lg:grid-cols-2 z-50 items-end md:gap-24 gap-10"
        >
          {/* Left Column — About + Stats */}
          <div className="premium-surface p-6 md:p-10">
            <p data-aos="fade-right" data-aos-delay="100" className="font-poppins leading-[22px] text-xl text-white/55 tracking-wide">About TechPlato, Inc.</p>
            <h3 data-aos="fade-right" className="font-bold mt-3 mb-3 md:mt-4 md:mb-6 md:text-[48px] md:leading-[56px] text-[24px] leading-[32px] text-white LarkenDEMOFont">
              Strategy, AI &amp; Products — Built to Scale.
            </h3>
            <p data-aos="fade-right" data-aos-delay="300" className="font-poppins text-white/75 text-[14px] leading-relaxed md:text-lg">
              We partner with businesses to design, build, and scale AI-powered
              products and digital platforms. From first concept to market launch,
              our team brings deep technical expertise and a bias for execution —
              turning ambitious ideas into measurable growth.
            </p>
          </div>

          {/* Right Column — Values */}
          <div data-aos="fade-up" data-aos-delay="300" className="premium-surface p-6 md:p-10">
            <p className="font-bold text-xl mb-3 md:mb-5 LarkenDEMOFont text-white">Our Values</p>
            <div className="flex gap-2 md:mb-3">
              <Image src={checkMark} className="h-[20px] mt-1 brightness-0 invert" height={50}
                width={30} alt="Checkmark" />
              <p className="font-poppins text-white/75 text-[14px] leading-relaxed md:text-xl">
                <span className="font-semibold text-white text-[14px] leading-7 md:text-xl">Innovation First:</span> We build with the latest in AI and modern engineering — not yesterday&apos;s stack.
              </p>
            </div>
            <div className="flex gap-2 md:mb-3">
              <Image src={checkMark} height={50}
                width={30} className="h-[20px] mt-1 brightness-0 invert" alt="Checkmark" />
              <p className="font-poppins text-white/75 text-[14px] leading-relaxed md:text-xl">
                <span className="font-semibold text-white text-[14px] leading-[22px] md:text-xl">Transparency:</span> Clear scope, honest timelines, no surprises. We earn trust by how we operate.
              </p>
            </div>
            <div className="flex gap-2 md:mb-3">
              <Image
                src={checkMark}
                className="h-[20px] mt-1 brightness-0 invert"
                alt="Checkmark"
                height={50}
                width={30}
              />
              <p className="font-poppins text-white/70 text-[14px] md:text-xl">
                <span className="font-semibold text-white text-[14px] md:text-xl">Partnership:</span> We embed with your team, share ownership of outcomes, and move as one.
              </p>
            </div>
            <div className="flex gap-2 md:mb-3">
              <Image
                src={checkMark}
                className="h-[20px] mt-1 brightness-0 invert"
                alt="Checkmark"
                height={50}
                width={30}
              />
              <p className="font-poppins text-white/75 text-[14px] leading-relaxed md:text-xl">
                <span className="font-semibold text-white text-[14px] leading-[22px] md:text-xl">Quality:</span> Every line of code and every pixel ships at a standard we&apos;d stake our name on.
              </p>
            </div>
            <div className="flex gap-2 md:mb-3">
              <Image
                src={checkMark}
                className="h-[20px] mt-1 brightness-0 invert"
                alt="Checkmark"
                height={50}
                width={30}
              />
              <p className="font-poppins text-white/75 text-[14px] leading-relaxed md:text-xl">
                <span className="font-semibold text-white text-[14px] leading-[22px] md:text-xl">Impact Driven:</span> Revenue, retention, performance — we measure ourselves by the results you see.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutSection;
