import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function AIHelpSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f6f2]">

      <div className="mx-auto grid min-h-[780px] max-w-[1500px] lg:grid-cols-[0.92fr_1.08fr]">

        {/* =====================================================
            LEFT
        ===================================================== */}

        <div className="relative z-10 flex items-center px-7 py-24 sm:px-12 lg:px-16 xl:px-24">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[570px]"
          >

            {/* EYEBROW */}

            <div className="mb-8 flex items-center gap-2.5">

              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#222]">
                <Sparkles
                  size={12}
                  strokeWidth={1.6}
                  className="text-white"
                />
              </div>

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#777]">
                AI powered invoicing
              </span>

            </div>


            {/* HEADING */}

            <h2
              className="
                text-[50px]
                font-medium
                leading-[0.94]
                tracking-[-3px]
                text-[#20201e]
                sm:text-[64px]
                lg:text-[68px]
                xl:text-[78px]
              "
            >

              <span className="block">
                Tell it
              </span>

              <span className="block">
                what you
              </span>

              <span className="block text-[#999]">
                need.
              </span>

            </h2>


            {/* DESCRIPTION */}

            <p
              className="
                mt-8
                max-w-[455px]
                text-[13px]
                leading-[1.8]
                text-[#777]
                sm:text-[14px]
              "
            >
              DorsBill AI turns simple instructions into ready-to-use
              invoice templates. Describe your business, choose what
              you need, and let AI handle the structure.
            </p>


            {/* PROMPT */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.35,
                duration: 0.6,
              }}
              className="
                mt-9
                max-w-[455px]
                border-l
                border-black/15
                pl-5
              "
            >

              <p className="text-[10px] uppercase tracking-[0.14em] text-[#aaa]">
                Try something like
              </p>

              <p className="mt-2 text-[12px] leading-[1.6] text-[#555]">
                “Create a professional GST invoice for my
                printing business with UPI QR.”
              </p>

            </motion.div>


            {/* BUTTON */}

            <motion.button
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.45,
                duration: 0.6,
              }}
              type="button"
              className="
                group
                mt-9
                flex
                items-center
                gap-3
                rounded-[6px]
                bg-[#242421]
                px-5
                py-3.5
                text-[11px]
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-black
              "
            >

              Create with AI

              <span
                className="
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                "
              >
                <ArrowUpRight
                  size={12}
                  strokeWidth={1.7}
                />
              </span>

            </motion.button>


            {/* BOTTOM FEATURES */}

            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3">

              <Feature text="Natural language" />
              <Feature text="Instant templates" />
              <Feature text="Fully editable" />

            </div>

          </motion.div>

        </div>


        {/* =====================================================
            RIGHT VISUAL
        ===================================================== */}

        <div
          className="
            relative
            min-h-[580px]
            overflow-hidden
            bg-[#e9e9e4]
            lg:min-h-[780px]
          "
        >

          {/* subtle grid */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.35]
              [background-image:linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)]
              [background-size:48px_48px]
            "
          />


          {/* soft light */}

          <div
            className="
              absolute
              left-[25%]
              top-[20%]
              h-[500px]
              w-[500px]
              rounded-full
              bg-white
              opacity-70
              blur-[120px]
            "
          />


          {/* =================================================
              ANIMATION
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 90,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              left-[4%]
              top-1/2
              w-[108%]
              -translate-y-1/2
              lg:left-[-2%]
            "
          >

            <img
              src="/images/dorsbill-ai.gif"
              alt="DorsBill AI invoice generation"
              className="
                block
                h-auto
                w-full
                object-contain
              "
            />

          </motion.div>


          {/* =================================================
              FLOATING PROMPT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.65,
              duration: 0.6,
            }}
            className="
              absolute
              bottom-8
              left-7
              max-w-[270px]
              rounded-xl
              border
              border-black/[0.07]
              bg-white/90
              px-4
              py-3.5
              shadow-[0_15px_50px_rgba(0,0,0,0.08)]
              backdrop-blur-xl
              sm:left-10
            "
          >

            <div className="flex items-center gap-2">

              <Sparkles
                size={12}
                className="text-[#555]"
              />

              <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#999]">
                DorsBill AI
              </span>

            </div>

            <p className="mt-2 text-[10px] leading-[1.55] text-[#555]">
              Building your invoice template...
            </p>

            <div className="mt-3 h-[2px] overflow-hidden rounded-full bg-black/[0.06]">

              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "78%" }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.9,
                  duration: 1.3,
                  ease: "easeOut",
                }}
                className="h-full rounded-full bg-[#333]"
              />

            </div>

          </motion.div>


          {/* =================================================
              TOP RIGHT LABEL
          ================================================= */}

          <div
            className="
              absolute
              right-7
              top-7
              hidden
              items-center
              gap-2
              sm:flex
            "
          >

            <span className="h-1.5 w-1.5 rounded-full bg-[#333]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#777]">
              Intelligent billing
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   FEATURE
========================================================= */

function Feature({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-2">

      <span className="h-1.5 w-1.5 rounded-full bg-[#333]" />

      <span className="text-[10px] text-[#777]">
        {text}
      </span>

    </div>
  );
}