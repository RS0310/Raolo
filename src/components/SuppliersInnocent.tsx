import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface Supplier {
  name: string;
  origin: string;
  icon: string;
  short: string;
  long: string;
}

interface Props {
  suppliers: Supplier[];
}

const SuppliersInnocent = ({ suppliers }: Props) => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {suppliers.map((s, i) => {
        const isOpen = expanded === i;
        return (
          <article
            key={i}
            className="bg-card border border-border p-6 flex flex-col transition-all hover:border-primary/40"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-4xl" aria-hidden>
                {s.icon}
              </span>
              <span className="font-body text-[10px] tracking-widest uppercase text-muted-foreground text-right max-w-[60%]">
                {s.origin}
              </span>
            </div>

            <h3 className="font-display text-xl font-medium text-foreground mb-3 leading-snug">
              {s.name}
            </h3>

            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              {s.short}
            </p>

            {isOpen && (
              <p className="font-body text-sm text-foreground/80 leading-relaxed mb-4 pt-4 border-t border-border animate-fade-in">
                {s.long}
              </p>
            )}

            <button
              type="button"
              onClick={() => setExpanded(isOpen ? null : i)}
              className="mt-auto inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase text-primary hover:text-primary/80 transition-colors self-start"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <>
                  <Minus className="w-3.5 h-3.5" />
                  Menos info
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  Más info
                </>
              )}
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default SuppliersInnocent;
