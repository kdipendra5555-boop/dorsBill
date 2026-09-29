import { ArrowRight } from "lucide-react";

export default function QuotationTemplates() {
  const templates = [
    ["Quotation", "Professional quotation for customers."],
    ["Price Estimate", "Estimated pricing before final billing."],
    ["Sales Order", "Record confirmed customer orders."],
    ["Purchase Order", "Create structured purchase orders."],
    ["Delivery Challan", "Document goods being delivered."],
    ["Work Order", "Assign and document customer work."],
    ["Sales Receipt", "Receipt for completed sales."],
    ["Estimate", "Detailed estimate for products or services."],
  ];

  return (
    <div>
      <h2 className="text-[22px] font-semibold tracking-tight text-[#222]">
        Quotation & Sales Documents
      </h2>

      <p className="mt-2 text-[13px] leading-6 text-[#777]">
        Templates for quotations, estimates, orders and sales documentation.
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