const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-3xl font-bold tracking-tight mb-1">RAOLO'S</p>
            <p className="font-body text-sm text-primary-foreground/60">
              Pizza Artesanal Napolitana
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a href="#inicio" className="font-body text-xs tracking-widest uppercase text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Inicio
            </a>
            <a href="#menu" className="font-body text-xs tracking-widest uppercase text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Menú
            </a>
            <a href="#reservar" className="font-body text-xs tracking-widest uppercase text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Reservar
            </a>
            <a href="#contacto" className="font-body text-xs tracking-widest uppercase text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Contacto
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Raolo's. Tous droits réservés / Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
