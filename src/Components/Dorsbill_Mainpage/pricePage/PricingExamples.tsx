export default function PricingExamples() {
  return (
    <section className="mt-10">

      <h4 className="text-[13px] font-semibold text-[#292929]">
        Pricing examples
      </h4>

      <p className="mt-1 text-[11px] text-[#888]">
        See how much your daily billing would cost.
      </p>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <Example
          bills="80 bills"
          calculation="80 × ₹0"
          amount="₹0"
          description="Within the free daily limit."
        />

        <Example
          bills="200 bills"
          calculation="100 × ₹0.03"
          amount="₹3"
          description="First 100 bills are free."
        />

        <Example
          bills="400 bills"
          calculation="300 × ₹0.02"
          amount="₹6"
          description="First 100 bills are free."
        />

        <Example
          bills="600 bills"
          calculation="500 × ₹0.01"
          amount="₹5"
          description="First 100 bills are free."
        />

      </div>

    </section>
  );
}


function Example({
  bills,
  calculation,
  amount,
  description,
}: {
  bills: string;
  calculation: string;
  amount: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-[#e8e7e3] bg-white p-5">

      <p className="text-[12px] font-medium text-[#444]">
        {bills}
      </p>

      <p className="mt-3 text-[10px] text-[#999]">
        {calculation}
      </p>

      <p className="mt-1 text-[24px] font-medium tracking-[-0.7px] text-[#222]">
        {amount}
      </p>

      <p className="mt-1 text-[10px] leading-[1.5] text-[#999]">
        {description}
      </p>

    </div>
  );
}