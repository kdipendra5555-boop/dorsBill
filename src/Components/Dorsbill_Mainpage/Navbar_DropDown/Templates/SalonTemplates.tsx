import { ArrowRight } from "lucide-react";

export default function SalonTemplates() {
  const templates = [
    ["Salon Invoice", "General salon billing template."],
    ["Beauty Service Invoice", "Invoice for beauty services."],
    ["Hair Service Invoice", "Billing for hair services."],
    ["Spa Invoice", "Professional spa service invoice."],
    ["Makeup Service Invoice", "Invoice for makeup services."],
    ["Bridal Makeup Invoice", "Billing for bridal makeup."],
    ["Salon Membership Receipt", "Receipt for salon memberships."],
    ["Salon Product Invoice", "Billing for beauty products."],
  ];

  return (
    <Page
      title="Salon & Beauty Templates"
      description="Billing templates for salons, spas, beauty parlours and makeup professionals."
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
      <Header title={title} description={description} />
      <Grid templates={templates} />
    </div>
  );
}

function Header({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-7">
      <h2 className="text-[22px] font-semibold text-[#222]">{title}</h2>
      <p className="mt-2 text-[13px] leading-6 text-[#777]">{description}</p>
    </div>
  );
}

function Grid({ templates }: { templates: string[][] }) {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-2">
      {templates.map(([title, description]) => (
        <Item key={title} title={title} description={description} />
      ))}
    </div>
  );
}

function Item({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <a
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
  );
}