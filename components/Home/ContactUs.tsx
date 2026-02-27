const ContactUs = () => {
  return (
    <div>
      <div className="bg-gradient-style-1 noise-texture">
        <div className="py-20 md:py-32 px-4 background-image-for-our-products">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-10 md:gap-32">
            <h2 data-aos="fade-up" className="md:text-[64px] md:leading-[72px] text-[32px] leading-[40px] LarkenDEMOFont font-bold gradient-text-style-1-style-3">
              Ready to Build
              <br /> What&apos;s Next?
            </h2>
            <div data-aos="fade-up" data-aos-delay="200">
              <p className="text-white/75 text-[16px] leading-relaxed md:text-[20px] font-poppins">
                Tell us where you&apos;re headed. We&apos;ll show you how
                AI, engineering, and product strategy can get you there faster.
              </p>
              <div className="mt-8 md:mt-10">
                <a
                  href="https://calendar.app.google/rmCjyc4Lxqx4oV2D6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta"
                  aria-label="Schedule a strategy call with TechPlato"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
