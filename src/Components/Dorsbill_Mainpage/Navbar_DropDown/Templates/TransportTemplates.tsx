import { ArrowRight } from "lucide-react";

export default function TransportTemplates() {
  const templates = [
    ["Transport Invoice", "General transport service invoice."],
    ["Logistics Invoice", "Billing for logistics services."],
    ["Freight Invoice", "Invoice for freight transportation."],
    ["Courier Invoice", "Billing for courier services."],
    ["Delivery Invoice", "Invoice for delivery services."],
    ["Vehicle Hire Invoice", "Billing for hired vehicles."],
    ["Lorry Transport Invoice", "Invoice for truck transportation."],
    ["Loading Charges Invoice", "Billing for loading services."],
    ["Unloading Charges Invoice", "Billing for unloading services."],
    ["Transportation Receipt", "Receipt for transportation payment."],
  ];

  return (
    <div>
      <h2 className="text-[22px] font-semibold text-[#222]">
        Transport & Logistics Templates
      </h2>

      <p className="mt-2 text-[13px] leading-6 text-[#777]">
        Billing templates for transport, freight, courier and logistics
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