import {
  ArrowRight,
  
} from "lucide-react";

function AutomationItem({
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
              group-hover:bg-[#e5e4df]
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

export default function AutomationContent() {
  return (
    <div>

      <div className="mb-7 flex items-center gap-2">
        <h3 className="text-[24px] font-medium tracking-[-0.5px] text-[#222]">
          Automation
        </h3>

        <ArrowRight
          size={20}
          strokeWidth={1.5}
          className="text-[#777]"
        />
      </div>

      <div className="grid grid-cols-3 gap-x-12">

        <div className="space-y-6">

          <AutomationItem
            
            title="Smart Workflows"
            description="Automate repetitive billing tasks and workflows."
            href="#smart-workflows"
          />

          <AutomationItem
            title="Recurring Invoices"
            description="Automatically manage recurring customer invoices."
            href="#recurring-invoices"
          />

          <AutomationItem
            title="Automatic Calculations"
            description="Automatically calculate taxes and invoice totals."
            href="#automatic-calculations"
          />

        </div>

        <div className="space-y-6">

          <AutomationItem
           
            title="Recurring Billing"
            description="Simplify regular billing with automated workflows."
            href="#recurring-billing"
          />

          <AutomationItem
            title="Payment Reminders"
            description="Automate reminders for pending customer payments."
            href="#payment-reminders"
          />

          <AutomationItem
            title="Invoice Status"
            description="Keep invoice statuses updated throughout the workflow."
            href="#invoice-status"
          />

        </div>

        <div className="space-y-6">

          <AutomationItem
            
            title="AI Assistance"
            description="Use AI to speed up invoice creation and billing tasks."
            href="#ai-assistance"
          />

          <AutomationItem
            title="Smart Templates"
            description="Use saved templates to speed up repetitive invoices."
            href="#smart-templates"
          />

          <AutomationItem
            title="Workflow Shortcuts"
            description="Quickly access the billing actions you use most."
            href="#workflow-shortcuts"
          />

        </div>

      </div>
    </div>
  );
}