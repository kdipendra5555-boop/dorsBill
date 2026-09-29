import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

type Partner = {
  name: string;
  logo?: string;
  image: string;
  description: string;
};

const partners: Partner[] = [
  {
    name: "Company One",
    logo: "/images/Partners/dotprint.png",
    image: "/images/Partners/dotcompany.png",
    description:
      "Simple billing and invoicing for everyday business operations.",
  },
  {
    name: "Company Two",
    logo: "/images/Partners/dotprint.png",
    image: "/images/Partners/company-2.jpg",
    description:
      "Clean invoices and faster workflows for growing teams.",
  },
  {
    name: "Company Three",
    logo: "/images/Partners/dotprint.png",
    image: "/images/Partners/company-3.jpg",
    description:
      "Professional billing designed for modern businesses.",
  },
  {
    name: "Company Four",
    logo: "/images/Partners/dotprint.png",
    image: "/images/Partners/company-4.jpg",
    description:
      "Flexible invoicing for products, services and customers.",
  },
  {
    name: "Company Five",
    logo: "/images/Partners/dotprint.png",
    image: "/images/Partners/company-5.jpg",
    description:
      "A simpler way to create and manage business bills.",
  },
  {
    name: "Company Six",
    logo: "/images/Partners/dotprint.png",
    image: "/images/Partners/company-6.jpg",
    description:
      "Streamlined billing built around everyday business needs.",
  },
  {
    name: "Company Seven",
    logo: "/images/Partners/dotprint.png",
    image: "/images/Partners/company-7.jpg",
    description:
      "Professional invoices without unnecessary complexity.",
  },
  {
    name: "Company Eight",
    logo: "/images/Partners/dotprint.png",
    image: "/images/Partners/company-8.jpg",
    description:
      "Helping teams spend less time managing invoices.",
  },
  {
    name: "Company Nine",
    logo: "/images/Partners/dotprint.png",
    image: "/images/Partners/company-9.jpg",
    description:
      "Billing that adapts to the way modern businesses work.",
  },
];

export default function CompanyPartners() {
  const [activePartner, setActivePartner] = useState(0);

  const active = partners[activePartner];

  return (
    <section className="w-full bg-[#f7f6f2] py-24">
      <div className="mx-auto max-w-[1250px] px-6 lg:px-10">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#999]">
            Trusted by businesses
          </p>

          <h2 className="mt-5 max-w-[800px] text-[42px] font-medium leading-[1.02] tracking-[-2px] text-[#20201e] sm:text-[56px] lg:text-[66px]">
            Businesses building
            <br />
            <span className="text-[#999]">with DorsBill.</span>
          </h2>

          <p className="mt-5 max-w-[540px] text-[13px] leading-[1.8] text-[#777]">
            Businesses across different industries use DorsBill to simplify
            everyday billing and invoicing.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN PARTNER CONTAINER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid min-h-[330px] overflow-hidden border border-black/[0.08] bg-white lg:grid-cols-[1fr_380px]"
        >

          {/* ===================================================
              COMPANY GRID
          =================================================== */}

          <div className="grid grid-cols-2 sm:grid-cols-3">

            {partners.map((partner, index) => {
              const isActive = activePartner === index;

              return (
                <motion.button
                  key={partner.name}
                  type="button"
                  onMouseEnter={() => setActivePartner(index)}
                  onFocus={() => setActivePartner(index)}
                  whileHover={{
                    backgroundColor: "#fafaf8",
                  }}
                  className={`group relative flex min-h-[110px] items-center justify-center border-b border-r border-black/[0.07] bg-white px-4 transition-colors duration-300 ${
                    isActive ? "bg-[#fafaf8]" : "bg-white"
                  }`}
                >

                  {/* =================================================
                      ACTIVE TOP LINE
                  ================================================= */}

                  <motion.div
                    initial={false}
                    animate={{
                      width: isActive ? "100%" : "0%",
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    className="absolute left-0 top-0 h-[2px] bg-[#252522]"
                  />

                  {/* =================================================
                      COMPANY LOGO
                  ================================================= */}

                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-[100px] w-full max-w-[280px] object-contain opacity-50 grayscale transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                      onError={(e) => {
                        console.error(
                          "Logo not found:",
                          partner.logo
                        );

                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    <span className="text-[18px] font-semibold tracking-[-0.5px] text-[#aaa] transition-colors duration-300 group-hover:text-[#222]">
                      {partner.name}
                    </span>
                  )}

                </motion.button>
              );
            })}

          </div>

          {/* ===================================================
              ACTIVE COMPANY IMAGE
          =================================================== */}

          <div className="relative min-h-[330px] overflow-hidden bg-[#20201e]">

            <AnimatePresence mode="wait">

              <motion.img
                key={active.image}
                src={active.image}
                alt={active.name}
                initial={{
                  opacity: 0,
                  scale: 1.06,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />

            </AnimatePresence>

            {/* =================================================
                IMAGE OVERLAY
            ================================================= */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

            {/* =================================================
                ACTIVE COMPANY CONTENT
            ================================================= */}

            <AnimatePresence mode="wait">

              <motion.div
                key={active.name}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.08,
                }}
                className="absolute inset-x-0 bottom-0 p-7 text-white"
              >

                <div className="flex items-end justify-between gap-5">

                  <div>

                    <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/55">
                      DorsBill Partner
                    </p>

                    <h3 className="mt-2 text-[24px] font-medium tracking-[-0.7px]">
                      {active.name}
                    </h3>

                    <p className="mt-3 max-w-[260px] text-[10px] leading-[1.7] text-white/60">
                      {active.description}
                    </p>

                  </div>

                  <motion.div
                    whileHover={{
                      x: 3,
                      y: -3,
                    }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md"
                  >
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                    />
                  </motion.div>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

        </motion.div>

        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mt-6 flex flex-col gap-3 border-t border-black/[0.08] pt-5 sm:flex-row sm:items-center sm:justify-between"
        >

          <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#aaa]">
            Growing with DorsBill
          </p>

          <p className="text-[11px] text-[#888]">
            More businesses joining every day.
          </p>

        </motion.div>

      </div>
    </section>
  );
}