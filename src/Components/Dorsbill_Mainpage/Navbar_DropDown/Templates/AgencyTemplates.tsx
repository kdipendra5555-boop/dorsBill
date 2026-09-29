import { ArrowRight } from "lucide-react";

export default function AgencyTemplates() {
  const templates = [
    ["Marketing Agency Invoice", "Invoice for marketing services."],
    ["Digital Marketing Invoice", "Billing for digital marketing campaigns."],
    ["Advertising Invoice", "Invoice for advertising services."],
    ["Social Media Invoice", "Billing for social media management."],
    ["SEO Service Invoice", "Invoice for SEO services."],
    ["Branding Invoice", "Billing for branding projects."],
    ["Creative Services Invoice", "Invoice for creative services."],
    ["Campaign Invoice", "Billing for marketing campaigns."],
    ["PR Agency Invoice", "Invoice for public relations services."],
    ["Media Buying Invoice", "Billing for media buying services."],
  ];

  return (
    <div>
      <h2 className="text-[22px] font-semibold text-[#222]">
        Agency Templates
      </h2>

      <p className="mt-2 text-[13px] leading-6 text-[#777]">
        Billing templates for marketing, advertising, creative and digital
        agencies.
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