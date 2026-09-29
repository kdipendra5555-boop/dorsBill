import { ArrowRight } from "lucide-react";

function BillingItem({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group block"
    >
      <p className="text-[13px] font-semibold text-[#292929] transition-colors group-hover:text-black">
        {title}
      </p>

      <p className="mt-1 max-w-[250px] text-[12px] leading-[1.55] text-[#777]">
        {description}
      </p>
    </a>
  );
}

export default function BillingContent() {
  return (
    <div>
      {/* Heading */}
      <div className="mb-7 flex items-center gap-2">
        <h3 className="text-[24px] font-medium tracking-[-0.5px] text-[#222]">
          Billing
        </h3>

        <ArrowRight
          size={20}
          strokeWidth={1.5}
          className="text-[#777]"
        />
      </div>

      {/* Content */}
      <div className="grid grid-cols-3 gap-x-12">

        {/* Column 1 */}
        <div className="space-y-6">

          <BillingItem
            title="GST Invoicing"
            description="Create professional GST-ready invoices for your business."
            href="#gst-invoicing"
          />

          <BillingItem
            title="Professional Invoices"
            description="Create clean and professional invoices in seconds."
            href="#professional-invoices"
          />

          <BillingItem
            title="Invoice Templates"
            description="Choose from templates designed for different business needs."
            href="#invoice-templates"
          />

        </div>

        {/* Column 2 */}
        <div className="space-y-6">

          <BillingItem
            title="Estimates & Quotes"
            description="Create estimates and quotes before converting them into invoices."
            href="#estimates"
          />

          <BillingItem
            title="Payment Tracking"
            description="Keep track of paid, pending and outstanding invoices."
            href="#payment-tracking"
          />

          <BillingItem
            title="Recurring Billing"
            description="Simplify recurring invoices and regular customer billing."
            href="#recurring-billing"
          />

        </div>

        {/* Column 3 */}
        <div className="space-y-6">

          <BillingItem
            title="Expense Tracking"
            description="Keep business expenses organized alongside your billing."
            href="#expense-tracking"
          />

          <BillingItem
            title="Purchase Orders"
            description="Create and manage purchase orders for your business."
            href="#purchase-orders"
          />

          <BillingItem
            title="Invoice Management"
            description="Manage your invoices from one simple workspace."
            href="#invoice-management"
          />

        </div>

      </div>
    </div>
  );
}