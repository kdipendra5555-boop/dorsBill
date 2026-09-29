import { ArrowRight } from "lucide-react";

export default function ProfessionalTemplates() {
  const templates = [
    ["Professional Service Invoice", "General professional services invoice."],
    ["Legal Service Invoice", "Billing for legal services."],
    ["Accounting Service Invoice", "Invoice for accounting services."],
    ["Architect Invoice", "Billing for architectural services."],
    ["Engineer Invoice", "Invoice for engineering services."],
    ["Doctor Consultation Invoice", "Billing for professional consultation."],
    ["Consultant Invoice", "Invoice for consulting services."],
    ["Advisory Service Invoice", "Billing for advisory services."],
  ];

  return (
    <Page
      title="Professional Services Templates"
      description="Professional invoice templates for consultants, experts and service providers."
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
              className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
            />
          </a>
        ))}
      </div>
    </div>
  );
}