import Button from "../common/Button";

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100dvh-80px)] flex flex-col justify-center items-center">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Background"
          className="h-full object-contain mr-auto pb-30"
          fetchpriority="high"
        />
      </div>

      <div className="relative z-10 container-custom w-full text-right">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-blue leading-tight mb-5 reveal">
          لنرتقي
          <br />
          بأخلاقنا وعلمنا
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-gold font-bold tracking-wide mb-10 reveal reveal-delay-1">
          Rising with Ethics and Knowledge
        </p>

        <div className="reveal reveal-delay-2 flex justify-start mt-4">
          <Button
            variant="primary"
            size="large"
            onClick={() =>
              document
                .getElementById("Welcome")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            <span>اكتشف المزيد</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
