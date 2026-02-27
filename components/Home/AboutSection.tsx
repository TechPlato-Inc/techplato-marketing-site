'use client'

import checkMark from "@/public/Images/checkMark.png";
import Image from "next/image";
import TiltCard from "@/components/Shared/TiltCard";
import FadeIn from "@/components/Shared/FadeIn";

const AboutCard = () => (
  <div className="premium-surface p-6 md:p-10">
    <p className="font-poppins leading-[22px] text-xl text-white/55 tracking-wide">About TechPlato, Inc.</p>
    <h3 className="font-bold mt-3 mb-3 md:mt-4 md:mb-6 md:text-[48px] md:leading-[56px] text-[24px] leading-[32px] text-white LarkenDEMOFont">
      Strategy, AI &amp; Products — Built to Scale.
    </h3>
    <p className="font-poppins text-white/75 text-[14px] leading-relaxed md:text-lg">
      We partner with businesses to design, build, and scale AI-powered
      products and digital platforms. From first concept to market launch,
      our team brings deep technical expertise and a bias for execution —
      turning ambitious ideas into measurable growth.
    </p>
  </div>
);

const values = [
  { title: "Innovation First:", text: "We build with the latest in AI and modern engineering \u2014 not yesterday\u2019s stack." },
  { title: "Transparency:", text: "Clear scope, honest timelines, no surprises. We earn trust by how we operate." },
  { title: "Partnership:", text: "We embed with your team, share ownership of outcomes, and move as one." },
  { title: "Quality:", text: "Every line of code and every pixel ships at a standard we\u2019d stake our name on." },
  { title: "Impact Driven:", text: "Revenue, retention, performance \u2014 we measure ourselves by the results you see." },
];

const ValuesCard = () => (
  <div className="premium-surface p-6 md:p-10">
    <p className="font-bold text-xl mb-3 md:mb-5 LarkenDEMOFont text-white">Our Values</p>
    {values.map((value, i) => (
      <FadeIn key={i} direction="up" delay={i * 0.08}>
        <div className="flex gap-2 md:mb-3">
          <Image src={checkMark} className="h-[20px] mt-1 brightness-0 invert" height={50}
            width={30} alt="Checkmark" />
          <p className="font-poppins text-white/75 text-[14px] leading-relaxed md:text-xl">
            <span className="font-semibold text-white text-[14px] leading-7 md:text-xl">{value.title}</span> {value.text}
          </p>
        </div>
      </FadeIn>
    ))}
  </div>
);

const AboutSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#050A1A] via-[#080E24] to-[#050A1A]">
    <div id="aboutUs" className="max-w-screen-xl mx-auto">
      <div className="pb-20 md:pb-32 pt-20 md:pt-32 mx-4">

        <div
          className="grid lg:grid-cols-2 z-50 items-end md:gap-24 gap-10"
        >
          {/* Left Column — About + Stats (desktop: tilt, mobile: static) */}
          <FadeIn direction="right">
            <div className="hidden lg:block">
              <TiltCard>
                <AboutCard />
              </TiltCard>
            </div>
            <div className="lg:hidden">
              <AboutCard />
            </div>
          </FadeIn>

          {/* Right Column — Values (desktop: tilt, mobile: static) */}
          <FadeIn direction="left" delay={0.2}>
            <div className="hidden lg:block">
              <TiltCard>
                <ValuesCard />
              </TiltCard>
            </div>
            <div className="lg:hidden">
              <ValuesCard />
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutSection;
