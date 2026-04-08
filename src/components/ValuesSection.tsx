import { Link } from "react-router-dom";
import aboutDough from "@/assets/about-dough.jpg";

const ValuesSection = () => {
  return (
    <section id="valores" className="py-24 px-6">
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
            Nuestros Valores
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Lo que nos caracteriza
          </h2>
          <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
            <p>
              En Raolo's creemos que una gran pizza nace del respeto por los ingredientes, 
              el tiempo y la tradición. No tomamos atajos: nuestra masa fermenta 72 horas, 
              nuestros tomates viajan desde las faldas del Vesubio y nuestra mozzarella se 
              produce artesanalmente cada día.
            </p>
            <p>
              Somos una pizzería que honra sus raíces napolitanas mientras abraza la 
              diversidad de culturas que nos rodean — desde París hasta San Salvador.
            </p>
          </div>
          <Link
            to="/valores"
            className="inline-block mt-8 px-8 py-3 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
          >
            Nuestras Raíces
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
