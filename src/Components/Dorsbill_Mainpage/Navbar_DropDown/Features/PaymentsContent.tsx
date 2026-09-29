import { ArrowRight } from "lucide-react";

type PaymentItemProps = {
  title: string;
  description: string;
  href: string;
};

function PaymentItem({
  title,
  description,
  href,
}: PaymentItemProps) {
  return (
    <a
      href={href}
      className="
        group
        block
        rounded-lg
        transition-colors
        duration-200
        hover:bg-black/[0.025]
      "
    >
      <p
        className="
          text-[13px]
          font-semibold
          tracking-[-0.1px]
          text-[#292929]
          transition-colors
          duration-200
          group-hover:text-black
        "
      >
        {title}
      </p>

      <p
        className="
          mt-1
          max-w-[250px]
          text-[12px]
          leading-[1.55]
          text-[#777]
        "
      >
        {description}
      </p>
    </a>
  );
}

export default function PaymentsContent() {
  return (
    <div className="w-full">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <div className="mb-7 flex items-center gap-2">
        <h3
          className="
            text-[24px]
            font-medium
            tracking-[-0.5px]
            text-[#222]
          "
        >
          Payments
        </h3>

        <ArrowRight
          size={20}
          strokeWidth={1.5}
          className="text-[#777]"
        />
      </div>

      {/* =====================================================
          PAYMENT CONTENT
      ===================================================== */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-x-12">
        {/* =================================================
            COLUMN 1
        ================================================= */}
        <div className="space-y-6">
          <PaymentItem
            title="Payment Tracking"
            description="Track paid, pending and outstanding invoices."
            href="#payment-tracking"
          />

          <PaymentItem
            title="Payment Status"
            description="See the current status of every invoice payment."
            href="#payment-status"
          />

          <PaymentItem
            title="Outstanding Payments"
            description="Keep track of invoices that are still waiting for payment."
            href="#outstanding-payments"
          />
        </div>

        {/* =================================================
            COLUMN 2
        ================================================= */}
        <div className="space-y-6">
          <PaymentItem
            title="UPI Payments"
            description="Make it easier for customers to pay using UPI."
            href="#upi-payments"
          />

          <PaymentItem
            title="Payment Links"
            description="Share simple payment links with your customers."
            href="#payment-links"
          />

          <PaymentItem
            title="Payment Records"
            description="Keep your payment history organized."
            href="#payment-records"
          />
        </div>

        {/* =================================================
            COLUMN 3
        ================================================= */}
        <div className="space-y-6">
          <PaymentItem
            title="Customer Payments"
            description="Manage payment information for your customers."
            href="#customer-payments"
          />

          <PaymentItem
            title="Payment Reminders"
            description="Remind customers about pending invoices."
            href="#payment-reminders"
          />

          <PaymentItem
            title="Payment Reports"
            description="Understand your business payment activity."
            href="#payment-reports"
          />
        </div>
      </div>
    </div>
  );
}