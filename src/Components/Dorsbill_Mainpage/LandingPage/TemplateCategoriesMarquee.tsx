import { motion } from "framer-motion";

const categories = [
  "General / Common Business",
  "Quotation / Sales Documents",
  "Retail / Shop",
  "Printing Press / DTP / Xerox",
  "Freelancer",
  "Software / IT",
  "Agency",
  "Consultancy",
  "Construction",
  "Real Estate",
  "Transport / Logistics",
  "Automobile / Garage",
  "Hotel / Restaurant",
  "Healthcare",
  "Education",
  "Travel / Tourism",
  "Event Management",
  "Photography / Videography",
  "Salon / Beauty",
  "Gym / Fitness",
  "Repair / Maintenance",
  "Agriculture",
  "Manufacturing",
  "Wholesale / Distribution",
  "Export / Import",
  "Subscription / Membership",
  "Professional Services",
  "Utility / Local Services",
  "Documents / Accounting",
  "Special Invoice Types",
];

// Duplicate arrays for seamless marquee animation
const rowOne = [...categories, ...categories];
const rowTwo = [...categories, ...categories];

function CategoryCard({ name }: { name: string }) {
  return (
    <div
      className="
        group
        flex
        h-[48px]
        shrink-0
        items-center
        gap-3
        rounded-[8px]
        border
        border-black/[0.07]
        bg-white
        px-4
        shadow-[0_2px_10px_rgba(0,0,0,0.025)]
        transition-all
        duration-300
        hover:border-black/[0.13]
        hover:shadow-[0_5px_18px_rgba(0,0,0,0.055)]
      "
    >
      <span
        className="
          whitespace-nowrap
          text-[12px]
          font-medium
          tracking-[-0.1px]
          text-[#444]
          transition-colors
          duration-300
          group-hover:text-[#111]
        "
      >
        {name}
      </span>
    </div>
  );
}

export default function TemplateCategoriesMarquee() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f7f6f2]
        py-12
      "
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="mb-8 flex flex-col items-center px-6">
        <div className="flex items-center gap-3">
          <span className="h-px w-7 bg-black/10" />

          <span
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#969590]
            "
          >
            Templates for every business
          </span>

          <span className="h-px w-7 bg-black/10" />
        </div>

        <p
          className="
            mt-3
            max-w-[500px]
            text-center
            text-[12px]
            leading-5
            text-[#999]
          "
        >
          Choose from professionally designed invoice templates
          built around the way your business works.
        </p>
      </div>

      {/* =====================================================
          MARQUEE
      ===================================================== */}

      <div className="relative w-full">
        {/* Left Fade */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-full
            w-[100px]
            bg-gradient-to-r
            from-[#f7f6f2]
            via-[#f7f6f2]/90
            to-transparent
          "
        />

        {/* Right Fade */}
        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-20
            h-full
            w-[100px]
            bg-gradient-to-l
            from-[#f7f6f2]
            via-[#f7f6f2]/90
            to-transparent
          "
        />

        {/* =================================================
            ROW 1
            RIGHT → LEFT
        ================================================= */}

        <div className="mb-3 overflow-hidden">
          <motion.div
            className="flex w-max gap-3"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 90,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {rowOne.map((category, index) => (
              <CategoryCard
                key={`row-one-${index}`}
                name={category}
              />
            ))}
          </motion.div>
        </div>

        {/* =================================================
            ROW 2
            LEFT → RIGHT
        ================================================= */}

        <div className="overflow-hidden">
          <motion.div
            className="flex w-max gap-3"
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              duration: 100,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {rowTwo.map((category, index) => (
              <CategoryCard
                key={`row-two-${index}`}
                name={category}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM BADGE
      ===================================================== */}

      <div className="mt-8 flex justify-center">
        <div
          className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-black/[0.07]
            bg-white/70
            px-4
            py-2
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#292825]" />

          <span className="text-[10px] font-medium text-[#777]">
            30 business categories
          </span>
        </div>
      </div>
    </section>
  );
}