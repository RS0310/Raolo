import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "/", label: "Inicio", isAnchor: false },
  { href: "/#nosotros", label: "Nosotros", isAnchor: true },
  { href: "/menu", label: "Menú", isAnchor: false },
  { href: "/valores", label: "Valores", isAnchor: false },
  { href: "/reservar", label: "Reservar", isAnchor: false },
  { href: "/#contacto", label: "Contacto", isAnchor: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleClick = (href: string, isAnchor: boolean) => {
    setOpen(false);
    if (isAnchor && location.pathname === "/") {
      const id = href.replace("/#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="font-display text-2xl font-bold tracking-tight text-foreground">
          RAOLO'S
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.isAnchor ? (
                <a
                  href={link.href}
                  onClick={() => handleClick(link.href, true)}
                  className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.href}
                  className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.isAnchor ? (
                  <a
                    href={link.href}
                    onClick={() => handleClick(link.href, true)}
                    className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
