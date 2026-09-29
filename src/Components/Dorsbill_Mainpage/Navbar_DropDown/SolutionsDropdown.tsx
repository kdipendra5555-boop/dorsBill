import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import BusinessContent from "../../Dorsbill_Mainpage/Navbar_DropDown/Solution/BusinessContent";
import BillingContent from "../../Dorsbill_Mainpage/Navbar_DropDown/Solution/BillingContent";
import IndustriesContent from "../../Dorsbill_Mainpage/Navbar_DropDown/Solution/IndustriesContent";
import TeamsContent from "../../Dorsbill_Mainpage/Navbar_DropDown/Solution/TeamsContent";


type SolutionSection =
  | "business"
  | "teams"
  | "industries"
  | "billing";

export default function SolutionsDropdown() {
  const [open, setOpen] = useState(false);

  const [activeSection, setActiveSection] =
    useState<SolutionSection>("business");

  return (
    <div className="relative">

      {/* Trigger */}
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
        Solutions

        <ChevronDown
          size={13}
          strokeWidth={1.8}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Mega Menu */}
      {open && (
        <div
          className="
            fixed left-0 top-[68px] z-50
            w-full
            border-y border-black/10
            bg-[#faf9f6]
            shadow-[0_18px_50px_rgba(0,0,0,0.08)]
          "
        >

          <div
            className="
              mx-auto flex
              min-h-[390px]
              max-w-[1400px]
              bg-[#faf9f6]
            "
          >

            {/* ==========================================
                LEFT SIDEBAR
            ========================================== */}

            <div
              className="
                flex w-[245px] shrink-0 flex-col
                border-r border-black/10
                bg-[#e9e8e5]
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
                  text-[#777]
                "
              >
                Solutions
              </p>

              <SidebarItem
                label="For Business"
                active={activeSection === "business"}
                onClick={() => setActiveSection("business")}
              />

              <SidebarItem
                label="For Teams"
                active={activeSection === "teams"}
                onClick={() => setActiveSection("teams")}
              />

              <SidebarItem
                label="For Industries"
                active={activeSection === "industries"}
                onClick={() => setActiveSection("industries")}
              />

              <SidebarItem
                label="For Billing"
                active={activeSection === "billing"}
                onClick={() => setActiveSection("billing")}
              />

              {/* CTA */}
              <div className="mt-auto pt-10">

                <a
                  href="#solutions"
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
                    Explore all solutions
                  </span>

                  <ArrowRight
                    size={14}
                    strokeWidth={1.7}
                  />
                </a>

              </div>

            </div>

            {/* ==========================================
                RIGHT CONTENT
            ========================================== */}

            <div
              className="
                flex-1
                bg-[#faf9f6]
                px-8 py-7
              "
            >

              {activeSection === "business" && (
                <BusinessContent />
              )}

              {activeSection === "teams" && (
                <TeamsContent />
              )}

              {activeSection === "industries" && (
                <IndustriesContent />
              )}

              {activeSection === "billing" && (
                <BillingContent />
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
            ? "bg-[#f7f6f2] text-[#222]"
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
          ${
            active
              ? "translate-x-0.5"
              : ""
          }
        `}
      />
    </button>
  );
}