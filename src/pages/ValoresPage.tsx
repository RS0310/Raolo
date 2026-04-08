import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ingredientsImg from "@/assets/ingredients.jpg";

const roots = [
  {
    title: "El Barrio",
    description:
      "Raolo's nació en un barrio donde la comida es más que alimento: es encuentro, conversación y comunidad. Esa esencia de barrio, donde el pizzaiolo conoce a cada cliente, es lo que llevamos a cada uno de nuestros locales.",
  },
  {
    title: "El Saber Hacer",
    description:
      "Detrás de cada pizza hay años de formación con maestros napolitanos, viajes a Italia y una obsesión por perfeccionar cada detalle: la temperatura del horno, el punto exacto de fermentación, la textura de la masa. No improvisamos, dominamos.",
  },
  {
    title: "La Familia",
    description:
      "Raolo's es un proyecto familiar, nacido de la pasión compartida y del sueño de llevar la auténtica pizza napolitana a nuevos horizontes. Cada miembro aporta algo único: la receta de la abuela, el ojo para el detalle, el espíritu aventurero.",
  },
];

const suppliers = [
  {
    name: "Tomate San Marzano D.O.P.",
    origin: "Campania, Italia",
    brief: "Cultivados en las faldas del Vesubio, la base de toda auténtica pizza napolitana.",
    detail:
      "El tomate San Marzano D.O.P. crece exclusivamente en los suelos volcánicos del Valle del Sarno, al pie del Vesubio. Su pulpa densa, dulce y con baja acidez lo convierte en el tomate perfecto para la salsa de pizza. Nuestro proveedor, una familia de agricultores de tercera generación, cultiva sin pesticidas y cosecha a mano entre julio y septiembre, garantizando la máxima calidad en cada lata.",
  },
  {
    name: "Mozzarella Fior di Latte",
    origin: "Agerola, Italia",
    brief: "Producida artesanalmente cada día con leche fresca de la Costa Amalfitana.",
    detail:
      "En las colinas de Agerola, a 600 metros sobre el nivel del mar, nuestro quesero utiliza exclusivamente leche de vacas que pastan libremente. La mozzarella se produce cada mañana siguiendo el método tradicional de hilado a mano: la cuajada se estira y se moldea en agua caliente, creando esa textura elástica y cremosa que se funde perfectamente sobre la pizza.",
  },
  {
    name: "Harina Tipo 00",
    origin: "Molino Caputo, Nápoles",
    brief: "La harina preferida por los pizzaioli napolitanos desde 1924.",
    detail:
      "El Molino Caputo lleva casi un siglo moliendo trigo con métodos lentos que preservan las propiedades del grano. Su harina Tipo 00 'Pizzeria' tiene el nivel exacto de proteína (12.5%) y elasticidad para crear una masa que fermenta lentamente, desarrollando burbujas de aire que al hornearse producen esa corteza crujiente por fuera y tierna por dentro que define a la pizza napolitana.",
  },
  {
    name: "Aceite de Oliva Virgen Extra",
    origin: "Puglia, Italia",
    brief: "Prensado en frío de aceitunas Coratina, con sabor afrutado e intenso.",
    detail:
      "Nuestro aceite proviene de olivares centenarios en la región de Puglia, el 'talón' de la bota italiana. Las aceitunas Coratina se recogen verdes, a principios de temporada, y se prensan en frío en las primeras 24 horas tras la cosecha. El resultado es un aceite con notas de alcachofa y almendra, un picor elegante y un color verde intenso que realza cada pizza con un toque final de autenticidad.",
  },
];

const ValoresPage = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center">
        <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">
          Quiénes Somos
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-semibold text-foreground mb-6">
          Nuestras Raíces
        </h1>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto">
          Detrás de cada pizza hay una historia, unos valores y un compromiso con la autenticidad 
          que nos define.
        </p>
      </section>

      {/* Roots sections */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {roots.map((root, i) => (
            <div key={i} className="border-b border-border pb-12 last:border-0">
              <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
                {root.title}
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed max-w-3xl">
                {root.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Full-width image divider */}
      <div className="overflow-hidden">
        <img
          src={ingredientsImg}
          alt="Ingredientes frescos italianos"
          width={1200}
          height={600}
          loading="lazy"
          className="w-full h-[350px] object-cover"
        />
      </div>

      {/* Suppliers / Products */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">
              Nuestros Proveedores
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Del origen a tu mesa
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Importamos directamente de los mejores productores italianos para garantizar 
              la autenticidad de cada sabor.
            </p>
          </div>

          <div className="space-y-0">
            {suppliers.map((supplier, i) => (
              <div
                key={i}
                className="border-b border-border last:border-0"
              >
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-full flex items-start justify-between py-6 text-left group"
                >
                  <div className="flex-1 pr-8">
                    <p className="font-body text-xs tracking-widest uppercase text-primary mb-1">
                      {supplier.origin}
                    </p>
                    <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-2">
                      {supplier.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {supplier.brief}
                    </p>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-primary mt-2 shrink-0 transition-transform duration-300 ${
                      expanded === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expanded === i ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="font-body text-sm text-muted-foreground leading-relaxed pl-0 pr-8">
                    {supplier.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ValoresPage;
