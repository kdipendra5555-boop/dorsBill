import { ArrowRight } from "lucide-react";

export default function TravelTemplates() {
  const templates = [
    ["Travel Invoice", "Invoice for travel-related services."],
    ["Tour Package Invoice", "Billing for tour packages."],
    ["Hotel Booking Invoice", "Invoice for hotel booking services."],
    ["Flight Booking Invoice", "Billing for flight booking services."],
    ["Travel Agency Invoice", "Professional travel agency billing."],
    ["Tourist Package Receipt", "Receipt for tourism packages."],
    ["Travel Advance Receipt", "Receipt for advance travel payments."],
    ["Travel Service Invoice", "Billing for travel services."],
  ];

  return (
    <div>
      <Header />
      <TemplateGrid templates={templates} />
    </div>
  );
}

function Header() {
  return (
    <div className="mb-7">
      <h2 className="text-[22px] font-semibold tracking-tight text-[#222]">
        Travel & Tourism Templates
      </h2>
      <p className="mt-2 max-w-2xl text-[13px] leading-6 text-[#777]">
        Professional billing templates for travel agencies, tour operators and tourism businesses.
      </p>
    </div>
  );
}

function TemplateGrid({ templates }: { templates: string[][] }) {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-2">
      {templates.map(([title, description]) => (
        <a
          key={title}
          href="#template"
          className="group flex items-start justify-between border-b border-black/[0.06] py-4"
        >
          <div>
            <p className="text-[13px] font-medium text-[#222]">{title}</p>
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
  );
}