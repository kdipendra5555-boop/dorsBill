export default function PricingSteps() {
  return (
    <section className="mt-10 border-t border-[#e8e7e3] pt-7">

      <h4 className="text-[13px] font-semibold text-[#292929]">
        How DorsBill pricing works
      </h4>

      <p className="mt-1 text-[11px] text-[#888]">
        No complicated plans. Just bill and pay for what you use.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">

        <Step
          number="01"
          title="Recharge"
          description="Add money to your DorsBill wallet whenever you need."
        />

        <Step
          number="02"
          title="Create bills"
          description="Create your invoices normally. Your first 100 bills every day are free."
        />

        <Step
          number="03"
          title="Automatic deduction"
          description="After 100 bills, the applicable per-bill rate is deducted automatically."
        />

      </div>

    </section>
  );
}


function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-[#e8e7e3] bg-white p-5">

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