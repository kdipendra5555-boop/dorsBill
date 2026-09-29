import PricingContent from "../../Components/Dorsbill_Mainpage/pricePage/PricingContent";
import Navbar from "../Dorsbill_Mainpage/Navbar/Navbar";

export default function Pricing() {
  return (
    <main className="min-h-screen bg-white">
        <Navbar/>
      <div className="mx-auto max-w-7xl px-6 py-20">
        
        <PricingContent />
      </div>
    </main>
  );
}