import { ArrowRight } from "lucide-react";

export default function PhotographyTemplates() {
  const templates = [
    ["Photography Invoice", "Invoice for photography services."],
    ["Wedding Photography Invoice", "Billing for wedding photography."],
    ["Videography Invoice", "Invoice for video production services."],
    ["Photo Shoot Invoice", "Billing for professional photo shoots."],
    ["Event Photography Invoice", "Invoice for event photography."],
    ["Studio Invoice", "Billing for photography studio services."],
    ["Editing Service Invoice", "Invoice for photo and video editing."],
    ["Photography Advance Receipt", "Receipt for photography advance payments."],
  ];

  return <Page templates={templates} />;
}

function Page({ templates }: { templates: string[][] }) {
  return (
    <div>
      <div className="mb-7">
        <h2 className="text-[22px] font-semibold tracking-tight text-[#222]">
          Photography & Videography Templates
        </h2>
        <p className="mt-2 text-[13px] leading-6 text-[#777]">
          Professional billing templates for photographers, videographers and studios.
        </p>
      </div>

      <Grid templates={templates} />
    </div>
  );
}

function Grid({ templates }: { templates: string[][] }) {
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
            <p className="mt-1 text-[11px] text-[#888]">{description}</p>
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