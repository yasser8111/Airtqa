import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import NewsSection from "../components/home/NewsSection";

function NewPage({ onNavigate }) {
  return (
    <div className="bg-white font-sans" dir="rtl">
      <Header onNavigate={onNavigate} />

      <main className="flex flex-col">
        <NewsSection limit={6} onNavigate={onNavigate} title="جميع الاخبار" />
      </main>

      <Footer />
    </div>
  );
}

export default NewPage;
