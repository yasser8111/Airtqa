import Button from "../common/Button";

const HeroSection = () => {
  return (
    <>
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Background"
          className="w-full h-full max-h-[650px] object-contain"
        />
      </div>

      <div className="relative z-10 container-custom py-20 min-h-[600px] w-full">
        <div className="max-w-2xl">
          <h1 className="text-7xl font-bold text-blue leading-tight">
            لنرتقي
            <br />
            بأخلاقنا وعلمنا
          </h1>
          <p className="mt-6 text-2xl text-gold font-bold tracking-wide mb-40">
            Rising with Ethics and Knowledge
          </p>

          <Button variant="primary" className="scale-120">ابدأ الان</Button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
