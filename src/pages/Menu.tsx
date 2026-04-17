import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroPizza from "@/assets/hero-pizza.jpg";
import sinsimba from "@/assets/pizzas/sinsimba.jpg";
import cupido from "@/assets/pizzas/cupido.jpg";
import diavola from "@/assets/pizzas/diavola.jpg";
import prosciuttoFunghi from "@/assets/pizzas/prosciutto-funghi.jpg";
import fratello from "@/assets/pizzas/fratello.jpg";
import porcorosso from "@/assets/pizzas/porcorosso.jpg";
import maiale from "@/assets/pizzas/maiale.jpg";
import alba from "@/assets/pizzas/alba.jpg";
import nuvole from "@/assets/pizzas/nuvole.jpg";
import eva from "@/assets/pizzas/eva.jpg";

const pizzas = [
  {
    name: "Sinsimba",
    image: sinsimba,
    description:
      "Base de tomates italianos de Apulia, Fior di latte, Grana Padano DOP, albahaca fresca y AOVE.",
    price: "€13",
  },
  {
    name: "Cupido",
    image: cupido,
    description:
      "Datterini Caramella (tomate), Fior di latte, Cacioricotta del Cilento, albahaca fresca y AOVE.",
    price: "€14",
  },
  {
    name: "Diavola",
    image: diavola,
    description:
      "Tomate San Marzano DOP, Fior di latte, salame picante calabrés, albahaca fresca y AOVE.",
    price: "€14",
  },
  {
    name: "Prosciutto & Funghi",
    image: prosciuttoFunghi,
    description:
      "Tomate San Marzano DOP, Fior di latte, Grana Padano AOP, prosciutto Cotto, funghi, albahaca fresca y AOVE.",
    price: "€15",
  },
  {
    name: "Fratello",
    image: fratello,
    description:
      "Base de tomates italianos de Apulia, Fior di latte, spianata, Grana Padano DOP, albahaca fresca, pimiento amarillo asado/calabaza asada (según temporada), pesto casero (ajo y perejil) y aceitunas Peranzana.",
    price: "€16",
  },
  {
    name: "Porcorosso",
    image: porcorosso,
    description:
      "San Marzano dell'Agro Sarnese-Nocerino DOP, Fior di latte, salsiccia rossa di Castelpoto, Cacioricotta del Cilento, albahaca fresca y AOVE.",
    price: "€17",
  },
  {
    name: "Maiale",
    image: maiale,
    description:
      "Base de crema de ricotta, Fior di latte, Grana Padano DOP, prosciutto Cotto, pesto de pistacho, coulis frutos rojos y AOVE.",
    price: "€16",
  },
  {
    name: "Alba",
    image: alba,
    description:
      "Base de crema de ricotta, Fior di latte, Grana Padano DOP, aceitunas negras Peranzana, prosciutto Cotto a las hierbas, albahaca fresca y AOVE.",
    price: "€15",
  },
  {
    name: "Nuvole",
    image: nuvole,
    description:
      "Base cremosa de ricotta, provola, Gorgonzola DOP, Fior di latte, Grana Padano DOP, pimienta negra y albahaca fresca.",
    price: "€15",
  },
  {
    name: "Eva",
    image: eva,
    description:
      "Base cremosa de ricotta, Fior di latte, Grana Padano DOP, queso de cabra, Gorgonzola, gel de tatin, almendras tostadas y AOVE.",
    price: "€16",
  },
];

const Menu = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16">
        <div className="h-[50vh] overflow-hidden relative">
          <img
            src={heroPizza}
            alt="Nuestras pizzas artesanales"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="font-body text-sm tracking-widest uppercase text-primary-foreground/80 mb-4">
                Nuestras Pizzas
              </p>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground">
                Le Menu
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="py-16 px-6 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-muted-foreground leading-relaxed text-lg italic">
            "Cada pizza es una declaración de principios: masa fermentada 72 horas, ingredientes
            italianos D.O.P. y horno de leña a más de 450°C. Sin atajos, sin compromisos."
          </p>
        </div>
      </section>

      {/* Pizza Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {pizzas.map((pizza, i) => (
              <article key={i} className="group">
                <div className="aspect-square overflow-hidden bg-card mb-5">
                  <img
                    src={pizza.image}
                    alt={`Pizza ${pizza.name}`}
                    width={768}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-baseline justify-between mb-2 gap-4">
                  <h3 className="font-display text-2xl font-medium text-foreground">
                    {pizza.name}
                  </h3>
                  <span className="font-display text-xl font-medium text-primary shrink-0">
                    {pizza.price}
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {pizza.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="font-body text-xs text-muted-foreground tracking-wide">
              * Precios orientativos. Todos nuestros ingredientes son importados directamente de Italia.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;
