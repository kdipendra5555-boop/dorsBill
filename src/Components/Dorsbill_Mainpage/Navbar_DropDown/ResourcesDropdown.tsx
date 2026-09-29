import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

import LearnContent from "./Resources/LearnContent";
import SupportContent from "./Resources/SupportContent";
import BusinessContent from "./Resources/BusinessContent";
import CompanyContent from "./Resources/CompanyContent";

type ResourceSection =
  | "learn"
  | "support"
  | "business"
  | "company";

export default function ResourcesDropdown() {
  const [open, setOpen] = useState(false);

  const [activeSection, setActiveSection] =
    useState<ResourceSection>("learn");

  return (
    <div className="relative">

      {/* =====================================================
          TRIGGER
      ===================================================== */}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex items-center gap-1.5
          text-[13px]
          font-medium
          text-[#3f3f3f]
          transition-colors
          hover:text-black
        "
      >
        Resources

        <ChevronDown
          size={13}
          strokeWidth={1.8}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* =====================================================
          MEGA MENU
      ===================================================== */}

      {open && (
        <div
          className="
            fixed left-0 top-[68px] z-50
            w-full
            border-y border-black/10
            bg-white
            shadow-[0_18px_50px_rgba(0,0,0,0.08)]
          "
        >

          <div className="mx-auto flex min-h-[390px] max-w-[1400px]">

            {/* =================================================
                LEFT SIDEBAR
            ================================================= */}

            <div
              className="
                flex w-[245px] shrink-0 flex-col
                border-r border-black/10
                bg-[#faf9f6]
                p-5
              "
            >

              <p
                className="
                  mb-3 px-3
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#999]
                "
              >
                Resources
              </p>

              {/* Learn */}
              <SidebarItem
                label="Learn"
                active={activeSection === "learn"}
                onClick={() => setActiveSection("learn")}
              />

              {/* Support */}
              <SidebarItem
                label="Support"
                active={activeSection === "support"}
                onClick={() => setActiveSection("support")}
              />

              {/* Business */}
              <SidebarItem
                label="Business"
                active={activeSection === "business"}
                onClick={() => setActiveSection("business")}
              />

              {/* Company */}
              <SidebarItem
                label="Company"
                active={activeSection === "company"}
                onClick={() => setActiveSection("company")}
              />

              {/* Bottom CTA */}
              <div className="mt-auto pt-10">

                <a
                  href="#resources"
                  className="
                    flex items-center justify-between
                    bg-[#292825]
                    px-4 py-3
                    text-[12px]
                    font-medium
                    text-white
                    transition-colors
                    hover:bg-black
                  "
                >
                  <span>
                    Explore all resources
                  </span>

                  <ArrowRight
                    size={14}
                    strokeWidth={1.7}
                  />
                </a>

              </div>

            </div>

            {/* =================================================
                RIGHT CONTENT
            ================================================= */}

            <div className="flex-1 px-8 py-7">

              {activeSection === "learn" && (
                <LearnContent />
              )}

              {activeSection === "support" && (
                <SupportContent />
              )}

              {activeSection === "business" && (
                <BusinessContent />
              )}

              {activeSection === "company" && (
                <CompanyContent />
              )}

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

/* ============================================================
   SIDEBAR ITEM
============================================================ */

function SidebarItem({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        mt-1
        flex w-full
        items-center justify-between
        rounded-[5px]
        px-4 py-3
        text-left
        text-[13px]
        font-medium
        transition-all
        ${
          active
            ? "bg-[#e9e8e5] text-[#222]"
            : "text-[#555] hover:bg-black/[0.04] hover:text-black"
        }
      `}
    >
      <span>{label}</span>

      <ArrowRight
        size={14}
        strokeWidth={1.7}
        className={`
          transition-transform
          ${active ? "translate-x-0.5" : ""}
        `}
      />
    </button>
  );
}