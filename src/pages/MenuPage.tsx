import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import pizzaMargherita from "@/assets/pizza-margherita.jpg";
import pizzaDiavola from "@/assets/pizza-diavola.jpg";
import pizzaQuattro from "@/assets/pizza-quattro.jpg";
import pizzaProsciutto from "@/assets/pizza-prosciutto.jpg";
import pizzaNapoli from "@/assets/pizza-napoli.jpg";
import pizzaTartufo from "@/assets/pizza-tartufo.jpg";

const pizzas = [
  {
    name: "Margherita",
    description: "Tomate San Marzano, mozzarella fior di latte, albahaca fresca, aceite de oliva",
    price: "€12",
    image: pizzaMargherita,
  },
  {
    name: "Diavola",
    description: "Tomate, mozzarella, salame picante calabrés, aceite de oliva virgen extra",
    price: "€14",
    image: pizzaDiavola,
  },
  {
    name: "Quattro Formaggi",
    description: "Mozzarella, gorgonzola, parmigiano reggiano, provolone, nuez",
    price: "€15",
    image: pizzaQuattro,
  },
  {
    name: "Prosciutto e Rucola",
    description: "Mozzarella, prosciutto di Parma 24 meses, rúcula, parmesano, tomate cherry",
    price: "€16",
    image: pizzaProsciutto,
  },
  {
    name: "Napoli",
    description: "Tomate San Marzano, mozzarella, anchoas, alcaparras, aceitunas, orégano",
    price: "€14",
    image: pizzaNapoli,
  },
  {
    name: "Tartufo",
    description: "Crema de trufa negra, mozzarella di bufala, champiñones, parmesano",
    price: "€18",
    image: pizzaTartufo,
  },
];

const MenuPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">
          Le Menu
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-semibold text-foreground mb-6">
          Nuestras Pizzas
        </h1>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto">
          Cada pizza está elaborada con ingredientes importados de Italia, masa fermentada 72 horas 
          y cocida en horno de leña a más de 450°C.
        </p>
      </section>

      {/* Pizza grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-16">
          {pizzas.map((pizza, i) => (
            <div key={i} className="group">
              <div className="overflow-hidden mb-6">
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-6">
                  <h3 className="font-display text-2xl font-medium text-foreground mb-2">
                    {pizza.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {pizza.description}
                  </p>
                </div>
                <span className="font-display text-xl font-medium text-primary shrink-0">
                  {pizza.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-card text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
          ¿Te apetece?
        </h2>
        <p className="font-body text-muted-foreground mb-8">
          Reserva tu mesa o haz tu pedido para recoger.
        </p>
        <Link
          to="/reservar"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
        >
          Reservar Ahora
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default MenuPage;
