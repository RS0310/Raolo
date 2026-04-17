import { useState } from "react";

interface Supplier {
  name: string;
  origin: string;
  icon: string;
  x: number;
  y: number;
  short: string;
  long: string;
}

interface Props {
  suppliers: Supplier[];
}

const SuppliersMap = ({ suppliers }: Props) => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
      {/* Mapa */}
      <div className="relative bg-card border border-border aspect-[4/5] w-full">
        {/* SVG silueta simplificada de Italia */}
        <svg
          viewBox="0 0 100 125"
          className="absolute inset-0 w-full h-full p-6"
          preserveAspectRatio="xMidYMid meet"
          aria-label="Mapa de Italia"
        >
          <path
            d="M38,8 L46,6 L52,10 L50,18 L45,22 L42,28 L38,30 L34,28 L30,22 L28,30 L32,38 L40,42 L48,44 L52,48 L54,54 L58,58 L62,62 L66,66 L68,72 L72,76 L74,82 L72,88 L68,92 L64,94 L60,96 L62,100 L66,104 L70,108 L72,114 L68,118 L62,116 L56,112 L52,108 L48,104 L46,98 L44,92 L42,86 L40,80 L38,74 L36,68 L34,62 L32,56 L28,52 L24,50 L22,46 L20,40 L22,34 L26,28 L30,22 L34,16 L38,8 Z"
            fill="hsl(var(--muted))"
            stroke="hsl(var(--border))"
            strokeWidth="0.5"
          />
          {/* Sicilia */}
          <ellipse cx="48" cy="118" rx="8" ry="3.5" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="0.5" />
          {/* Cerdeña */}
          <ellipse cx="20" cy="78" rx="4" ry="7" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="0.5" />
        </svg>

        {/* Pins */}
        {suppliers.map((s, i) => (
          <button
            key={i}
            type="button"
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(i)}
            onBlur={() => setActive(null)}
            onClick={() => setActive(active === i ? null : i)}
            style={{ left: `${s.x}%`, top: `${s.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center text-lg shadow-md hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-all z-10 cursor-pointer"
            aria-label={`${s.name} — ${s.origin}`}
          >
            <span aria-hidden>{s.icon}</span>
          </button>
        ))}

        {/* Tooltip flotante */}
        {active !== null && (
          <div
            className="absolute z-20 pointer-events-none bg-foreground text-background px-4 py-3 max-w-xs shadow-xl"
            style={{
              left: `${suppliers[active].x}%`,
              top: `${suppliers[active].y}%`,
              transform: "translate(-50%, calc(-100% - 28px))",
            }}
          >
            <p className="font-display text-sm font-medium mb-1">
              {suppliers[active].name}
            </p>
            <p className="font-body text-xs opacity-70 mb-2 uppercase tracking-wider">
              {suppliers[active].origin}
            </p>
            <p className="font-body text-xs leading-relaxed opacity-90">
              {suppliers[active].short}
            </p>
          </div>
        )}
      </div>

      {/* Lista lateral */}
      <div>
        <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-6">
          {active !== null ? "Detalle del producto" : "Nuestros productos"}
        </p>
        {active !== null ? (
          <div className="space-y-4">
            <span className="text-4xl block">{suppliers[active].icon}</span>
            <p className="font-body text-xs tracking-widest uppercase text-primary">
              {suppliers[active].origin}
            </p>
            <h3 className="font-display text-2xl font-medium text-foreground">
              {suppliers[active].name}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {suppliers[active].long}
            </p>
          </div>
        ) : (
          <ul className="space-y-3">
            {suppliers.map((s, i) => (
              <li
                key={i}
                onMouseEnter={() => setActive(i)}
                className="flex items-center gap-3 py-2 border-b border-border cursor-pointer hover:text-primary transition-colors"
              >
                <span className="text-xl">{s.icon}</span>
                <span className="font-body text-sm text-foreground flex-1">
                  {s.name}
                </span>
                <span className="font-body text-xs text-muted-foreground">
                  {s.origin}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SuppliersMap;
