import ingredientsImg from "@/assets/ingredients.jpg";

const products = [
  {
    name: "Tomate San Marzano D.O.P.",
    origin: "Campania, Italia",
    description: "Cultivados en las faldas del Vesubio, estos tomates son la base de toda auténtica pizza napolitana.",
  },
  {
    name: "Mozzarella Fior di Latte",
    origin: "Agerola, Italia",
    description: "Producida artesanalmente cada día, con leche fresca de las colinas de la Costa Amalfitana.",
  },
  {
    name: "Harina Tipo 00",
    origin: "Molino Caputo, Nápoles",
    description: "La harina preferida por los pizzaioli napolitanos, con el nivel perfecto de proteína para una masa ligera y aireada.",
  },
  {
    name: "Aceite de Oliva Virgen Extra",
    origin: "Puglia, Italia",
    description: "Prensado en frío de aceitunas Coratina, aporta un sabor afrutado e intenso a cada pizza.",
  },
];

const ProductsSection = () => {
  return (
    <section id="productos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">
            Nuestros Productos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Del origen a tu mesa
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Seleccionamos cuidadosamente cada ingrediente, importándolos directamente de
            los mejores productores italianos para garantizar la autenticidad de nuestros sabores.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {products.map((product, i) => (
            <div key={i} className="p-8 bg-card border border-border">
              <p className="font-body text-xs tracking-widest uppercase text-primary mb-2">
                {product.origin}
              </p>
              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                {product.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        <div className="overflow-hidden">
          <img
            src={ingredientsImg}
            alt="Ingredientes frescos italianos"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
