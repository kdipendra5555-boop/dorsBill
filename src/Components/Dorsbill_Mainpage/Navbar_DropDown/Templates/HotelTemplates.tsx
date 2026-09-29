import { ArrowRight } from "lucide-react";

export default function HotelTemplates() {
  const templates = [
    ["Hotel Invoice", "Complete invoice for hotel guests."],
    ["Restaurant Invoice", "Billing for restaurant orders."],
    ["Room Service Invoice", "Invoice for room service."],
    ["Room Booking Receipt", "Receipt for hotel room bookings."],
    ["Food Bill", "Simple food and meal bill."],
    ["Banquet Invoice", "Billing for banquet services."],
    ["Catering Invoice", "Invoice for catering services."],
    ["Event Dining Invoice", "Billing for event dining services."],
    ["Hotel Advance Receipt", "Receipt for advance hotel payments."],
    ["Guest Checkout Invoice", "Final invoice at guest checkout."],
  ];

  return (
    <div>
      <h2 className="text-[22px] font-semibold text-[#222]">
        Hotel & Restaurant Templates
      </h2>

      <p className="mt-2 text-[13px] leading-6 text-[#777]">
        Professional billing templates for hotels, restaurants, cafes and
        catering businesses.
      </p>

      <div className="mt-7 grid grid-cols-2 gap-x-8">
        {templates.map(([name, description]) => (
          <a
            key={name}
            href="#template"
            className="group flex items-start justify-between border-b border-black/[0.06] py-4"
          >
            <div>
              <p className="text-[13px] font-medium text-[#222]">{name}</p>
              <p className="mt-1 text-[11px] leading-5 text-[#888]">
                {description}
              </p>
            </div>

            <ArrowRight
              size={14}
              className="mt-1 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
            />
          </a>
        ))}
      </div>
    </div>
  );
}