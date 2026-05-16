import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import NewsSection from "../components/home/NewsSection";
import Breadcrumbs from "../components/common/Breadcrumbs";

function News({ onNavigate }) {
  return (
    <div className="bg-white font-sans min-h-screen flex flex-col" dir="rtl">
      <Header onNavigate={onNavigate} />

      <main className="flex flex-col flex-1">
        <div className="container-custom mt-6 reveal w-full text-right">
          <Breadcrumbs />
        </div>
        <NewsSection limit={10} onNavigate={onNavigate} title="جميع الاخبار" />
      </main>

      <Footer />
    </div>
  );
}

export default News;
