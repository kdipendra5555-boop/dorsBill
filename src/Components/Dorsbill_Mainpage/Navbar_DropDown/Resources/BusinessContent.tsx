import { ArrowRight } from "lucide-react";

function BusinessItem({
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

          <BusinessItem
            title="Small Businesses"
            description="Simple billing tools for growing businesses."
            href="#small-business"
          />

          <BusinessItem
            title="Retail"
            description="Create invoices and manage everyday retail billing."
            href="#retail"
          />

          <BusinessItem
            title="Printing Businesses"
            description="Create professional invoices for printing services."
            href="#printing"
          />

        </div>

        <div className="space-y-6">

          <BusinessItem
            title="Freelancers"
            description="Professional invoicing without complicated software."
            href="#freelancers"
          />

          <BusinessItem
            title="Agencies"
            description="Manage client billing and invoices efficiently."
            href="#agencies"
          />

          <BusinessItem
            title="Consultants"
            description="Create clean invoices for consulting services."
            href="#consultants"
          />

        </div>

        <div className="space-y-6">

          <BusinessItem
            title="Service Businesses"
            description="Billing tools designed for service-based businesses."
            href="#services"
          />

          <BusinessItem
            title="Clinics"
            description="Simple billing for clinics and professional services."
            href="#clinics"
          />

          <BusinessItem
            title="Wholesalers"
            description="Manage invoices for wholesale transactions."
            href="#wholesale"
          />

        </div>

      </div>
    </div>
  );
}