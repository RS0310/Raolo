import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SuppliersInnocent from "@/components/SuppliersInnocent";
import aboutDough from "@/assets/about-dough.jpg";
import ingredientsImg from "@/assets/ingredients.jpg";
import { useState } from "react";

const suppliers = [
  {
    name: "Tomate San Marzano D.O.P.",
    origin: "Campania",
    icon: "🍅",
    // Posición % sobre la silueta de Italia (x: izq→der, y: arriba→abajo)
    x: 60,
    y: 60,
    short: "Cultivados en las faldas del Vesubio, base de toda pizza napolitana auténtica.",
    long: "Los tomates San Marzano D.O.P. se cultivan exclusivamente en el Valle del Sarno. La tierra volcánica del Vesubio les otorga su sabor dulce e intenso, con baja acidez.",
  },
  {
    name: "Mozzarella Fior di Latte",
    origin: "Agerola, Campania",
    icon: "🧀",
    x: 58,
    y: 63,
    short: "Producida artesanalmente cada día con leche fresca de la Costa Amalfitana.",
    long: "Nuestra Fior di Latte proviene de las colinas de Agerola, donde la leche se transforma en mozzarella siguiendo técnicas ancestrales de pasta filata.",
  },
  {
    name: "Harina Tipo 00",
    origin: "Molino Caputo, Nápoles",
    icon: "🌾",
    x: 55,
    y: 58,
    short: "La harina preferida por los pizzaioli napolitanos para una masa ligera y aireada.",
    long: "Molino Caputo lleva desde 1924 moliendo trigo con métodos lentos y a baja temperatura, preservando las propiedades naturales del grano.",
  },
  {
    name: "Aceite de Oliva Virgen Extra",
    origin: "Puglia",
    icon: "🫒",
    x: 75,
    y: 62,
    short: "Prensado en frío de aceitunas Coratina, sabor afrutado e intenso.",
    long: "Nuestro aceite proviene de olivares centenarios en Puglia. Las aceitunas Coratina se recolectan a mano y se prensan en frío en las primeras 24 horas.",
  },
  {
    name: "Grana Padano D.O.P.",
    origin: "Valle del Po, Lombardía",
    icon: "🧀",
    x: 40,
    y: 22,
    short: "Queso curado mínimo 9 meses, con sabor intenso y granuloso.",
    long: "Producido en la Pianura Padana desde el siglo XII. Cada rueda madura un mínimo de 9 meses, desarrollando su textura granulosa.",
  },
  {
    name: "Gorgonzola D.O.P.",
    origin: "Lombardía",
    icon: "🧀",
    x: 32,
    y: 18,
    short: "Queso azul cremoso con vetas características, producido artesanalmente.",
    long: "Queso azul de pasta blanda elaborado con leche entera de vaca, madurado durante 60 días para desarrollar sus vetas azul-verdosas características.",
  },
  {
    name: "Cacioricotta del Cilento",
    origin: "Cilento, Campania",
    icon: "🧀",
    x: 65,
    y: 67,
    short: "Queso semi-curado de leche de cabra, tradición del Parque del Cilento.",
    long: "Producto de pequeñas queserías familiares del Parque Nacional del Cilento, elaborado con leche cruda de cabras criadas en libertad.",
  },
  {
    name: "Salsiccia di Castelpoto",
    origin: "Benevento, Campania",
    icon: "🌶️",
    x: 62,
    y: 56,
    short: "Embutido tradicional con pimentón rojo dulce de Castelpoto.",
    long: "Slow Food Presidium. Salchicha artesanal hecha con carne de cerdo y el característico pimentón rojo de Castelpoto, secada al aire.",
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
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight uppercase tracking-wide">
            NUESTRA HISTORIA Y VALORES
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

      {/* Proveedores - Mapa Interactivo */}
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
              Conoce el origen de cada uno de nuestros ingredientes. Haz clic en "Más info" para descubrir su historia.
            </p>
          </div>

          <SuppliersInnocent suppliers={suppliers} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;
