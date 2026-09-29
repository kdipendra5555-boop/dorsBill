import { ArrowRight } from "lucide-react";

export default function ConsultancyTemplates() {
  const templates = [
    ["Consulting Invoice", "General consulting services invoice."],
    ["Business Consulting Invoice", "Billing for business consulting."],
    ["Management Consulting Invoice", "Invoice for management advisory."],
    ["Financial Consulting Invoice", "Billing for financial consulting."],
    ["Technical Consulting Invoice", "Invoice for technical consulting."],
    ["Legal Consulting Invoice", "Professional legal consulting billing."],
    ["Advisory Invoice", "Invoice for advisory services."],
    ["Retainer Consultancy Invoice", "Recurring consultant billing."],
    ["Strategy Consulting Invoice", "Billing for strategy consulting."],
    ["Professional Advisory Invoice", "Invoice for professional advisory work."],
  ];

  return (
    <div>
      <h2 className="text-[22px] font-semibold text-[#222]">
        Consultancy Templates
      </h2>

      <p className="mt-2 text-[13px] leading-6 text-[#777]">
        Professional invoice templates for consultants and advisory businesses.
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