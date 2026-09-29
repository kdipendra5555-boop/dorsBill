import {
  ArrowRight,
  
} from "lucide-react";

function FeatureItem({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group block"
    >
      <div className="flex items-start gap-3">

        {icon && (
          <div
            className="
              flex h-8 w-8 shrink-0
              items-center justify-center
              rounded-md
              bg-[#f0efeb]
              text-[#444]
              transition-colors
              group-hover:bg-[#e5e4df]
              group-hover:text-black
            "
          >
            {icon}
          </div>
        )}

        <div>
          <p className="text-[13px] font-semibold text-[#292929]">
            {title}
          </p>

          <p className="mt-1 max-w-[250px] text-[12px] leading-[1.55] text-[#777]">
            {description}
          </p>
        </div>

      </div>
    </a>
  );
}

export default function InvoicingContent() {
  return (
    <div>

      <div className="mb-7 flex items-center gap-2">
        <h3 className="text-[24px] font-medium tracking-[-0.5px] text-[#222]">
          Invoicing
        </h3>

        <ArrowRight
          size={20}
          strokeWidth={1.5}
          className="text-[#777]"
        />
      </div>

      <div className="grid grid-cols-3 gap-x-12">

        {/* Column 1 */}
        <div className="space-y-6">

          <FeatureItem
            
            title="Create Invoices"
            description="Create professional invoices quickly for your customers."
            href="#create-invoices"
          />

          <FeatureItem
            title="GST Invoices"
            description="Generate GST-ready invoices with tax calculations."
            href="#gst-invoices"
          />

          <FeatureItem
            title="Invoice Templates"
            description="Choose clean and professional invoice templates."
            href="#invoice-templates"
          />

        </div>

        {/* Column 2 */}
        <div className="space-y-6">

          <FeatureItem
            title="Estimates & Quotes"
            description="Create estimates and convert them into invoices."
            href="#estimates"
          />

          <FeatureItem
            title="Custom Invoices"
            description="Customize invoices with your business details and branding."
            href="#custom-invoices"
          />

          <FeatureItem
            title="Invoice Numbering"
            description="Keep your invoice numbers organized automatically."
            href="#invoice-numbering"
          />

        </div>

        {/* Column 3 */}
        <div className="space-y-6">

          <FeatureItem
            
            title="AI Invoice Generation"
            description="Generate invoices using simple natural-language prompts."
            href="#ai-invoices"
          />

          <FeatureItem
            title="PDF Invoices"
            description="Generate and download professional PDF invoices."
            href="#pdf-invoices"
          />

          <FeatureItem
            title="Invoice Sharing"
            description="Share invoices easily with your customers."
            href="#invoice-sharing"
          />

        </div>

      </div>
    </div>
  );
}