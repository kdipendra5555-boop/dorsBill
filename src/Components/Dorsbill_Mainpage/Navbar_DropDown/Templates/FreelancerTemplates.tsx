import { ArrowRight } from "lucide-react";

export default function FreelancerTemplates() {
  const templates = [
    ["Freelance Service Invoice", "Invoice clients for freelance services."],
    ["Project Invoice", "Billing for completed projects."],
    ["Hourly Invoice", "Invoice based on hourly work."],
    ["Milestone Invoice", "Invoice based on project milestones."],
    ["Retainer Invoice", "Recurring billing for retained clients."],
    ["Consulting Invoice", "Invoice for independent consulting work."],
    ["Advance Payment Invoice", "Request advance payment from clients."],
    ["Freelancer Receipt", "Payment receipt for freelance services."],
    ["Design Service Invoice", "Invoice for graphic and UI design."],
    ["Writing Service Invoice", "Billing for writing and content work."],
  ];

  return (
    <div>
      <h2 className="text-[22px] font-semibold text-[#222]">
        Freelancer Templates
      </h2>

      <p className="mt-2 text-[13px] leading-6 text-[#777]">
        Professional invoices for independent professionals and freelancers.
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