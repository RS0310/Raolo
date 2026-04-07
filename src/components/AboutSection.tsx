import aboutDough from "@/assets/about-dough.jpg";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="overflow-hidden">
          <img
            src={aboutDough}
            alt="Manos trabajando la masa artesanal"
            width={800}
            height={1000}
            loading="lazy"
            className="w-full h-[500px] object-cover"
          />
        </div>

        <div>
          <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">
            Nuestra Historia
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Tradición e innovación en cada masa
          </h2>
          <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
            <p>
              Raolo's nace de la pasión por la auténtica pizza napolitana, heredada de generaciones
              de maestros pizzaioli. Cada pizza que servimos es el resultado de años de dedicación,
              viajes a Nápoles y la búsqueda incansable de los mejores ingredientes.
            </p>
            <p>
              Con presencia en París y San Salvador, unimos dos mundos: la elegancia de la gastronomía
              francesa con la calidez y sabor de la tradición italiana, creando una experiencia
              culinaria única e inolvidable.
            </p>
            <p>
              Nuestra masa fermenta durante 72 horas, utilizamos harina italiana tipo 00 y
              cocinamos en horno de leña a más de 450°C — la forma en que se ha hecho siempre.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
