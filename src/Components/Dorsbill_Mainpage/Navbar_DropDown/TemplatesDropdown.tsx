import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

import GeneralTemplates from "./Templates/GeneralTemplates";
import QuotationTemplates from "./Templates/QuotationTemplates";
import RetailTemplates from "./Templates/RetailTemplates";
import PrintingTemplates from "./Templates/PrintingTemplates";
import FreelancerTemplates from "./Templates/FreelancerTemplates";
import SoftwareTemplates from "./Templates/SoftwareTemplates";
import AgencyTemplates from "./Templates/AgencyTemplates";
import ConsultancyTemplates from "./Templates/ConsultancyTemplates";
import ConstructionTemplates from "./Templates/ConstructionTemplates";
import RealEstateTemplates from "./Templates/RealEstateTemplates";
import TransportTemplates from "./Templates/TransportTemplates";
import AutomobileTemplates from "./Templates/AutomobileTemplates";
import HotelTemplates from "./Templates/HotelTemplates";
import HealthcareTemplates from "./Templates/HealthcareTemplates";
import EducationTemplates from "./Templates/EducationTemplates";
import TravelTemplates from "./Templates/TravelTemplates";
import EventTemplates from "./Templates/EventTemplates";
import PhotographyTemplates from "./Templates/PhotographyTemplates";
import SalonTemplates from "./Templates/SalonTemplates";
import GymTemplates from "./Templates/GymTemplates";
import RepairTemplates from "./Templates/RepairTemplates";
import AgricultureTemplates from "./Templates/AgricultureTemplates";
import ManufacturingTemplates from "./Templates/ManufacturingTemplates";
import WholesaleTemplates from "./Templates/WholesaleTemplates";
import ExportTemplates from "./Templates/ExportTemplates";
import SubscriptionTemplates from "./Templates/SubscriptionTemplates";
import ProfessionalTemplates from "./Templates/ProfessionalTemplates";
import UtilityTemplates from "./Templates/UtilityTemplates";
import AccountingTemplates from "./Templates/AccountingTemplates";
import SpecialTemplates from "./Templates/SpecialTemplates";

type TemplateCategory =
  | "general"
  | "quotation"
  | "retail"
  | "printing"
  | "freelancer"
  | "software"
  | "agency"
  | "consultancy"
  | "construction"
  | "realestate"
  | "transport"
  | "automobile"
  | "hotel"
  | "healthcare"
  | "education"
  | "travel"
  | "event"
  | "photography"
  | "salon"
  | "gym"
  | "repair"
  | "agriculture"
  | "manufacturing"
  | "wholesale"
  | "export"
  | "subscription"
  | "professional"
  | "utility"
  | "accounting"
  | "special";

const categories: {
  id: TemplateCategory;
  label: string;
}[] = [
  {
    id: "general",
    label: "General / Common Business",
  },
  {
    id: "quotation",
    label: "Quotation / Sales Documents",
  },
  {
    id: "retail",
    label: "Retail / Shop",
  },
  {
    id: "printing",
    label: "Printing Press / DTP / Xerox",
  },
  {
    id: "freelancer",
    label: "Freelancer",
  },
  {
    id: "software",
    label: "Software / IT",
  },
  {
    id: "agency",
    label: "Agency",
  },
  {
    id: "consultancy",
    label: "Consultancy",
  },
  {
    id: "construction",
    label: "Construction",
  },
  {
    id: "realestate",
    label: "Real Estate",
  },
  {
    id: "transport",
    label: "Transport / Logistics",
  },
  {
    id: "automobile",
    label: "Automobile / Garage",
  },
  {
    id: "hotel",
    label: "Hotel / Restaurant",
  },
  {
    id: "healthcare",
    label: "Healthcare",
  },
  {
    id: "education",
    label: "Education",
  },
  {
    id: "travel",
    label: "Travel / Tourism",
  },
  {
    id: "event",
    label: "Event Management",
  },
  {
    id: "photography",
    label: "Photography / Videography",
  },
  {
    id: "salon",
    label: "Salon / Beauty",
  },
  {
    id: "gym",
    label: "Gym / Fitness",
  },
  {
    id: "repair",
    label: "Repair / Maintenance",
  },
  {
    id: "agriculture",
    label: "Agriculture",
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
  },
  {
    id: "wholesale",
    label: "Wholesale / Distribution",
  },
  {
    id: "export",
    label: "Export / Import",
  },
  {
    id: "subscription",
    label: "Subscription / Membership",
  },
  {
    id: "professional",
    label: "Professional Services",
  },
  {
    id: "utility",
    label: "Utility / Local Services",
  },
  {
    id: "accounting",
    label: "Documents / Accounting",
  },
  {
    id: "special",
    label: "Special Invoice Types",
  },
];

