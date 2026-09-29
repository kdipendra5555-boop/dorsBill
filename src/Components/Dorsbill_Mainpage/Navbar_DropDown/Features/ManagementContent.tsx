import { ArrowRight } from "lucide-react";

function ManagementItem({
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
      <p className="text-[13px] font-semibold text-[#292929]">
        {title}
      </p>

      <p className="mt-1 max-w-[250px] text-[12px] leading-[1.55] text-[#777]">
        {description}
      </p>
    </a>
  );
}

export default function ManagementContent() {
  return (
    <div>

      <div className="mb-7 flex items-center gap-2">
        <h3 className="text-[24px] font-medium tracking-[-0.5px] text-[#222]">
          Management
        </h3>

        <ArrowRight
          size={20}
          strokeWidth={1.5}
          className="text-[#777]"
        />
      </div>

      <div className="grid grid-cols-3 gap-x-12">

        <div className="space-y-6">

          <ManagementItem
            title="Customer Management"
            description="Keep customer information organized with your invoices."
            href="#customers"
          />

          <ManagementItem
            title="Invoice Management"
            description="Manage all your invoices from one simple workspace."
            href="#invoice-management"
          />

          <ManagementItem
            title="Product & Services"
            description="Organize the products and services you bill for."
            href="#products-services"
          />

        </div>

        <div className="space-y-6">

          <ManagementItem
            title="Business Records"
            description="Keep important billing information organized."
            href="#business-records"
          />

          <ManagementItem
            title="Billing History"
            description="View your previous invoices and billing activity."
            href="#billing-history"
          />

          <ManagementItem
            title="Reports"
            description="Understand your billing activity with useful reports."
            href="#reports"
          />

        </div>

        <div className="space-y-6">

          <ManagementItem
            title="Data Export"
            description="Export your billing information whenever you need it."
            href="#data-export"
          />

          <ManagementItem
            title="Local Data"
            description="Keep your billing data under your control."
            href="#local-data"
          />

          <ManagementItem
            title="Backup"
            description="Keep your important billing data backed up."
            href="#backup"
          />

        </div>

      </div>
    </div>
  );
}