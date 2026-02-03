import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import WelcomeSection from "../components/home/WelcomeSection";
import NewsSection from "../components/home/NewsSection";
import PartnersSection from "../components/home/PartnersSection";
import StatsSection from "../components/home/StatsSection";
import MapSection from "../components/home/MapSection";

function Home() {
  return (
    <div className="min-h-screen bg-white font-sans" dir="rtl">
      <Header />

      <main className="flex flex-col">
        <Hero />
        <WelcomeSection />
        <NewsSection />
        <PartnersSection />
        <StatsSection />
        <MapSection />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
