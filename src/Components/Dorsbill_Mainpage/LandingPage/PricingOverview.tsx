import {
  ArrowRight,
  Calculator,
  Check,
  Wallet,
  Zap,
} from "lucide-react";

export default function PricingOverview() {
  return (
    <section className="w-full bg-[#f7f6f2]">

      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10">

        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="max-w-[650px]">

          <div className="mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#292825]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-[#888]">
              How pricing works
            </span>
          </div>

          <h2 className="text-[34px] font-medium leading-[1.08] tracking-[-1.5px] text-[#222] sm:text-[42px]">
            Simple billing.
            <br />
            No confusing subscriptions.
          </h2>

          <p className="mt-5 max-w-[540px] text-[13px] leading-[1.7] text-[#777]">
            DorsBill uses a simple usage-based system. You get 100
            bills free every day, and only the bills after that are
            charged according to your daily billing volume.
          </p>

        </div>


        {/* =====================================================
            HOW IT WORKS CARDS
        ===================================================== */}

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">

          <InfoCard
            icon={<Wallet size={18} strokeWidth={1.5} />}
            number="01"
            title="Recharge your balance"
            description="Add money to your DorsBill wallet. You only pay when your usage goes beyond the free daily limit."
          />

          <InfoCard
            icon={<Calculator size={18} strokeWidth={1.5} />}
            number="02"
            title="Create your bills"
            description="Create invoices normally. Your first 100 bills every day are completely free."
          />

          <InfoCard
            icon={<Zap size={18} strokeWidth={1.5} />}
            number="03"
            title="Pay automatically"
            description="Once you cross 100 bills, the applicable rate is automatically deducted from your balance."
          />

        </div>


        {/* =====================================================
            CALCULATION SECTION
        ===================================================== */}

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1.15fr]">

          {/* Left */}
          <div className="rounded-2xl border border-[#e5e4df] bg-white p-7 sm:p-9">

            <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-[#999]">
              Example
            </p>

            <h3 className="mt-4 text-[24px] font-medium tracking-[-0.8px] text-[#222]">
              Billing 400 invoices
            </h3>

            <p className="mt-3 max-w-[420px] text-[12px] leading-[1.7] text-[#777]">
              The first 100 invoices are free. The remaining 300
              invoices fall into the 250–499 pricing range.
            </p>


            {/* Calculation */}
            <div className="mt-8 rounded-xl bg-[#f7f6f2] p-5">

              <div className="flex items-center justify-between">

                <span className="text-[11px] text-[#777]">
                  Total bills
                </span>

                <span className="text-[12px] font-medium text-[#222]">
                  400
                </span>

              </div>

              <div className="my-3 h-px bg-black/[0.07]" />

              <div className="flex items-center justify-between">

                <span className="text-[11px] text-[#777]">
                  Free bills
                </span>

                <span className="text-[12px] font-medium text-[#222]">
                  100
                </span>

              </div>

              <div className="mt-3 flex items-center justify-between">

                <span className="text-[11px] text-[#777]">
                  Chargeable bills
                </span>

                <span className="text-[12px] font-medium text-[#222]">
                  300
                </span>

              </div>

              <div className="mt-3 flex items-center justify-between">

                <span className="text-[11px] text-[#777]">
                  Rate
                </span>

                <span className="text-[12px] font-medium text-[#222]">
                  ₹0.02 / bill
                </span>

              </div>

              <div className="mt-5 flex items-center justify-between border-t border-black/[0.07] pt-5">

                <span className="text-[11px] font-medium text-[#555]">
                  Total deduction
                </span>

                <span className="text-[20px] font-medium tracking-[-0.5px] text-[#222]">
                  ₹6
                </span>

              </div>

            </div>

          </div>


          {/* Right */}
          <div className="rounded-2xl border border-[#e5e4df] bg-[#292825] p-7 text-white sm:p-9">

            <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-white/40">
              Pricing model
            </p>

            <h3 className="mt-4 text-[24px] font-medium tracking-[-0.8px]">
              The more you bill,
              <br />
              the less you pay.
            </h3>

            <p className="mt-3 max-w-[430px] text-[12px] leading-[1.7] text-white/55">
              DorsBill automatically applies the rate based on your
              daily billing volume. There is no need to manually
              change your plan.
            </p>


            {/* Rates */}
            <div className="mt-8 space-y-2">

              <DarkRate
                range="0 – 100"
                rate="Free"
              />

              <DarkRate
                range="101 – 249"
                rate="₹0.03 / bill"
              />

              <DarkRate
                range="250 – 499"
                rate="₹0.02 / bill"
              />

              <DarkRate
                range="500+"
                rate="₹0.01 / bill"
              />

            </div>

          </div>

        </div>


        {/* =====================================================
            KEY BENEFITS
        ===================================================== */}

        <div className="mt-16 border-t border-black/[0.08] pt-10">

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

            <Benefit
              title="No monthly commitment"
              description="No mandatory subscription. Your billing usage determines your charges."
            />

            <Benefit
              title="Automatic deductions"
              description="Your recharge balance handles billing automatically without manual payments."
            />

            <Benefit
              title="Transparent usage"
              description="Always know your bill count, rate, deductions and remaining balance."
            />

          </div>

        </div>


        {/* =====================================================
            CTA
        ===================================================== */}

        <div className="mt-20 flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#e5e4df] bg-white p-7 sm:flex-row sm:items-center sm:p-9">

          <div>

            <h3 className="text-[20px] font-medium tracking-[-0.6px] text-[#222]">
              Ready to start billing?
            </h3>

            <p className="mt-2 text-[11px] text-[#888]">
              Get your first 100 bills free every day.
            </p>

          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-[#292825] px-5 py-3 text-[11px] font-medium text-white transition hover:bg-black"
          >
            Get started

            <ArrowRight
              size={13}
              strokeWidth={1.6}
            />
          </button>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   INFO CARD
========================================================= */

function InfoCard({
  icon,
  number,
  title,
  description,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-[#e5e4df] bg-white p-6">

      <div className="flex items-center justify-between">

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f5f4f0] text-[#444]">
          {icon}
        </div>

        <span className="text-[10px] font-medium tracking-[0.08em] text-[#aaa]">
          {number}
        </span>

      </div>

      <h3 className="mt-6 text-[13px] font-semibold text-[#292929]">
        {title}
      </h3>

      <p className="mt-2 text-[11px] leading-[1.65] text-[#777]">
        {description}
      </p>

    </div>
  );
}


/* =========================================================
   DARK RATE
========================================================= */

function DarkRate({
  range,
  rate,
}: {
  range: string;
  rate: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-3">

      <span className="text-[11px] text-white/55">
        {range} bills
      </span>

      <span className="text-[11px] font-medium text-white">
        {rate}
      </span>

    </div>
  );
}


/* =========================================================
   BENEFIT
========================================================= */

function Benefit({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>

      <div className="flex items-center gap-2">

        <Check
          size={14}
          strokeWidth={1.7}
          className="text-[#555]"
        />

        <h4 className="text-[12px] font-semibold text-[#333]">
          {title}
        </h4>

      </div>

      <p className="mt-2 pl-5 text-[11px] leading-[1.6] text-[#888]">
        {description}
      </p>

    </div>
  );
}