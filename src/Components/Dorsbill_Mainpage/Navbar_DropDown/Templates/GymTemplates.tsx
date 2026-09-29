import { ArrowRight } from "lucide-react";

export default function GymTemplates() {
  const templates = [
    ["Gym Membership Invoice", "Invoice for gym memberships."],
    ["Fitness Training Invoice", "Billing for personal training."],
    ["Monthly Membership Receipt", "Receipt for monthly memberships."],
    ["Annual Membership Receipt", "Receipt for yearly memberships."],
    ["Personal Trainer Invoice", "Invoice for personal training services."],
    ["Yoga Class Invoice", "Billing for yoga classes."],
    ["Fitness Course Invoice", "Invoice for fitness programs."],
    ["Gym Product Invoice", "Billing for fitness products."],
  ];

  return (
    <Page
      title="Gym & Fitness Templates"
      description="Billing templates for gyms, fitness centres, trainers and wellness businesses."
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
        <p className="mt-2 text-[13px] leading-6 text-[#777]">{description}</p>
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