import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroPizza from "@/assets/hero-pizza.jpg";

const pizzas = [
  {
    name: "Sinsimba",
    description: "Base de tomates italianos de Apulia, Fior di latte, Grana Padano DOP, albahaca fresca y aceite de oliva virgen extra.",
    price: "€13",
  },
  {
    name: "Diavola / Brava",
    description: "Tomate San Marzano DOP, Fior di latte, salame picante calabrés, albahaca fresca, aceite de oliva virgen extra.",
    price: "€14",
  },
  {
    name: "Maiale",
    description: "Base de crema de ricotta, fior di latte, Grana Padano DOP, prosciutto Cotto, pesto de pistacho, coulis frutos rojos, aceite de oliva virgen extra.",
    price: "€16",
  },
  {
    name: "Alba",
    description: "Base de crema de ricotta, fior di latte, Grana Padano DOP, aceitunas negras Peranzana, prosciutto Cotto a las hierbas, albahaca fresca y aceite de oliva virgen extra.",
    price: "€15",
  },
  {
    name: "Nuvole",
    description: "Base cremosa de ricotta, provola, gorgonzola DOP, fior di latte, grana padano DOP, pimienta negra y albahaca fresca.",
    price: "€15",
  },
  {
    name: "Eva",
    description: "Fior di latte, Grana Padano DOP, queso de cabra, Gorgonzola, gel de tatin, aceite oliva virgen extra.",
    price: "€16",
  },
  {
    name: "Tris",
    description: "Fior di latte, Grana Padano DOP, gorgonzola, queso de cabra, Scamorza affumicata, pera, miel, aceite de oliva virgen extra.",
    price: "€17",
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

      {/* Pizza List */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-0">
            {pizzas.map((pizza, i) => (
              <div
                key={i}
                className="flex items-start justify-between py-8 border-b border-border last:border-0"
              >
                <div className="flex-1 pr-8">
                  <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-2">
                    {pizza.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xl">
                    {pizza.description}
                  </p>
                </div>
                <span className="font-display text-2xl font-medium text-primary shrink-0 pt-1">
                  {pizza.price}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
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
