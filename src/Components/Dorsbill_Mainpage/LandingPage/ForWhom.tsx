import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Laptop,
  Package,
  Store,
  Truck,
  Utensils,
  Wrench,
} from "lucide-react";
import { useRef, useState } from "react";

const businesses = [
  {
    title: "Retail & Shops",
    description:
      "Create fast, professional bills for everyday customers.",
    icon: <Store size={18} strokeWidth={1.5} />,
  },
  {
    title: "Professional Services",
    description:
      "Invoice clients for consulting, freelancing, agencies and professional work.",
    icon: <BriefcaseBusiness size={18} strokeWidth={1.5} />,
  },
  {
    title: "Wholesale",
    description:
      "Handle bulk orders, quantities, repeat customers and large invoices.",
    icon: <Package size={18} strokeWidth={1.5} />,
  },
  {
    title: "Manufacturing",
    description:
      "Create structured invoices for products, materials and business operations.",
    icon: <Factory size={18} strokeWidth={1.5} />,
  },
  {
    title: "Food & Restaurants",
    description:
      "Simple billing for restaurants, cafés, food outlets and catering businesses.",
    icon: <Utensils size={18} strokeWidth={1.5} />,
  },
  {
    title: "Repair & Services",
    description:
      "Bill customers for repairs, parts, maintenance and service work.",
    icon: <Wrench size={18} strokeWidth={1.5} />,
  },
  {
    title: "Freelancers",
    description:
      "Send clean invoices to clients without complicated accounting software.",
    icon: <Laptop size={18} strokeWidth={1.5} />,
  },
  {
    title: "Logistics & Transport",
    description:
      "Create invoices for deliveries, transportation and operational services.",
    icon: <Truck size={18} strokeWidth={1.5} />,
  },
  {
    title: "Healthcare",
    description:
      "Keep billing simple for clinics, practices and professional healthcare services.",
    icon: <HeartPulse size={18} strokeWidth={1.5} />,
  },
  {
    title: "Education",
    description:
      "Create receipts and invoices for institutions, classes and educational services.",
    icon: <GraduationCap size={18} strokeWidth={1.5} />,
  },
  {
    title: "Growing Businesses",
    description:
      "A flexible billing experience that grows alongside your business.",
    icon: <Building2 size={18} strokeWidth={1.5} />,
  },
  {
    title: "And Everything Else",
    description:
      "If your business needs professional billing, DorsBill is built to help.",
    icon: <BriefcaseBusiness size={18} strokeWidth={1.5} />,
  },
];

const hiddenCards = [
  [0, 1, 4, 5],
  [2, 3, 6, 7],
  [8, 9, 10, 11],
  [6, 7, 10, 11],
];

const images = [
  "/images/business-retail.png",
  "/images/business-wholesale.jpg",
  "/images/business-services.jpg",
  "/images/business-growth.jpg",
];

export default function ForWhom() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = Math.min(3, Math.floor(latest * 4));
    setActive(next);
  });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f7f6f2] py-32"
    >
      <div className="mx-auto max-w-[1350px] px-6 lg:px-10">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-[800px]"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#888]">
            Built for business
          </p>

          <h2 className="mt-6 text-[48px] font-medium leading-[1.08] tracking-[-2.5px] text-[#20201e] sm:text-[64px] lg:text-[76px]">
            One billing system.
            <br />
            <span className="text-[#999]">
              Every kind of business.
            </span>
          </h2>

          <p className="mt-7 max-w-[590px] text-[13px] leading-[1.8] text-[#777] sm:text-[14px]">
            Whether you run a small shop, a growing company, a professional
            service, or a large operation — DorsBill gives you a simple way
            to create, manage, share and print your bills.
          </p>
        </motion.div>

        {/* ================= STICKY EXPERIENCE ================= */}

        <div className="relative mt-20 h-[300vh]">
          <div className="sticky top-24 flex h-[calc(100vh-120px)] min-h-[650px] items-center">

            <div className="relative grid h-[620px] w-full grid-cols-4 grid-rows-3 overflow-hidden">

              {/* ================= BUSINESS CARDS ================= */}

              {businesses.map((business, index) => {
                const isHidden = hiddenCards[active].includes(index);

                return (
                  <motion.div
                    key={business.title}
                    animate={{
                      opacity: isHidden ? 0 : 1,
                      scale: isHidden ? 0.97 : 1,
                      filter: isHidden
                        ? "blur(3px)"
                        : "blur(0px)",
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative z-10 flex min-h-0 flex-col justify-between p-6 sm:p-7"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/[0.07] bg-[#f7f6f2] text-[#555] shadow-[0_5px_18px_rgba(0,0,0,0.03)]">
                      {business.icon}
                    </div>

                    <div className="mt-auto">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-[13px] font-medium tracking-[-0.2px] text-[#292929] sm:text-[14px]">
                          {business.title}
                        </h3>

                        <span className="text-[8px] font-medium tracking-[0.08em] text-[#c0c0ba]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <p className="mt-2 max-w-[220px] text-[10px] leading-[1.65] text-[#888] sm:text-[11px]">
                        {business.description}
                      </p>

                      <div className="mt-4 text-[8px] font-medium uppercase tracking-[0.14em] text-[#aaa]">
                        Built for you
                      </div>
                    </div>

                    <div className="absolute bottom-5 right-5 flex h-7 w-7 items-center justify-center rounded-full bg-[#242421] text-white opacity-0 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100">
                      <ArrowUpRight
                        size={12}
                        strokeWidth={1.7}
                      />
                    </div>
                  </motion.div>
                );
              })}

              {/* ================= LARGE IMAGE ================= */}

              <motion.div
                className="absolute z-30 overflow-hidden border border-white/20 bg-[#dededb] shadow-[0_20px_60px_rgba(0,0,0,0.10)]"
                animate={{
                  left:
                    active === 0 || active === 2
                      ? "0%"
                      : "50%",
                  top:
                    active === 0 || active === 1
                      ? "0%"
                      : "33.333%",
                  width: "50%",
                  height: "66.666%",
                }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* IMAGE */}

                <motion.img
                  key={images[active]}
                  src={images[active]}
                  alt="DorsBill business"
                  initial={{
                    opacity: 0,
                    scale: 1.06,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-full w-full object-cover"
                />

                {/* IMAGE OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                {/* IMAGE LABEL */}

                <motion.div
                  key={`label-${active}`}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.25,
                    duration: 0.45,
                  }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-white/70">
                    DorsBill
                  </p>

                  <p className="mt-1 text-[18px] font-medium tracking-[-0.5px] text-white">
                    Billing built for your business.
                  </p>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
          className="mt-4 flex flex-col justify-between gap-8 border-t border-black/[0.08] pt-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#999]">
              Made for everyone
            </p>

            <p className="mt-2 text-[13px] text-[#555]">
              One simple billing experience, regardless of what you sell.
            </p>
          </div>

          <button
            type="button"
            className="group flex w-fit items-center gap-3 rounded-[6px] bg-[#242421] px-5 py-3 text-[11px] font-medium text-white transition-all duration-300 hover:bg-black"
          >
            Start billing

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowUpRight
                size={12}
                strokeWidth={1.7}
              />
            </span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}