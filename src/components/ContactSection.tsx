import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">
            Contacto
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Encuéntranos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* París */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-medium text-foreground border-b border-border pb-4">
              París
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-primary mt-1 shrink-0" />
                <p className="font-body text-sm text-muted-foreground">
                  Online — Livraison à domicile<br />
                  Paris, France
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-primary shrink-0" />
                <p className="font-body text-sm text-muted-foreground">
                  +33 1 23 45 67 89
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={18} className="text-primary shrink-0" />
                <p className="font-body text-sm text-muted-foreground">
                  paris@raolos.com
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={18} className="text-primary mt-1 shrink-0" />
                <div className="font-body text-sm text-muted-foreground">
                  <p>Lun - Vie: 18:00 - 22:30</p>
                  <p>Sáb - Dom: 12:00 - 15:00 / 18:00 - 23:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* San Salvador */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-medium text-foreground border-b border-border pb-4">
              San Salvador
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-primary mt-1 shrink-0" />
                <p className="font-body text-sm text-muted-foreground">
                  Colonia Escalón<br />
                  San Salvador, El Salvador
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-primary shrink-0" />
                <p className="font-body text-sm text-muted-foreground">
                  +503 2345 6789
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={18} className="text-primary shrink-0" />
                <p className="font-body text-sm text-muted-foreground">
                  sv@raolos.com
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={18} className="text-primary mt-1 shrink-0" />
                <div className="font-body text-sm text-muted-foreground">
                  <p>Mar - Dom: 11:30 - 14:30 / 17:30 - 22:00</p>
                  <p>Lunes cerrado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
