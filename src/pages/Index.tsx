import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Teaser Nosotros */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">
            Nuestra Historia
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Tradición. Pasión. Sabor.
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Desde las calles de Nápoles hasta tu mesa: masa fermentada 72 horas, ingredientes
            italianos D.O.P. y horno de leña a más de 450°C. Descubre la historia detrás de
            cada pizza.
          </p>
          <Link
            to="/nosotros"
            className="inline-block px-8 py-3 border border-foreground text-foreground font-body text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
          >
            Conócenos
          </Link>
        </div>
      </section>

      {/* Teaser Menú / Filosofía */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">
            Nuestra Filosofía
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Sin atajos, sin compromisos
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto italic text-lg">
            "Cada pizza es una declaración de principios. Ingredientes auténticos, técnica
            napolitana y el respeto por una tradición centenaria."
          </p>
          <Link
            to="/menu"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
          >
            Nuestras Pizzas
          </Link>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
