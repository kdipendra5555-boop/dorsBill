import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PricingCardProps {
  title: string;
  range: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  href: string;
  popular?: boolean;
}

export default function PricingCard({
  title,
  range,
  price,
  period,
  description,
  features,
  href,
  popular,
}: PricingCardProps) {
  return (
    <Link
      to={href}
      className={`group relative block rounded-xl border p-5 transition-all duration-200 ${
        popular
          ? "border-[#222] bg-[#fafaf8]"
          : "border-[#e8e7e3] bg-white hover:border-[#d5d4d0]"
      }`}
    >

      {/* Popular */}
      {popular && (
        <div className="absolute right-4 top-4 rounded-full bg-[#292825] px-2.5 py-1 text-[9px] font-medium text-white">
          Popular
        </div>
      )}

      {/* Title */}
      <p className="text-[13px] font-semibold text-[#292929]">
        {title}
      </p>

      {/* Range */}
      <div className="mt-2">
        <span className="rounded-md bg-[#f2f1ed] px-2 py-1 text-[10px] font-medium text-[#666]">
          {range}
        </span>
      </div>

      {/* Description */}
      <p className="mt-4 min-h-[38px] text-[11px] leading-[1.55] text-[#777]">
        {description}
      </p>

      {/* Price */}
      <div className="mt-5 flex items-baseline gap-1">

        <span className="text-[27px] font-medium tracking-[-1px] text-[#222]">
          {price}
        </span>

        <span className="text-[10px] text-[#888]">
          {period}
        </span>

      </div>

      {/* Divider */}
      <div className="my-5 h-px bg-[#eeeeeb]" />

      {/* Features */}
      <div className="space-y-2.5">

        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-start gap-2"
          >
            <Check
              size={13}
              strokeWidth={1.7}
              className="mt-[1px] shrink-0 text-[#555]"
            />

            <span className="text-[11px] leading-[1.45] text-[#666]">
              {feature}
            </span>
          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="mt-6 flex items-center gap-1.5 text-[11px] font-medium text-[#333] transition-transform duration-200 group-hover:translate-x-0.5">

        View details

        <ArrowRight
          size={13}
          strokeWidth={1.5}
        />

      </div>

    </Link>
  );
}