import { ArrowRight } from "lucide-react";

export default function AutomobileTemplates() {
  const templates = [
    ["Garage Invoice", "General automobile repair invoice."],
    ["Car Service Invoice", "Billing for car servicing."],
    ["Bike Service Invoice", "Billing for two-wheeler servicing."],
    ["Repair Invoice", "Invoice for vehicle repairs."],
    ["Spare Parts Invoice", "Billing for automobile spare parts."],
    ["Oil Change Invoice", "Invoice for oil and filter services."],
    ["Tyre Service Invoice", "Billing for tyre-related services."],
    ["Vehicle Inspection Invoice", "Invoice for inspection services."],
    ["Car Washing Invoice", "Billing for car washing services."],
    ["Automobile Accessories Invoice", "Invoice for vehicle accessories."],
  ];

  return (
    <div>
      <h2 className="text-[22px] font-semibold text-[#222]">
        Automobile & Garage Templates
      </h2>

      <p className="mt-2 text-[13px] leading-6 text-[#777]">
        Billing templates for garages, workshops, automobile services and spare
        parts.
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