import { ArrowRight } from "lucide-react";

export default function CompanyContent() {
  return (
    <div>
      {/* Header */}
      <div className="mb-7 flex items-center gap-2">
        <h3 className="text-[24px] font-medium tracking-[-0.5px] text-[#222]">
          Company
        </h3>

        <ArrowRight
          size={20}
          strokeWidth={1.5}
          className="text-[#777]"
        />
      </div>

      {/* Company Items */}
      <div className="grid grid-cols-3 gap-x-12">

        {/* Column 1 */}
        <div className="space-y-6">
          <CompanyItem
            title="About DorsBill"
            description="Learn more about DorsBill and the problem we're solving."
            href="#about"
          />

          <CompanyItem
            title="Our Story"
            description="Discover how DorsBill started and where we're going."
            href="#story"
          />

          <CompanyItem
            title="Why DorsBill"
            description="See what makes DorsBill different from traditional invoicing tools."
            href="#why-dorsbill"
          />

          <CompanyItem
            title="Our Mission"
            description="Learn about our mission to make invoicing simple for everyone."
            href="#mission"
          />
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          <CompanyItem
            title="What's New"
            description="Explore the latest features, updates and improvements."
            href="#updates"
          />

          <CompanyItem
            title="Changelog"
            description="See everything that's recently changed in DorsBill."
            href="#changelog"
          />

          <CompanyItem
            title="Technology"
            description="Learn about the technology powering DorsBill."
            href="#technology"
          />
        </div>

        {/* Column 3 */}
        <div className="space-y-6">
          <CompanyItem
            title="Security & Privacy"
            description="Learn how DorsBill keeps your business data protected."
            href="#security"
          />

          <CompanyItem
            title="Careers"
            description="Explore opportunities to work with the DorsBill team."
            href="#careers"
          />

          <CompanyItem
            title="Contact"
            description="Get in touch with the DorsBill team."
            href="#contact"
          />
        </div>

      </div>
    </div>
  );
}

function CompanyItem({
  icon,
  title,
  description,
  href,
}: {
  icon?: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group block"
    >
      <div className="flex items-start gap-3">

        {icon && (
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#f5f4f1] text-[#444] transition-colors group-hover:bg-[#eae9e5] group-hover:text-black">
            {icon}
          </div>
        )}

        <div>
          <p className="text-[13px] font-semibold text-[#292929] transition-colors group-hover:text-black">
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