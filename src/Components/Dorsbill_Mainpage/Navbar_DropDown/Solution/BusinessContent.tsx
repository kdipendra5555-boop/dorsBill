import { ArrowRight } from "lucide-react";

function SolutionItem({
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

export default function BusinessContent() {
  return (
    <div>

      <div className="mb-7 flex items-center gap-2">
        <h3 className="text-[24px] font-medium tracking-[-0.5px] text-[#222]">
          Business
        </h3>

        <ArrowRight
          size={20}
          strokeWidth={1.5}
          className="text-[#777]"
        />
      </div>

      <div className="grid grid-cols-3 gap-x-12">

        <div className="space-y-6">

          <SolutionItem
            title="Small Businesses"
            description="Simple invoicing and billing tools for growing businesses."
            href="#small-business"
          />

          <SolutionItem
            title="Retail"
            description="Create invoices and manage everyday retail billing."
            href="#retail"
          />

          <SolutionItem
            title="Freelancers"
            description="Professional invoices without complicated software."
            href="#freelancers"
          />

        </div>

        <div className="space-y-6">

          <SolutionItem
            title="Agencies"
            description="Manage client invoices and business billing."
            href="#agencies"
          />

          <SolutionItem
            title="Consultants"
            description="Simple billing for consulting and professional services."
            href="#consultants"
          />

          <SolutionItem
            title="Startups"
            description="Flexible invoicing tools for growing teams."
            href="#startups"
          />

        </div>

        <div className="space-y-6">

          <SolutionItem
            title="Service Businesses"
            description="Billing designed for service-based businesses."
            href="#services"
          />

          <SolutionItem
            title="Online Businesses"
            description="Manage invoices and payments from one place."
            href="#online-business"
          />

          <SolutionItem
            title="Growing Businesses"
            description="Scale your billing workflow as your business grows."
            href="#growing-business"
          />

        </div>

      </div>

    </div>
  );
}