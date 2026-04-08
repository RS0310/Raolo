import { useState } from "react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ReservarPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    location: "paris",
    type: "dine-in",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Reserva enviada! Te confirmaremos pronto.");
    setForm({ name: "", email: "", phone: "", date: "", time: "", guests: "2", location: "paris", type: "dine-in", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputClass = "w-full px-4 py-3 bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">
              Reservar
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-foreground mb-4">
              Te esperamos
            </h1>
            <p className="font-body text-muted-foreground">
              Reserva tu mesa o haz tu pedido Click & Collect.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Type selection */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setForm({ ...form, type: "dine-in" })}
                className={`flex-1 py-3 font-body text-sm tracking-widest uppercase border transition-colors ${
                  form.type === "dine-in"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:border-primary"
                }`}
              >
                Reservar Mesa
              </button>
              <button
                type="button"
                onClick={() => setForm({ ...form, type: "collect" })}
                className={`flex-1 py-3 font-body text-sm tracking-widest uppercase border transition-colors ${
                  form.type === "collect"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:border-primary"
                }`}
              >
                Click & Collect
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre completo" required className={inputClass} />
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required className={inputClass} />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Teléfono" className={inputClass} />
              <select name="location" value={form.location} onChange={handleChange} className={inputClass}>
                <option value="paris">París</option>
                <option value="sansalvador">San Salvador</option>
              </select>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <input name="date" type="date" value={form.date} onChange={handleChange} required className={inputClass} />
              <input name="time" type="time" value={form.time} onChange={handleChange} required className={inputClass} />
              {form.type === "dine-in" && (
                <select name="guests" value={form.guests} onChange={handleChange} className={inputClass}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "persona" : "personas"}
                    </option>
                  ))}
                </select>
              )}
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={form.type === "collect" ? "Detalla tu pedido" : "Comentarios o peticiones especiales"}
              rows={3}
              className={`${inputClass} resize-none`}
            />

            <button
              type="submit"
              className="w-full py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
            >
              {form.type === "collect" ? "Confirmar Pedido" : "Confirmar Reserva"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReservarPage;
