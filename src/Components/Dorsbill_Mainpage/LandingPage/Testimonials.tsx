import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
    {
        quote: "DorsBill makes billing feel like a simple part of running my shop instead of another thing I have to manage.",
        name: "Rajesh Kumar",
        role: "Retail Store Owner",
        business: "Retail",
        initials: "RK",
    },
    {
        quote: "I can create a professional invoice, save it and share it with a customer in just a few seconds.",
        name: "Ankit Verma",
        role: "Freelance Consultant",
        business: "Professional Services",
        initials: "AV",
    },
    {
        quote: "The local-first approach is exactly what I wanted. My billing data stays with me and I don't need a complicated setup.",
        name: "Shailendra Singh",
        role: "Printing Business Owner",
        business: "Printing",
        initials: "SS",
    },
    {
        quote: "We wanted something simple for everyday billing. DorsBill gives us the tools we actually need without unnecessary complexity.",
        name: "Neha Gupta",
        role: "Business Owner",
        business: "Wholesale",
        initials: "NG",
    },
    {
        quote: "Creating different invoices for different customers is much easier now. The templates save a lot of repetitive work.",
        name: "Aman Mishra",
        role: "Service Provider",
        business: "Services",
        initials: "AM",
    },
];

const headings = [
    "What businesses say about DorsBill.",
    "Why businesses love DorsBill.",
    "Why businesses choose DorsBill.",
    "Built for the way businesses bill.",
    "Simple billing. Happier businesses.",
];

