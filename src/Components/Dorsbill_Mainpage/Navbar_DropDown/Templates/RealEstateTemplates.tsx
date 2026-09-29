import { ArrowRight } from "lucide-react";

export default function RealEstateTemplates() {
  const templates = [
    ["Property Sale Invoice", "Billing document for property sales."],
    ["Property Booking Receipt", "Receipt for property booking payments."],
    ["Rent Invoice", "Monthly rental invoice."],
    ["Maintenance Invoice", "Property maintenance billing."],
    ["Brokerage Invoice", "Invoice for brokerage services."],
    ["Property Service Invoice", "Billing for property-related services."],
    ["Security Deposit Receipt", "Receipt for rental security deposits."],
    ["Lease Payment Receipt", "Receipt for lease payments."],
    ["Property Management Invoice", "Invoice for property management."],
    ["Rental Agreement Invoice", "Billing related to rental agreements."],
  ];

  return (
    <div>
      <h2 className="text-[22px] font-semibold text-[#222]">
        Real Estate Templates
      </h2>

      <p className="mt-2 text-[13px] leading-6 text-[#777]">
        Professional billing templates for property, rental and real-estate
        businesses.
      </p>

      <div className="mt-7 grid grid-cols-2 gap-x-8">
        {templates.map(([name, description]) => (
          <a
            key={name}
            href="#template"
            className="group flex items-start justify-between border-b border-black/[0.06] py-4"
          >
            <div>
              <p className="text-[13px] font-medium text-[#222]">{name}</p>
              <p className="mt-1 text-[11px] leading-5 text-[#888]">
                {description}
              </p>
            </div>

            <ArrowRight
              size={14}
              className="mt-1 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
            />
          </a>
        ))}
      </div>
    </div>
  );
}