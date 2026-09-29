export default function PricingTable() {
  return (
    <section className="mt-10">

      <h4 className="text-[13px] font-semibold text-[#292929]">
        Daily pricing
      </h4>

      <p className="mt-1 text-[11px] text-[#888]">
        The applicable rate is charged only on bills after your first
        100 free bills of the day.
      </p>

      <div className="mt-4 overflow-hidden rounded-xl border border-[#e8e7e3] bg-white">

        {/* Header */}
        <div className="grid grid-cols-3 border-b border-[#e8e7e3] bg-[#fafaf8] px-5 py-3">

          <span className="text-[10px] font-medium uppercase tracking-[0.05em] text-[#999]">
            Daily bills
          </span>

          <span className="text-[10px] font-medium uppercase tracking-[0.05em] text-[#999]">
            Rate
          </span>

          <span className="text-right text-[10px] font-medium uppercase tracking-[0.05em] text-[#999]">
            Billing
          </span>

        </div>

        <RateRow
          range="0 – 100"
          rate="₹0"
          billing="Free"
        />

        <RateRow
          range="101 – 249"
          rate="₹0.03"
          billing="Per additional bill"
        />

        <RateRow
          range="250 – 499"
          rate="₹0.02"
          billing="Per additional bill"
        />

        <RateRow
          range="500+"
          rate="₹0.01"
          billing="Per additional bill"
        />

      </div>

    </section>
  );
}


function RateRow({
  range,
  rate,
  billing,
}: {
  range: string;
  rate: string;
  billing: string;
}) {
  return (
    <div className="grid grid-cols-3 items-center border-b border-[#f0efec] px-5 py-4 last:border-b-0">

      <span className="text-[11px] font-medium text-[#444]">
        {range}
      </span>

      <span className="text-[13px] font-medium text-[#222]">
        {rate}
      </span>

      <span className="text-right text-[10px] text-[#888]">
        {billing}
      </span>

    </div>
  );
}