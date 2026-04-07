import { useState } from "react";
import { toast } from "sonner";

const ReservationSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    location: "paris",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Reserva enviada! Te confirmaremos pronto.");
    setForm({ name: "", email: "", phone: "", date: "", time: "", guests: "2", location: "paris", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="reservar" className="py-24 px-6 bg-card">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">
            Reservar Mesa
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Te esperamos
          </h2>
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
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-3 bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="Teléfono"
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

          <div className="grid sm:grid-cols-3 gap-6">
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
            <select
              name="guests"
              value={form.guests}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "persona" : "personas"}
                </option>
              ))}
            </select>
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Comentarios o peticiones especiales"
            rows={3}
            className="w-full px-4 py-3 bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
          />

          <button
            type="submit"
            className="w-full py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
          >
            Confirmar Reserva
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReservationSection;
