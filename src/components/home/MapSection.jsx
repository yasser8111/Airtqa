import React from "react";

const MapSection = () => {
  return (
    <section className="relative h-[500px] w-full bg-gray-200">
      <div className="absolute top-0 right-0 z-10 p-8 pointer-events-none">
        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg pointer-events-auto">
          <h2 className="text-3xl font-bold text-dark mb-1">الخريطة</h2>
          <div className="h-1 w-12 bg-gold rounded-full"></div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14876.16641774346!2d44.208198649999995!3d21.2306775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e984950364985b%3A0xe54e223b9255ea!2sYemen!5e0!3m2!1sen!2s!4v1652014456789!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0, filter: "grayscale(0%)" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Decorative gradient overlay at bottom to blend with footer if needed */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
};

export default MapSection;