export default function TemplatesDropdown() {
  const [open, setOpen] = useState(false);

  const [activeCategory, setActiveCategory] =
    useState<TemplateCategory>("general");

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
        aria-expanded={open}
        aria-haspopup="true"
      >
        Templates

        <ChevronDown
          size={13}
          strokeWidth={1.8}
          className={`
            transition-transform
            duration-200
            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      {/* =====================================================
          MEGA MENU
      ===================================================== */}

      {open && (
        <div
          className="
            fixed
            left-0
            right-0
            top-[68px]
            z-[9999]
            w-screen
            overflow-hidden
            border-y
            border-black/10
            bg-white
            shadow-[0_18px_50px_rgba(0,0,0,0.08)]
          "
        >
          {/* =================================================
              MAIN MENU CONTAINER
          ================================================= */}

          <div
            className="
              mx-auto
              flex
              h-[calc(100vh-68px)]
              min-h-[500px]
              w-full
              max-w-[1400px]
            "
          >
            {/* =================================================
                LEFT SIDEBAR
            ================================================= */}

            <aside
              className="
                flex
                w-[430px]
                shrink-0
                flex-col
                overflow-y-auto
                border-r
                border-black/10
                bg-[#e9e8e5]
                p-6

                scrollbar-thin
                scrollbar-thumb-black/10
                scrollbar-track-transparent
              "
            >
              {/* Heading */}

              <div className="mb-4 px-2">
                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#777]
                  "
                >
                  Template Categories
                </p>

               
              </div>

              {/* =================================================
                  CATEGORY GRID
              ================================================= */}

              <div className="grid grid-cols-2 gap-1">
                {categories.map((category) => {
                  const active =
                    activeCategory === category.id;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() =>
                        setActiveCategory(category.id)
                      }
                      className={`
                        group
                        flex
                        min-h-[48px]
                        w-full
                        items-center
                        justify-between
                        rounded-[5px]
                        px-3
                        py-2
                        text-left
                        transition-all
                        duration-150

                        ${
                          active
                            ? "bg-[#f7f6f2] text-[#222]"
                            : "text-[#555] hover:bg-black/[0.04] hover:text-black"
                        }
                      `}
                    >
                      <span
                        className="
                          pr-2
                          text-[11px]
                          font-medium
                          leading-[15px]
                        "
                      >
                        {category.label}
                      </span>

                      <ArrowRight
                        size={12}
                        strokeWidth={1.7}
                        className={`
                          shrink-0
                          transition-transform
                          duration-150
                          ${
                            active
                              ? "translate-x-0.5"
                              : "opacity-40 group-hover:opacity-100"
                          }
                        `}
                      />
                    </button>
                  );
                })}
              </div>

              {/* =================================================
                  CTA
              ================================================= */}

              <div className="mt-auto pt-6">
                <a
                  href="#templates"
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-[5px]
                    bg-[#292825]
                    px-4
                    py-3
                    text-[12px]
                    font-medium
                    text-white
                    transition-all
                    duration-200
                    hover:bg-black
                  "
                >
                  <span>
                    Explore all templates
                  </span>

                  <ArrowRight
                    size={14}
                    strokeWidth={1.7}
                  />
                </a>
              </div>
            </aside>

            {/* =================================================
                RIGHT CONTENT
            ================================================= */}

            <section
              className="
                min-w-0
                flex-1
                overflow-y-auto
                bg-[#faf9f6]
                px-10
                py-8

                scrollbar-thin
                scrollbar-thumb-black/10
                scrollbar-track-transparent
              "
            >
              {/* GENERAL */}

              {activeCategory === "general" && (
                <GeneralTemplates />
              )}

              {/* QUOTATION */}

              {activeCategory === "quotation" && (
                <QuotationTemplates />
              )}

              {/* RETAIL */}

              {activeCategory === "retail" && (
                <RetailTemplates />
              )}

              {/* PRINTING */}

              {activeCategory === "printing" && (
                <PrintingTemplates />
              )}

              {/* FREELANCER */}

              {activeCategory === "freelancer" && (
                <FreelancerTemplates />
              )}

              {/* SOFTWARE */}

              {activeCategory === "software" && (
                <SoftwareTemplates />
              )}

              {/* AGENCY */}

              {activeCategory === "agency" && (
                <AgencyTemplates />
              )}

              {/* CONSULTANCY */}

              {activeCategory === "consultancy" && (
                <ConsultancyTemplates />
              )}

              {/* CONSTRUCTION */}

              {activeCategory === "construction" && (
                <ConstructionTemplates />
              )}

              {/* REAL ESTATE */}

              {activeCategory === "realestate" && (
                <RealEstateTemplates />
              )}

              {/* TRANSPORT */}

              {activeCategory === "transport" && (
                <TransportTemplates />
              )}

              {/* AUTOMOBILE */}

              {activeCategory === "automobile" && (
                <AutomobileTemplates />
              )}

              {/* HOTEL */}

              {activeCategory === "hotel" && (
                <HotelTemplates />
              )}

              {/* HEALTHCARE */}

              {activeCategory === "healthcare" && (
                <HealthcareTemplates />
              )}

              {/* EDUCATION */}

              {activeCategory === "education" && (
                <EducationTemplates />
              )}

              {/* TRAVEL */}

              {activeCategory === "travel" && (
                <TravelTemplates />
              )}

              {/* EVENT */}

              {activeCategory === "event" && (
                <EventTemplates />
              )}

              {/* PHOTOGRAPHY */}

              {activeCategory === "photography" && (
                <PhotographyTemplates />
              )}

              {/* SALON */}

              {activeCategory === "salon" && (
                <SalonTemplates />
              )}

              {/* GYM */}

              {activeCategory === "gym" && (
                <GymTemplates />
              )}

              {/* REPAIR */}

              {activeCategory === "repair" && (
                <RepairTemplates />
              )}

              {/* AGRICULTURE */}

              {activeCategory === "agriculture" && (
                <AgricultureTemplates />
              )}

              {/* MANUFACTURING */}

              {activeCategory === "manufacturing" && (
                <ManufacturingTemplates />
              )}

              {/* WHOLESALE */}

              {activeCategory === "wholesale" && (
                <WholesaleTemplates />
              )}

              {/* EXPORT */}

              {activeCategory === "export" && (
                <ExportTemplates />
              )}

              {/* SUBSCRIPTION */}

              {activeCategory === "subscription" && (
                <SubscriptionTemplates />
              )}

              {/* PROFESSIONAL */}

              {activeCategory === "professional" && (
                <ProfessionalTemplates />
              )}

              {/* UTILITY */}

              {activeCategory === "utility" && (
                <UtilityTemplates />
              )}

              {/* ACCOUNTING */}

              {activeCategory === "accounting" && (
                <AccountingTemplates />
              )}

              {/* SPECIAL */}

              {activeCategory === "special" && (
                <SpecialTemplates />
              )}
            </section>
          </div>
        </div>
      )}
    </div>
  );
}