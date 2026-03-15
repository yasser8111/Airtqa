import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/home/HeroSection";
import WelcomeSection from "../components/home/WelcomeSection";
import NewsSection from "../components/home/NewsSection";
import PartnersSection from "../components/home/PartnersSection";
import StatsSection from "../components/home/StatsSection";
import MapSection from "../components/home/MapSection";

function Home({ onNavigate }) {
  return (
    <div className="bg-white font-sans" dir="rtl">
      <Header onNavigate={onNavigate} />

      <main className="flex flex-col">
        <HeroSection />
        <WelcomeSection />
        <NewsSection onNavigate={onNavigate} />
        <PartnersSection />
        <StatsSection />
        {/* <MapSection /> */}
      </main>

      <Footer />
    </div>
  );
}

export default Home;
