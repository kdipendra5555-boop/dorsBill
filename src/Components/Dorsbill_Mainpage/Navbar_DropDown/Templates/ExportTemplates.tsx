import { ArrowRight } from "lucide-react";

export default function ExportTemplates() {
  const templates = [
    ["Export Invoice", "Professional export billing document."],
    ["Import Invoice", "Invoice for import transactions."],
    ["Commercial Export Invoice", "Commercial invoice for exports."],
    ["Proforma Export Invoice", "Preliminary export invoice."],
    ["Shipping Invoice", "Invoice for shipment-related transactions."],
    ["Customs Invoice", "Invoice for customs documentation."],
    ["International Sales Invoice", "Billing for international sales."],
    ["Export Packing Invoice", "Documentation for export shipments."],
  ];

  return (
    <Page
      title="Export & Import Templates"
      description="Invoice templates for international trade, export and import businesses."
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
        <p className="mt-2 text-[13px] text-[#777]">{description}</p>
      </div>

      <div className="grid grid-cols-2 gap-x-8">
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