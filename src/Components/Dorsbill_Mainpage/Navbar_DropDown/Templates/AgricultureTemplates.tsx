import { ArrowRight } from "lucide-react";

export default function AgricultureTemplates() {
  const templates = [
    ["Agriculture Invoice", "General agricultural billing."],
    ["Farm Product Invoice", "Invoice for farm products."],
    ["Fertilizer Invoice", "Billing for fertilizers."],
    ["Seeds Invoice", "Invoice for seeds and planting material."],
    ["Equipment Invoice", "Billing for agricultural equipment."],
    ["Tractor Service Invoice", "Invoice for tractor services."],
    ["Crop Sale Invoice", "Billing for crop sales."],
    ["Agricultural Supply Invoice", "Invoice for agricultural supplies."],
  ];

  return (
    <Page
      title="Agriculture Templates"
      description="Billing templates for farms, agricultural suppliers and rural businesses."
      templates={templates}
    />
  );
}

function Page({
  title,
  description,
  templates,
}: {
  title: string;
  description: string;
  templates: string[][];
}) {
  return (
    <div>
      <div className="mb-7">
        <h2 className="text-[22px] font-semibold text-[#222]">{title}</h2>
        <p className="mt-2 text-[13px] text-[#777]">{description}</p>
      </div>

      <div className="grid grid-cols-2 gap-x-8">
        {templates.map(([title, description]) => (
          <a
            key={title}
            href="#template"
            className="group flex justify-between border-b border-black/[0.06] py-4"
          >
            <div>
              <p className="text-[13px] font-medium text-[#222]">{title}</p>
              <p className="mt-1 text-[11px] text-[#888]">{description}</p>
            </div>
            <ArrowRight
              size={14}
              className="opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
            />
          </a>
        ))}
      </div>
    </div>
  );
}