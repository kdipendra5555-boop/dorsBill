import { ArrowRight } from "lucide-react";

export default function RepairTemplates() {
  const templates = [
    ["Repair Invoice", "General repair service invoice."],
    ["Electronics Repair Invoice", "Billing for electronic repairs."],
    ["Mobile Repair Invoice", "Invoice for mobile repair services."],
    ["Computer Repair Invoice", "Billing for computer repairs."],
    ["AC Repair Invoice", "Invoice for air-conditioner repairs."],
    ["Appliance Repair Invoice", "Billing for appliance repairs."],
    ["Service & Maintenance Invoice", "Invoice for maintenance services."],
    ["Repair Estimate", "Estimate for repair work."],
  ];

  return (
    <Page
      title="Repair & Maintenance Templates"
      description="Professional billing templates for repair shops and maintenance service providers."
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

      <div className="grid grid-cols-2 gap-x-8 gap-y-2">
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
              className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
            />
          </a>
        ))}
      </div>
    </div>
  );
}