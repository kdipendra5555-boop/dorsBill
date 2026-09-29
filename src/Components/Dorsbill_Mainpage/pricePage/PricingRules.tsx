export default function PricingRules() {
  return (
    <section className="mt-10">

      <h4 className="text-[13px] font-semibold text-[#292929]">
        Pricing rules
      </h4>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">

        <Rule
          number="01"
          title="100 free bills every day"
          description="Every day starts with a fresh allowance of 100 free bills."
        />

        <Rule
          number="02"
          title="No fixed monthly subscription"
          description="There is no mandatory monthly subscription. Your usage determines the charge."
        />

        <Rule
          number="03"
          title="Automatic wallet deduction"
          description="Applicable charges are automatically deducted from your available recharge balance."
        />

        <Rule
          number="04"
          title="Transparent usage"
          description="View your bill count, applicable rate, deductions and remaining wallet balance."
        />

      </div>

    </section>
  );
}


function Rule({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-[#e8e7e3] bg-white p-5">

      <span className="text-[10px] font-medium tracking-[0.08em] text-[#aaa]">
        {number}
      </span>

      <h5 className="mt-3 text-[12px] font-semibold text-[#292929]">
        {title}
      </h5>

      <p className="mt-1.5 text-[11px] leading-[1.6] text-[#777]">
        {description}
      </p>

    </div>
  );
}