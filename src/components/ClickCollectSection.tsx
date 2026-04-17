import { useState } from "react";
import { toast } from "sonner";
import { Phone } from "lucide-react";

const ClickCollectSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "paris",
    date: "",
    time: "",
    order: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Pedido enviado! Te llamaremos para confirmar.");
    setForm({ name: "", phone: "", email: "", location: "paris", date: "", time: "", order: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-16 px-6 bg-card">
      <div className="max-w-2xl mx-auto">
        {/* Llamada por teléfono */}
        <div className="border border-border bg-background p-8 mb-12 text-center">
          <Phone className="w-6 h-6 text-primary mx-auto mb-4" />
          <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-3">
            Take Away — Pídelo por teléfono
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            <a
              href="tel:+33100000000"
              className="block group"
            >
              <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">
                París
              </p>
              <p className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                +33 1 00 00 00 00
              </p>
            </a>
            <a
              href="tel:+50300000000"
              className="block group"
            >
              <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">
                San Salvador
              </p>
              <p className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                +503 0000 0000
              </p>
            </a>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">
            — O reserva tu pedido —
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nombre completo"
              required
              className="w-full px-4 py-3 bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="Teléfono"
              required
              className="w-full px-4 py-3 bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <select
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
            >
              <option value="paris">París</option>
              <option value="sansalvador">San Salvador</option>
            </select>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-border font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              name="time"
              type="time"
              value={form.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-border font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <textarea
            name="order"
            value={form.order}
            onChange={handleChange}
            placeholder="Tu pedido (ej: 1 Sinsimba, 2 Diavola, 1 Eva...)"
            required
            rows={5}
            className="w-full px-4 py-3 bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
          />

          <button
            type="submit"
            className="w-full py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
          >
            Enviar pedido
          </button>

          <p className="font-body text-xs text-muted-foreground text-center">
            Te llamaremos para confirmar tu pedido y la hora de recogida.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ClickCollectSection;