export default function Testimonials() {
    const [active, setActive] = useState(2);
    const [activeHeading, setActiveHeading] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    /* =====================================================
       AUTO CHANGE TESTIMONIAL
    ===================================================== */

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActive((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused]);

    /* =====================================================
       AUTO CHANGE HEADING
    ===================================================== */

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveHeading((prev) =>
                prev === headings.length - 1 ? 0 : prev + 1
            );
        }, 3200);

        return () => clearInterval(interval);
    }, []);

    /* =====================================================
       NAVIGATION
    ===================================================== */

    const previous = () => {
        setActive((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const next = () => {
        setActive((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <section className="relative overflow-hidden bg-[#f7f6f2] py-32">

            <div className="mx-auto max-w-[1250px] px-6 lg:px-10">

                {/* =====================================================
                    HEADER
                ===================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-center"
                >

                    {/* =================================================
                        ANIMATED SINGLE LINE HEADING
                    ================================================= */}

                    <div className="flex min-h-[70px] items-center justify-center overflow-hidden sm:min-h-[80px] lg:min-h-[90px]">

                        <AnimatePresence mode="wait">

                            <motion.h2
                                key={activeHeading}
                                initial={{
                                    opacity: 0,
                                    y: 28,
                                    filter: "blur(7px)",
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    filter: "blur(0px)",
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -28,
                                    filter: "blur(7px)",
                                }}
                                transition={{
                                    duration: 0.65,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="whitespace-nowrap text-[38px] font-medium leading-none tracking-[-1.8px] text-[#20201e] sm:text-[52px] sm:tracking-[-2.2px] lg:text-[66px] lg:tracking-[-2.8px]"
                            >
                                {headings[activeHeading]}
                            </motion.h2>

                        </AnimatePresence>

                    </div>


                    {/* =================================================
                        DESCRIPTION
                    ================================================= */}

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 0.15,
                        }}
                        className="mx-auto mt-6 max-w-[540px] text-[13px] leading-[1.8] text-[#777]"
                    >
                        Real businesses. Real workflows. A simpler way to
                        create, manage, and share invoices.
                    </motion.p>

                </motion.div>


                {/* =====================================================
                    TESTIMONIAL AREA
                ===================================================== */}

                <div
                    className="relative mx-auto mt-20 max-w-[1050px]"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >

                    {/* =================================================
                        LEFT PREVIEW
                    ================================================= */}

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="pointer-events-none absolute left-0 top-1/2 hidden w-[230px] -translate-x-[65%] -translate-y-1/2 opacity-35 lg:block"
                    >

                        <SideCard
                            testimonial={
                                testimonials[
                                    active === 0
                                        ? testimonials.length - 1
                                        : active - 1
                                ]
                            }
                        />

                    </motion.div>


                    {/* =================================================
                        RIGHT PREVIEW
                    ================================================= */}

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="pointer-events-none absolute right-0 top-1/2 hidden w-[230px] translate-x-[65%] -translate-y-1/2 opacity-35 lg:block"
                    >

                        <SideCard
                            testimonial={
                                testimonials[
                                    active === testimonials.length - 1
                                        ? 0
                                        : active + 1
                                ]
                            }
                        />

                    </motion.div>


                    {/* =================================================
                        CENTER CARD
                    ================================================= */}

                    <AnimatePresence mode="wait">

                        <motion.div
                            key={active}
                            initial={{
                                opacity: 0,
                                y: 25,
                                scale: 0.96,
                                filter: "blur(5px)",
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                filter: "blur(0px)",
                            }}
                            exit={{
                                opacity: 0,
                                y: -20,
                                scale: 0.97,
                                filter: "blur(5px)",
                            }}
                            transition={{
                                duration: 0.65,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative mx-auto max-w-[760px]"
                        >

                            <div className="group relative min-h-[400px] overflow-hidden rounded-2xl border border-black/[0.08] bg-white px-8 py-10 shadow-[0_30px_90px_rgba(0,0,0,0.07)] sm:px-14 sm:py-14">

                                {/* =================================================
                                    BACKGROUND GLOW
                                ================================================= */}

                                <motion.div
                                    initial={{
                                        scale: 0.8,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        scale: 1,
                                        opacity: 0.7,
                                    }}
                                    transition={{
                                        duration: 1,
                                    }}
                                    className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#eeeeea] blur-3xl"
                                />


                                {/* =================================================
                                    TOP LINE
                                ================================================= */}

                                <motion.div
                                    initial={{
                                        width: "0%",
                                    }}
                                    animate={{
                                        width: "100%",
                                    }}
                                    transition={{
                                        duration: 0.8,
                                    }}
                                    className="absolute left-0 top-0 h-[2px] bg-[#222]"
                                />


                                {/* =================================================
                                    QUOTE ICON
                                ================================================= */}

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scale: 0.7,
                                        rotate: -10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        rotate: 0,
                                    }}
                                    transition={{
                                        delay: 0.15,
                                        duration: 0.5,
                                        type: "spring",
                                    }}
                                    className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-black/[0.07] bg-[#f7f6f2] text-[#444]"
                                >

                                    <Quote
                                        size={20}
                                        strokeWidth={1.5}
                                    />

                                </motion.div>


                                {/* =================================================
                                    QUOTE
                                ================================================= */}

                                <motion.p
                                    initial={{
                                        opacity: 0,
                                        y: 15,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: 0.22,
                                        duration: 0.55,
                                    }}
                                    className="relative z-10 mx-auto mt-10 max-w-[620px] text-center text-[21px] font-medium leading-[1.55] tracking-[-0.45px] text-[#292929] sm:text-[25px]"
                                >
                                    “{testimonials[active].quote}”
                                </motion.p>


                                {/* =================================================
                                    USER
                                ================================================= */}

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 15,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: 0.32,
                                        duration: 0.55,
                                    }}
                                    className="relative z-10 mt-10 flex flex-col items-center"
                                >

                                    <motion.div
                                        whileHover={{
                                            scale: 1.08,
                                            rotate: -4,
                                        }}
                                        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#252522] text-[11px] font-medium text-white"
                                    >
                                        {testimonials[active].initials}
                                    </motion.div>

                                    <p className="mt-3 text-[12px] font-semibold text-[#333]">
                                        {testimonials[active].name}
                                    </p>

                                    <p className="mt-1 text-[10px] text-[#999]">
                                        {testimonials[active].role}
                                    </p>

                                    <span className="mt-3 rounded-full border border-black/[0.07] bg-[#f7f6f2] px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.1em] text-[#888]">
                                        {testimonials[active].business}
                                    </span>

                                </motion.div>


                                {/* =================================================
                                    COUNTER
                                ================================================= */}

                                <span className="absolute right-7 top-7 text-[9px] font-medium tracking-[0.1em] text-[#c7c7c1]">
                                    {String(active + 1).padStart(2, "0")} /{" "}
                                    {String(testimonials.length).padStart(2, "0")}
                                </span>

                            </div>

                        </motion.div>

                    </AnimatePresence>


                    {/* =================================================
                        CONTROLS
                    ================================================= */}

                    <div className="mt-8 flex items-center justify-center gap-3">

                        <motion.button
                            type="button"
                            onClick={previous}
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ x: -2 }}
                            aria-label="Previous testimonial"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.09] bg-white text-[#444] transition-all duration-300 hover:border-black/20 hover:bg-[#242421] hover:text-white"
                        >

                            <ArrowLeft
                                size={14}
                                strokeWidth={1.6}
                            />

                        </motion.button>


                        {/* =================================================
                            DOTS
                        ================================================= */}

                        <div className="flex items-center gap-1.5 px-3">

                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setActive(index)}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                    className="relative h-1.5 overflow-hidden rounded-full bg-black/10"
                                >

                                    <motion.span
                                        initial={false}
                                        animate={{
                                            width:
                                                active === index
                                                    ? 24
                                                    : 6,
                                        }}
                                        transition={{
                                            duration: 0.3,
                                        }}
                                        className={`block h-full rounded-full ${
                                            active === index
                                                ? "bg-[#242421]"
                                                : "bg-transparent"
                                        }`}
                                    />

                                </button>
                            ))}

                        </div>


                        {/* =================================================
                            NEXT
                        ================================================= */}

                        <motion.button
                            type="button"
                            onClick={next}
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ x: 2 }}
                            aria-label="Next testimonial"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.09] bg-white text-[#444] transition-all duration-300 hover:border-black/20 hover:bg-[#242421] hover:text-white"
                        >

                            <ArrowRight
                                size={14}
                                strokeWidth={1.6}
                            />

                        </motion.button>

                    </div>


                    {/* =================================================
                        AUTO PLAY INDICATOR
                    ================================================= */}

                    <div className="mx-auto mt-5 flex w-[150px] items-center gap-2">

                        <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-black/[0.06]">

                            {!isPaused && (
                                <motion.div
                                    key={active}
                                    initial={{
                                        width: "0%",
                                    }}
                                    animate={{
                                        width: "100%",
                                    }}
                                    transition={{
                                        duration: 5,
                                        ease: "linear",
                                    }}
                                    className="h-full bg-[#555]"
                                />
                            )}

                        </div>

                        <span className="text-[8px] uppercase tracking-[0.1em] text-[#aaa]">
                            {isPaused ? "" : ""}
                        </span>

                    </div>

                </div>


                

            </div>

        </section>
    );
}


/* =========================================================
   SIDE CARD
========================================================= */

function SideCard({
    testimonial,
}: {
    testimonial: {
        quote: string;
        name: string;
        role: string;
        business: string;
        initials: string;
    };
}) {
    return (
        <motion.div
            key={testimonial.name}
            initial={{
                opacity: 0,
                scale: 0.9,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 0.5,
            }}
            className="relative min-h-[300px] overflow-hidden rounded-xl border border-black/[0.07] bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
        >

            <Quote
                size={18}
                strokeWidth={1.5}
                className="text-[#aaa]"
            />

            <p className="mt-7 text-[13px] leading-[1.65] text-[#555]">
                “{testimonial.quote}”
            </p>

            <div className="absolute bottom-6 left-7 flex items-center gap-2.5">

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#252522] text-[8px] text-white">
                    {testimonial.initials}
                </div>

                <div>

                    <p className="text-[9px] font-semibold text-[#444]">
                        {testimonial.name}
                    </p>

                    <p className="mt-0.5 text-[8px] text-[#aaa]">
                        {testimonial.business}
                    </p>

                </div>

            </div>

        </motion.div>
    );
}