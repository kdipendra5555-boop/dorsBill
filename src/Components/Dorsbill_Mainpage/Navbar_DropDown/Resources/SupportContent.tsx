import {
  ArrowRight,
  
} from "lucide-react";

function Item({
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
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#f5f4f1] text-[#444] group-hover:bg-[#eae9e5] group-hover:text-black">
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

export default function SupportContent() {
  return (
    <div>

      <div className="mb-7 flex items-center gap-2">
        <h3 className="text-[24px] font-medium tracking-[-0.5px] text-[#222]">
          Support
        </h3>

        <ArrowRight
          size={20}
          strokeWidth={1.5}
          className="text-[#777]"
        />
      </div>

      <div className="grid grid-cols-3 gap-x-12">

        <div className="space-y-6">

          <Item
            
            title="FAQ"
            description="Find answers to frequently asked questions about DorsBill."
            href="#faq"
          />

          <Item
           
            title="Help Center"
            description="Get help with invoices, billing and account setup."
            href="#help"
          />

        </div>

        <div className="space-y-6">

          <Item
            
            title="Documentation"
            description="Explore detailed product documentation and guides."
            href="#documentation"
          />

          <Item
            title="Troubleshooting"
            description="Find solutions to common DorsBill problems."
            href="#troubleshooting"
          />

        </div>

        <div className="space-y-6">

          <Item
            title="Contact Support"
            description="Talk to our support team whenever you need help."
            href="#support"
          />

          <Item
            title="Report a Problem"
            description="Let us know if something isn't working correctly."
            href="#report"
          />

        </div>

      </div>
    </div>
  );
}