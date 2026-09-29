import { ArrowRight } from "lucide-react";

export default function AccountingTemplates() {
  const templates = [
    ["Accounting Invoice", "Professional accounting invoice."],
    ["Payment Receipt", "Receipt for customer payments."],
    ["Debit Note", "Document for debit adjustments."],
    ["Credit Note", "Document for credit adjustments."],
    ["Expense Invoice", "Invoice for business expenses."],
    ["Tax Invoice", "Tax-focused invoice template."],
    ["Payment Voucher", "Voucher for payment transactions."],
    ["Receipt Voucher", "Receipt voucher for accounting records."],
  ];

  return (
    <Page
      title="Documents & Accounting Templates"
      description="Useful billing and accounting documents for business record keeping."
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