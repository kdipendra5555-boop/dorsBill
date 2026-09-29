import { ArrowRight } from "lucide-react";

export default function ConstructionTemplates() {
  const templates = [
    ["Construction Invoice", "General construction project invoice."],
    ["Contractor Invoice", "Invoice for contractor services."],
    ["Material Supply Invoice", "Billing for construction materials."],
    ["Labour Invoice", "Invoice for construction labour."],
    ["Site Work Invoice", "Billing for site-based work."],
    ["Project Invoice", "Invoice for complete construction projects."],
    ["Work Order", "Construction work order document."],
    ["Progress Billing Invoice", "Invoice based on project progress."],
    ["Advance Construction Invoice", "Advance payment billing."],
    ["Subcontractor Invoice", "Billing for subcontractor work."],
  ];

  return (
    <div>
      <h2 className="text-[22px] font-semibold text-[#222]">
        Construction Templates
      </h2>

      <p className="mt-2 text-[13px] leading-6 text-[#777]">
        Billing and project documentation templates for construction businesses.
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