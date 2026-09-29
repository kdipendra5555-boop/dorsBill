import { ArrowRight } from "lucide-react";

export default function RetailTemplates() {
  const templates = [
    ["Retail GST Invoice", "GST billing template for retail stores."],
    ["Retail Cash Bill", "Quick cash bill for shop transactions."],
    ["POS Invoice", "Point-of-sale style billing template."],
    ["Retail Sales Invoice", "Professional retail sales invoice."],
    ["Credit Sale Bill", "Bill for credit-based retail sales."],
    ["Customer Receipt", "Simple receipt for customer payments."],
    ["Return Invoice", "Document returned products."],
    ["Exchange Receipt", "Receipt for product exchanges."],
    ["Discount Invoice", "Retail invoice with discounts."],
    ["Wholesale Retail Bill", "Billing for bulk retail transactions."],
  ];

  return (
    <div>
      <h2 className="text-[22px] font-semibold text-[#222]">
        Retail & Shop Templates
      </h2>

      <p className="mt-2 text-[13px] leading-6 text-[#777]">
        Billing templates designed for shops, stores and retail businesses.
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