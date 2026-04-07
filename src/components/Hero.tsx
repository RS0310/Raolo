import heroPizza from "@/assets/hero-pizza.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroPizza}
          alt="Pizza artesanal napolitana de Raolo's"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      <div className="relative z-10 text-center px-6">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-primary-foreground tracking-tight mb-4 animate-fade-in-up">
          RAOLO'S
        </h1>
        <p className="font-display text-xl md:text-2xl italic text-primary-foreground/80 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Pizza Artesanal Napolitana
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#menu"
            className="px-8 py-3 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
          >
            Ver Menú
          </a>
          <a
            href="#reservar"
            className="px-8 py-3 border border-primary-foreground/60 text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-primary-foreground/10 transition-colors"
          >
            Reservar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
