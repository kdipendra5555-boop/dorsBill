import { ArrowRight } from "lucide-react";

function TeamItem({
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

export default function TeamsContent() {
  return (
    <div>
      {/* Heading */}
      <div className="mb-7 flex items-center gap-2">
        <h3 className="text-[24px] font-medium tracking-[-0.5px] text-[#222]">
          Teams
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
          <TeamItem
            title="Small Teams"
            description="Simple billing tools for small teams working together."
            href="#small-teams"
          />

          <TeamItem
            title="Finance Teams"
            description="Keep invoices, billing and financial workflows organized."
            href="#finance-teams"
          />

          <TeamItem
            title="Sales Teams"
            description="Create professional invoices and manage customer billing."
            href="#sales-teams"
          />
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          <TeamItem
            title="Operations"
            description="Simplify everyday billing and invoicing operations."
            href="#operations"
          />

          <TeamItem
            title="Business Owners"
            description="Get a clear view of your business billing workflow."
            href="#business-owners"
          />

          <TeamItem
            title="Remote Teams"
            description="Keep your billing workflow accessible across your team."
            href="#remote-teams"
          />
        </div>

        {/* Column 3 */}
        <div className="space-y-6">
          <TeamItem
            title="Growing Teams"
            description="Scale your invoicing workflow as your team grows."
            href="#growing-teams"
          />

          <TeamItem
            title="Collaborative Billing"
            description="Make invoice creation and management easier for teams."
            href="#collaborative-billing"
          />

          <TeamItem
            title="Team Workflows"
            description="Build a simple and consistent billing process."
            href="#team-workflows"
          />
        </div>

      </div>
    </div>
  );
}