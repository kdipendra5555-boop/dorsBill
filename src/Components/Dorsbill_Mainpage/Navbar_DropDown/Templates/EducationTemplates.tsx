import { ArrowRight } from "lucide-react";

export default function EducationTemplates() {
  return (
    <div>
      <div className="mb-7">
        <h2 className="text-[22px] font-semibold tracking-tight text-[#222]">
          Education Templates
        </h2>
        <p className="mt-2 max-w-2xl text-[13px] leading-6 text-[#777]">
          Billing templates for schools, colleges, coaching institutes and education services.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-2">
        {[
          ["School Fee Receipt", "Receipt for school fee payments."],
          ["College Fee Receipt", "Professional college fee receipt."],
          ["Coaching Fee Invoice", "Invoice for coaching and tuition fees."],
          ["Course Fee Invoice", "Billing for educational courses."],
          ["Admission Fee Receipt", "Receipt for admission payments."],
          ["Exam Fee Receipt", "Receipt for examination fees."],
          ["Training Invoice", "Invoice for training programs."],
          ["Education Service Invoice", "Billing for education-related services."],
        ].map(([title, description]) => (
          <a
            key={title}
            href="#template"
            className="group flex items-start justify-between border-b border-black/[0.06] py-4"
          >
            <div>
              <p className="text-[13px] font-medium text-[#222]">{title}</p>
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