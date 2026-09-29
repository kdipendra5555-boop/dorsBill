import { ArrowRight } from "lucide-react";

export default function HealthcareTemplates() {
  const templates = [
    ["Clinic Invoice", "General invoice for clinic services."],
    ["Hospital Invoice", "Professional hospital billing template."],
    ["Doctor Consultation Invoice", "Billing for doctor consultations."],
    ["Diagnostic Invoice", "Invoice for diagnostic services."],
    ["Laboratory Invoice", "Billing for laboratory tests."],
    ["Pharmacy Bill", "Invoice for medicines and pharmacy sales."],
    ["Dental Clinic Invoice", "Billing for dental treatment."],
    ["Physiotherapy Invoice", "Invoice for physiotherapy services."],
    ["Health Checkup Invoice", "Billing for health checkup packages."],
    ["Medical Service Receipt", "Receipt for healthcare payments."],
  ];

  return (
    <div>
      <h2 className="text-[22px] font-semibold text-[#222]">
        Healthcare Templates
      </h2>

      <p className="mt-2 text-[13px] leading-6 text-[#777]">
        Billing templates for clinics, hospitals, doctors, pharmacies and
        healthcare providers.
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