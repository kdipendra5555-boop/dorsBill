import { ArrowRight } from "lucide-react";

function IndustryItem({
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

export default function IndustriesContent() {
  return (
    <div>
      {/* Heading */}
      <div className="mb-7 flex items-center gap-2">
        <h3 className="text-[24px] font-medium tracking-[-0.5px] text-[#222]">
          Industries
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
          <IndustryItem
            title="Printing"
            description="Create professional invoices for printing and press businesses."
            href="#printing"
          />

          <IndustryItem
            title="Retail"
            description="Simple billing for shops and retail businesses."
            href="#retail"
          />

          <IndustryItem
            title="Wholesale"
            description="Manage invoices for wholesale transactions and orders."
            href="#wholesale"
          />

        </div>

        {/* Column 2 */}
        <div className="space-y-6">

          <IndustryItem
            title="Clinics"
            description="Simple billing workflows for clinics and healthcare businesses."
            href="#clinics"
          />

          <IndustryItem
            title="Restaurants"
            description="Create clean invoices for restaurants and food businesses."
            href="#restaurants"
          />

          <IndustryItem
            title="Education"
            description="Manage billing and invoices for educational businesses."
            href="#education"
          />

        </div>

        {/* Column 3 */}
        <div className="space-y-6">

          <IndustryItem
            title="Manufacturing"
            description="Organize invoicing for manufacturing and production businesses."
            href="#manufacturing"
          />

          <IndustryItem
            title="Professional Services"
            description="Professional invoicing for service-based businesses."
            href="#professional-services"
          />

          <IndustryItem
            title="Construction"
            description="Create invoices for projects, services and construction work."
            href="#construction"
          />

        </div>

      </div>
    </div>
  );
}