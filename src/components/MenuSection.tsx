const pizzas = [
  {
    name: "Margherita",
    description: "Tomate San Marzano, mozzarella fior di latte, albahaca fresca, aceite de oliva",
    price: "€12",
  },
  {
    name: "Diavola",
    description: "Tomate, mozzarella, salame picante calabrés, aceite de oliva virgen extra",
    price: "€14",
  },
  {
    name: "Quattro Formaggi",
    description: "Mozzarella, gorgonzola, parmigiano reggiano, provolone, nuez",
    price: "€15",
  },
  {
    name: "Prosciutto e Rucola",
    description: "Mozzarella, prosciutto di Parma 24 meses, rúcula, parmesano, tomate cherry",
    price: "€16",
  },
  {
    name: "Napoli",
    description: "Tomate San Marzano, mozzarella, anchoas, alcaparras, aceitunas, orégano",
    price: "€14",
  },
  {
    name: "Tartufo",
    description: "Crema de trufa negra, mozzarella di bufala, champiñones, parmesano",
    price: "€18",
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">
            Nuestras Pizzas
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Le Menu
          </h2>
        </div>

        <div className="space-y-0">
          {pizzas.map((pizza, i) => (
            <div
              key={i}
              className="flex items-start justify-between py-6 border-b border-border last:border-0"
            >
              <div className="flex-1 pr-8">
                <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-1">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
