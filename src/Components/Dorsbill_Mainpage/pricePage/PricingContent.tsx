import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import PricingCard from "./PricingCard";
import PricingSteps from "./PricingSteps";
import PricingTable from "./PricingTable";
import PricingExamples from "./PricingExamples";
import PricingFeatures from "./PricingFeatures";
import PricingRules from "./PricingRules";

export default function PricingContent() {
  return (
    <div className="w-full">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="mb-7 flex items-center gap-2">
        <h3 className="text-[24px] font-medium tracking-[-0.5px] text-[#222]">
          Pricing
        </h3>

        <ArrowRight
          size={20}
          strokeWidth={1.5}
          className="text-[#777]"
        />
      </div>

      <p className="mb-8 max-w-2xl text-[12px] leading-[1.7] text-[#777]">
        Simple usage-based pricing built for businesses of every size.
        Your first 100 bills every day are completely free. After that,
        a small per-bill charge is automatically deducted from your
        DorsBill recharge balance.
      </p>


      {/* =====================================================
          PRICING CARDS
      ===================================================== */}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">

        <PricingCard
          title="Free"
          range="0 – 100 bills"
          price="₹0"
          period="free"
          description="Start creating invoices without any daily billing cost."
          features={[
            "100 bills free every day",
            "Professional templates",
            "PDF export",
            "Print invoices",
            "Share invoices",
            "Local data storage",
          ]}
          href="/pricing/free"
        />

        <PricingCard
          title="Standard"
          range="101 – 249 bills"
          price="₹0.03"
          period="per bill"
          description="Simple usage-based pricing for regular businesses."
          features={[
            "First 100 bills free",
            "₹0.03 per additional bill",
            "Professional templates",
            "PDF, print & sharing",
            "Invoice history",
            "Recharge wallet",
          ]}
          href="/pricing/standard"
        />

        <PricingCard
          title="Growth"
          range="250 – 499 bills"
          price="₹0.02"
          period="per bill"
          description="Lower per-bill pricing as your billing volume grows."
          features={[
            "First 100 bills free",
            "₹0.02 per additional bill",
            "Advanced templates",
            "AI template generation",
            "Cloud backup",
            "Usage tracking",
          ]}
          href="/pricing/growth"
          popular
        />

        <PricingCard
          title="Business"
          range="500+ bills"
          price="₹0.01"
          period="per bill"
          description="Our lowest per-bill rate for high-volume businesses."
          features={[
            "First 100 bills free",
            "₹0.01 per additional bill",
            "Everything in Growth",
            "Multiple businesses",
            "Team access",
            "Priority support",
          ]}
          href="/pricing/business"
        />

      </div>


      {/* =====================================================
          RECHARGE
      ===================================================== */}

      <div className="mt-8 flex flex-col gap-4 rounded-xl border border-[#e8e7e3] bg-[#fafaf8] p-6 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h4 className="text-[14px] font-semibold text-[#292929]">
            Recharge once. Bill whenever you need.
          </h4>

          <p className="mt-1.5 max-w-xl text-[11px] leading-[1.6] text-[#777]">
            Add balance to your DorsBill wallet and charges will be
            automatically deducted whenever your daily free limit is
            exceeded.
          </p>
        </div>

        <Link
          to="/recharge"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#292825] px-5 py-3 text-[11px] font-medium text-white transition hover:bg-black"
        >
          Recharge balance

          <ArrowRight
            size={13}
            strokeWidth={1.6}
          />
        </Link>

      </div>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <PricingSteps />


      {/* =====================================================
          PRICING TABLE
      ===================================================== */}

      <PricingTable />


      {/* =====================================================
          EXAMPLES
      ===================================================== */}

      <PricingExamples />


      {/* =====================================================
          FEATURES
      ===================================================== */}

      <PricingFeatures />


      {/* =====================================================
          RULES
      ===================================================== */}

      <PricingRules />


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <div className="mt-10 rounded-xl border border-[#e8e7e3] bg-[#fafaf8] px-6 py-9 text-center">

        <h3 className="text-[23px] font-medium tracking-[-0.7px] text-[#222]">
          Start billing today.
        </h3>

        <p className="mx-auto mt-3 max-w-md text-[12px] leading-[1.6] text-[#777]">
          Your first 100 bills every day are free. No fixed monthly
          subscription is required.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">

          <Link
            to="/recharge"
            className="inline-flex items-center gap-2 rounded-lg bg-[#292825] px-5 py-3 text-[11px] font-medium text-white transition hover:bg-black"
          >
            Get started

            <ArrowRight
              size={13}
              strokeWidth={1.6}
            />
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg border border-[#deddd9] bg-white px-5 py-3 text-[11px] font-medium text-[#444] transition hover:border-[#cfcfc9]"
          >
            Back to DorsBill
          </Link>

        </div>

      </div>

    </div>
  );
}