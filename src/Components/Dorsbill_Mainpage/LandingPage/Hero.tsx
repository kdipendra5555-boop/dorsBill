import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import PricePreviewGrid from "./PricePreviewGrid";

export default function Hero() {
  const words = [
    { text: "need", color: "#5B6EE1" },
    { text: "want", color: "#8B5CF6" },
    { text: "use", color: "#0F9D8A" },
    { text: "choose", color: "#E08A3E" },
    { text: "value", color: "#D65A8A" },
  ];

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  const currentWord = words[wordIndex];

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f6f2]">

      {/* HERO */}
      <div className="mx-auto flex min-h-[620px] max-w-[1400px] flex-col items-center justify-center px-6 py-24 text-center lg:px-10">

        {/* Main Heading */}
        <h1
          className="
            flex
            max-w-[1000px]
            items-baseline
            justify-center
            whitespace-nowrap
            text-[48px]
            font-medium
            leading-[1.02]
            tracking-[-2.5px]
            text-[#202020]
            sm:text-[58px]
            lg:text-[72px]
          "
        >
          <span>Every bill. Just what you&nbsp;</span>

          {/* Animated Word */}
          <span className="relative inline-flex min-w-[190px] justify-start overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord.text}
                initial={{
                  opacity: 0,
                  y: 16,
                  filter: "blur(7px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  color: currentWord.color,
                }}
                exit={{
                  opacity: 0,
                  y: -16,
                  filter: "blur(7px)",
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {currentWord.text}.
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        {/* Description */}
        <p className="mt-7 max-w-[570px] text-[14px] leading-[1.7] text-[#777]">
          Your first 100 bills are free every day. After that,
          DorsBill automatically charges a tiny amount per bill
          from your recharge balance.
        </p>

        {/* CTA */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">

          <Link
            to="/recharge"
            className="
              inline-flex
              h-11
              items-center
              gap-2
              rounded-[6px]
              bg-[#292825]
              px-5
              text-[12px]
              font-medium
              text-white
              shadow-sm
              transition-all
              duration-200
              hover:bg-black
              active:scale-[0.98]
            "
          >
            Recharge balance

            <ArrowRight
              size={14}
              strokeWidth={1.7}
            />
          </Link>

          <a
            href="#pricing"
            className="
              inline-flex
              h-11
              items-center
              gap-2
              rounded-[6px]
              border
              border-black/10
              bg-white
              px-5
              text-[12px]
              font-medium
              text-[#333]
              transition-all
              hover:border-black/20
              hover:bg-[#fafafa]
            "
          >
            View pricing

            <ArrowDown
              size={14}
              strokeWidth={1.6}
            />
          </a>

        </div>

        {/* Pricing Preview */}
        <PricePreviewGrid />

      </div>

      {/* Bottom Border */}
      <div className="mx-auto h-px max-w-[1400px] bg-black/[0.08]" />

    </section>
  );
}