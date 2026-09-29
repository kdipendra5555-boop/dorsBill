import {
  ArrowRight,
 
} from "lucide-react";

function ResourceItem({
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
      className="group block rounded-lg transition-colors"
    >
      <div className="flex items-start gap-3">

        {icon && (
          <div
            className="
              mt-0.5 flex h-8 w-8 shrink-0
              items-center justify-center
              rounded-md bg-[#f5f4f1]
              text-[#444]
              transition-colors
              group-hover:bg-[#eae9e5]
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

export default function LearnContent() {
  return (
    <div>
      {/* Heading */}
      <div className="mb-7 flex items-center gap-2">
        <h3 className="text-[24px] font-medium tracking-[-0.5px] text-[#222]">
          Learn
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

          <ResourceItem
            
            title="How It Works"
            description="Learn how DorsBill works from creating an invoice to getting paid."
            href="#how-it-works"
          />

          <ResourceItem
            
            title="Documentation"
            description="Explore DorsBill features, workflows and product documentation."
            href="#documentation"
          />

          <ResourceItem
            title="Invoice Guide"
            description="Learn how to create professional invoices for your business."
            href="#invoice-guide"
          />

        </div>

        {/* Column 2 */}
        <div className="space-y-6">

          <ResourceItem
            title="GST Guide"
            description="Understand GST invoicing, tax rates and compliant billing."
            href="#gst-guide"
          />

          <ResourceItem
            title="Billing Guide"
            description="Practical guides for managing your business billing."
            href="#billing-guide"
          />

          <ResourceItem
            title="Invoice Templates"
            description="Explore professional templates for different business needs."
            href="#templates"
          />

        </div>

        {/* Column 3 */}
        <div className="space-y-6">

          <ResourceItem
            title="Invoice Basics"
            description="Understand the essential parts of a professional invoice."
            href="#invoice-basics"
          />

          <ResourceItem
            title="GST Invoicing"
            description="Learn the basics of GST-ready invoicing."
            href="#gst-invoicing"
          />

          <ResourceItem
            title="Business Billing"
            description="Learn better ways to manage everyday billing."
            href="#business-billing"
          />

        </div>

      </div>
    </div>
  );
}