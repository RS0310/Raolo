import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutDough from "@/assets/about-dough.jpg";
import ingredientsImg from "@/assets/ingredients.jpg";
import { useState } from "react";

const suppliers = [
  {
    name: "Tomate San Marzano D.O.P.",
    origin: "Campania, Italia",
    region: "🍅",
    short: "Cultivados en las faldas del Vesubio, base de toda pizza napolitana auténtica.",
    long: "Los tomates San Marzano D.O.P. se cultivan exclusivamente en el Valle del Sarno, en la región de Campania. La tierra volcánica del Vesubio les otorga su sabor dulce e intenso, con baja acidez. Cada lata que utilizamos proviene de productores certificados que siguen métodos tradicionales de cultivo y recolección manual.",
  },
  {
    name: "Mozzarella Fior di Latte",
    origin: "Agerola, Italia",
    region: "🧀",
    short: "Producida artesanalmente cada día con leche fresca de la Costa Amalfitana.",
    long: "Nuestra Fior di Latte proviene de las colinas de Agerola, donde la leche de vaca se transforma en mozzarella siguiendo técnicas ancestrales de pasta filata. Se produce fresca cada mañana, garantizando su textura cremosa y elástica. La calidad del pasto de montaña le confiere un sabor delicado y ligeramente dulce.",
  },
  {
    name: "Harina Tipo 00",
    origin: "Molino Caputo, Nápoles",
    region: "🌾",
    short: "La harina preferida por los pizzaioli napolitanos para una masa ligera y aireada.",
    long: "Molino Caputo lleva desde 1924 moliendo trigo con métodos lentos y a baja temperatura, preservando las propiedades naturales del grano. Su harina Tipo 00 tiene el nivel exacto de proteína (12.5%) para crear una masa que fermenta lentamente, desarrollando alveolos irregulares y ese borde (cornicione) crujiente por fuera y suave por dentro.",
  },
  {
    name: "Aceite de Oliva Virgen Extra",
    origin: "Puglia, Italia",
    region: "🫒",
    short: "Prensado en frío de aceitunas Coratina, sabor afrutado e intenso.",
    long: "Nuestro aceite proviene de olivares centenarios en Puglia, la mayor región productora de Italia. Las aceitunas Coratina se recolectan a mano en octubre, cuando alcanzan su punto óptimo de maduración, y se prensan en frío dentro de las primeras 24 horas. El resultado es un aceite con notas herbáceas, ligeramente picante, perfecto para realzar cada pizza.",
  },
  {
    name: "Grana Padano D.O.P.",
    origin: "Valle del Po, Italia",
    region: "🧀",
    short: "Queso curado mínimo 9 meses, con sabor intenso y granuloso.",
    long: "El Grana Padano D.O.P. se produce en la Pianura Padana desde el siglo XII. Cada rueda madura un mínimo de 9 meses en cámaras controladas, desarrollando su textura granulosa y su sabor rico y complejo. Utilizamos piezas seleccionadas que rallamos al momento para cada pizza.",
  },
  {
    name: "Gorgonzola D.O.P.",
    origin: "Lombardía, Italia",
    region: "🧀",
    short: "Queso azul cremoso con vetas características, producido artesanalmente.",
    long: "Nuestro Gorgonzola D.O.P. proviene de queserías artesanales de Lombardía. Este queso azul de pasta blanda se elabora con leche entera de vaca y se madura durante 60 días, durante los cuales desarrolla sus vetas azul-verdosas características. Su sabor es intenso pero equilibrado, perfecto para nuestras pizzas de quesos.",
  },
];

const Nosotros = () => {
  const [expandedSupplier, setExpandedSupplier] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">
            Raolo's
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
            Nuestra Historia y Valores
          </h1>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-20 px-6">
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

      {/* Nuestras Raíces */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">
              Nuestras Raíces
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              El barrio, el saber hacer
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Todo comienza en el barrio. En las calles estrechas de Nápoles, donde el olor a masa
                recién horneada se mezcla con la brisa del Mediterráneo, aprendimos que una buena pizza
                no se hace: se siente.
              </p>
              <p>
                El saber hacer es nuestra herencia más valiosa. Cada gesto — desde el amasado hasta
                el último giro en el horno — ha sido perfeccionado a lo largo de generaciones. No
                seguimos recetas, seguimos una filosofía: respeto por la materia prima, paciencia en
                la elaboración y amor por el oficio.
              </p>
              <p>
                De Nápoles a París, de París a San Salvador. Llevamos nuestras raíces allá donde
                vamos, adaptando nuestra propuesta al paladar local sin perder jamás la esencia
                de lo que somos.
              </p>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              src={ingredientsImg}
              alt="Ingredientes frescos italianos"
              width={800}
              height={1000}
              loading="lazy"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Proveedores */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">
              Proveedores
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Del origen a tu mesa
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Seleccionamos cuidadosamente cada ingrediente, importándolos directamente de
              los mejores productores italianos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {suppliers.map((supplier, i) => (
              <div
                key={i}
                className="p-8 bg-card border border-border hover:border-primary/30 transition-colors cursor-pointer"
                onClick={() => setExpandedSupplier(expandedSupplier === i ? null : i)}
              >
                <span className="text-3xl mb-4 block">{supplier.region}</span>
                <p className="font-body text-xs tracking-widest uppercase text-primary mb-2">
                  {supplier.origin}
                </p>
                <h3 className="font-display text-lg font-medium text-foreground mb-3">
                  {supplier.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {supplier.short}
                </p>

                {expandedSupplier === i && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {supplier.long}
                    </p>
                  </div>
                )}

                <button className="mt-4 font-body text-xs tracking-widest uppercase text-primary hover:text-primary/70 transition-colors">
                  {expandedSupplier === i ? "Menos info" : "Más info →"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;
