import { Check } from "lucide-react";

const features = [
  "GST-ready invoices",
  "Professional invoice templates",
  "PDF export",
  "Print invoices",
  "Share invoices",
  "Invoice history",
  "Customer management",
  "Product management",
  "AI template generation",
  "Cloud backup",
  "UPI payment support",
  "Wallet & usage tracking",
  "Business profile",
  "Invoice numbering",
  "Local-first data storage",
  "Custom invoice branding",
];

export default function PricingFeatures() {
  return (
    <section className="mt-10 rounded-xl border border-[#e8e7e3] bg-white p-6">

      <h4 className="text-[13px] font-semibold text-[#292929]">
        What's included with DorsBill
      </h4>

      <p className="mt-1 text-[11px] text-[#888]">
        All core invoicing features are available across DorsBill.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">

        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-2"
          >
            <Check
              size={13}
              strokeWidth={1.7}
              className="shrink-0 text-[#555]"
            />

            <span className="text-[11px] text-[#666]">
              {feature}
            </span>
          </div>
        ))}

      </div>

    </section>
  );
}