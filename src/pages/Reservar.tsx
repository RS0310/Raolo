import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReservationSection from "@/components/ReservationSection";

const Reservar = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <ReservationSection />
      </div>
      <Footer />
    </div>
  );
};

export default Reservar;
