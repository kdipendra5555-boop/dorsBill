import { ArrowRight } from "lucide-react";

export default function SoftwareTemplates() {
  const templates = [
    ["Software Development Invoice", "Invoice for software development."],
    ["Web Development Invoice", "Billing for website development."],
    ["App Development Invoice", "Invoice for mobile app projects."],
    ["IT Support Invoice", "Billing for technical support."],
    ["Cloud Services Invoice", "Invoice for cloud and hosting services."],
    ["API Services Invoice", "Billing for API and integration services."],
    ["Software License Invoice", "Invoice for software licensing."],
    ["Maintenance Invoice", "Billing for software maintenance."],
    ["SaaS Invoice", "Subscription invoice for SaaS products."],
    ["Hosting Invoice", "Billing for hosting services."],
  ];

  return (
    <div>
      <h2 className="text-[22px] font-semibold text-[#222]">
        Software & IT Templates
      </h2>

      <p className="mt-2 text-[13px] leading-6 text-[#777]">
        Professional billing templates for software companies, developers and
        IT services.
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