import { ArrowRight } from "lucide-react";

export default function EventTemplates() {
  const templates = [
    ["Event Management Invoice", "Invoice for event management services."],
    ["Wedding Event Invoice", "Billing for wedding events."],
    ["Corporate Event Invoice", "Invoice for corporate events."],
    ["Event Planning Invoice", "Billing for event planning services."],
    ["Decoration Invoice", "Invoice for event decoration."],
    ["Catering Event Invoice", "Billing for event catering."],
    ["Event Booking Receipt", "Receipt for event bookings."],
    ["Event Advance Receipt", "Receipt for advance event payments."],
  ];

  return (
    <TemplatePage
      title="Event Management Templates"
      description="Billing templates for event planners, wedding organizers and event management businesses."
      templates={templates}
    />
  );
}

function TemplatePage({
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
        <h2 className="text-[22px] font-semibold tracking-tight text-[#222]">
          {title}
        </h2>
        <p className="mt-2 max-w-2xl text-[13px] leading-6 text-[#777]">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-2">
        {templates.map(([title, description]) => (
          <TemplateItem
            key={title}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
}

function TemplateItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <a
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
  );
}