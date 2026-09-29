import { ArrowRight } from "lucide-react";

export default function GeneralTemplates() {
  return (
    <div>
      {/* Header */}
      <div className="mb-7">
        <h2 className="text-[22px] font-semibold tracking-tight text-[#222]">
          General Business Templates
        </h2>

        <p className="mt-2 max-w-2xl text-[13px] leading-6 text-[#777]">
          Professional invoice and billing templates for everyday businesses.
        </p>
      </div>

      {/* Templates */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-2">

        {/* GST Tax Invoice */}
        <a
          href="#gst-tax-invoice"
          className="group flex items-start justify-between border-b border-black/[0.06] py-4"
        >
          <div>
            <p className="text-[13px] font-medium text-[#222]">
              GST Tax Invoice
            </p>

            <p className="mt-1 text-[11px] leading-5 text-[#888]">
              Standard GST invoice for products and services.
            </p>
          </div>

          <ArrowRight
            size={14}
            className="mt-1 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
          />
        </a>

        {/* Non-GST Invoice */}
        <a
          href="#non-gst-invoice"
          className="group flex items-start justify-between border-b border-black/[0.06] py-4"
        >
          <div>
            <p className="text-[13px] font-medium text-[#222]">
              Non-GST Invoice
            </p>

            <p className="mt-1 text-[11px] leading-5 text-[#888]">
              Simple invoice for non-GST businesses.
            </p>
          </div>

          <ArrowRight
            size={14}
            className="mt-1 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
          />
        </a>

        {/* Simple Invoice */}
        <a
          href="#simple-invoice"
          className="group flex items-start justify-between border-b border-black/[0.06] py-4"
        >
          <div>
            <p className="text-[13px] font-medium text-[#222]">
              Simple Invoice
            </p>

            <p className="mt-1 text-[11px] leading-5 text-[#888]">
              Clean and minimal invoice for daily billing.
            </p>
          </div>

          <ArrowRight
            size={14}
            className="mt-1 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
          />
        </a>

        {/* Cash Invoice */}
        <a
          href="#cash-invoice"
          className="group flex items-start justify-between border-b border-black/[0.06] py-4"
        >
          <div>
            <p className="text-[13px] font-medium text-[#222]">
              Cash Invoice
            </p>

            <p className="mt-1 text-[11px] leading-5 text-[#888]">
              Invoice template for cash transactions.
            </p>
          </div>

          <ArrowRight
            size={14}
            className="mt-1 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
          />
        </a>

        {/* Credit Invoice */}
        <a
          href="#credit-invoice"
          className="group flex items-start justify-between border-b border-black/[0.06] py-4"
        >
          <div>
            <p className="text-[13px] font-medium text-[#222]">
              Credit Invoice
            </p>

            <p className="mt-1 text-[11px] leading-5 text-[#888]">
              Billing template for credit-based transactions.
            </p>
          </div>

          <ArrowRight
            size={14}
            className="mt-1 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
          />
        </a>

        {/* Proforma Invoice */}
        <a
          href="#proforma-invoice"
          className="group flex items-start justify-between border-b border-black/[0.06] py-4"
        >
          <div>
            <p className="text-[13px] font-medium text-[#222]">
              Proforma Invoice
            </p>

            <p className="mt-1 text-[11px] leading-5 text-[#888]">
              Preliminary invoice before final billing.
            </p>
          </div>

          <ArrowRight
            size={14}
            className="mt-1 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
          />
        </a>

      </div>
    </div>
  );
}