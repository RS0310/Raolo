import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReservationSection from "@/components/ReservationSection";
import ClickCollectSection from "@/components/ClickCollectSection";

type Tab = "reservar" | "collect";

const Reservar = () => {
  const [tab, setTab] = useState<Tab>("reservar");

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-8 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-body text-sm tracking-widest uppercase text-primary mb-4">
            Te esperamos
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-10">
            Reservar o pedir
          </h1>

          {/* Tabs */}
          <div className="inline-flex border border-border bg-card">
            <button
              type="button"
              onClick={() => setTab("reservar")}
              className={`px-6 py-3 font-body text-xs tracking-widest uppercase transition-colors ${
                tab === "reservar"
                  ? "bg-foreground text-background"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              Reservar mesa
            </button>
            <button
              type="button"
              onClick={() => setTab("collect")}
              className={`px-6 py-3 font-body text-xs tracking-widest uppercase transition-colors ${
                tab === "collect"
                  ? "bg-foreground text-background"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              Click & Collect
            </button>
          </div>
        </div>
      </div>

      {tab === "reservar" ? <ReservationSection /> : <ClickCollectSection />}

      <Footer />
    </div>
  );
};

export default Reservar;
