import { Link } from "react-router-dom";
import logo from "@/assets/logo-raolos.png";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Raolo's Pizzeria" className="h-10 w-auto" />
            <div>
              <p className="font-display text-lg font-bold tracking-tight">RAOLO'S</p>
              <p className="font-body text-xs text-primary-foreground/60">
                Pizza Artesanal Napolitana
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <Link to="/" className="font-body text-xs tracking-widest uppercase text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Inicio
            </Link>
            <Link to="/menu" className="font-body text-xs tracking-widest uppercase text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Menú
            </Link>
            <Link to="/reservar" className="font-body text-xs tracking-widest uppercase text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Reservar
            </Link>
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
