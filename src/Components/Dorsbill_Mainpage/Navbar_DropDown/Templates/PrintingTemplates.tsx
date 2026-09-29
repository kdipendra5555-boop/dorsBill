import { ArrowRight } from "lucide-react";

export default function PrintingTemplates() {
  const templates = [
    ["Printing Press Invoice", "Complete invoice for printing businesses."],
    ["Digital Printing Invoice", "Billing for digital printing services."],
    ["Offset Printing Invoice", "Invoice for offset printing orders."],
    ["Xerox Bill", "Quick billing for photocopy and xerox services."],
    ["DTP Service Bill", "Billing for DTP and document services."],
    ["Flex Printing Invoice", "Invoice for flex and banner printing."],
    ["Visiting Card Invoice", "Billing for visiting card orders."],
    ["Wedding Card Invoice", "Invoice for wedding and invitation cards."],
    ["Book Printing Invoice", "Billing for book printing projects."],
    ["Brochure Invoice", "Professional brochure printing invoice."],
    ["Pamphlet Invoice", "Billing for pamphlet printing."],
    ["Binding Service Invoice", "Invoice for binding and finishing work."],
  ];

  return (
    <div>
      <h2 className="text-[22px] font-semibold text-[#222]">
        Printing Press & DTP Templates
      </h2>

      <p className="mt-2 text-[13px] leading-6 text-[#777]">
        Billing templates for printing presses, DTP shops, xerox and digital
        printing businesses.
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