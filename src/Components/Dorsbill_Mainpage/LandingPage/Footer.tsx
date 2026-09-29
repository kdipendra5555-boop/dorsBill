import { ArrowUpRight, Check, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.08] bg-[#f7f6f2] text-[#222]">

      {/* =====================================================
          CTA SECTION
      ===================================================== */}

      <section className="mx-auto max-w-[1400px] px-6 pt-24 lg:px-10 lg:pt-32">
        <div className="relative overflow-hidden border border-black/[0.08] bg-[#22221f] px-7 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">

          {/* Background Details */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-[350px] w-[350px] rounded-full bg-white/[0.04] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-20 h-[300px] w-[300px] rounded-full bg-white/[0.03] blur-3xl" />

          <div className="relative z-10 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">

            <div className="max-w-[700px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                Simple billing starts here
              </p>

              <h2 className="mt-6 text-[42px] font-medium leading-[0.98] tracking-[-2px] text-white sm:text-[54px] lg:text-[64px]">
                Billing that gets
                <br />
                <span className="text-white/40">
                  out of your way.
                </span>
              </h2>

              <p className="mt-6 max-w-[520px] text-[13px] leading-[1.8] text-white/50">
                Create beautiful bills, keep your data under your control,
                and spend less time dealing with billing.
              </p>
            </div>

            <a
              href="/pricing"
              className="group flex w-fit shrink-0 items-center gap-3 bg-white px-5 py-3.5 text-[12px] font-medium text-[#222] transition-all duration-300 hover:bg-[#f0f0ed]"
            >
              Get started
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#222] text-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowUpRight size={12} strokeWidth={1.7} />
              </span>
            </a>

          </div>
        </div>
      </section>


      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10">

        <div className="grid gap-16 lg:grid-cols-[1.7fr_1fr_1fr_1fr_1fr]">

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="max-w-[350px]">

            <a
              href="/"
              className="flex w-fit items-center gap-2.5"
              aria-label="DorsBill Home"
            >

              {/* Logo */}
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-[#20201e]">
                <div className="absolute -left-1 h-7 w-7 rounded-full bg-[#f7f6f2]" />
                <div className="absolute left-2.5 h-6 w-6 rounded-full bg-[#20201e]" />
              </div>

              <span className="text-[25px] font-semibold tracking-[-0.9px] text-[#171717]">
                dorsbill
              </span>

            </a>

            <p className="mt-6 text-[13px] leading-[1.85] text-[#777]">
              A simple billing experience built for businesses of every
              size. Create, manage, share and print professional bills
              without unnecessary complexity.
            </p>


            {/* Product Promise */}

            <div className="mt-8 space-y-3">

              <FooterPromise text="No complicated setup" />
              <FooterPromise text="Your data stays under your control" />
              <FooterPromise text="Built for everyday businesses" />

            </div>


            {/* Email */}

            <a
              href="mailto:hello@dorsbill.com"
              className="mt-8 flex w-fit items-center gap-2 text-[11px] text-[#666] transition-colors hover:text-black"
            >
              <Mail size={13} strokeWidth={1.6} />
              hello@dorsbill.com
            </a>

          </div>


          {/* =================================================
              PRODUCT
          ================================================= */}

          <FooterColumn
            title="Product"
            links={[
              ["Features", "/features"],
              ["Templates", "/templates"],
              ["Pricing", "/pricing"],
              ["AI Billing", "/ai"],
              ["What's New", "/updates"],
              ["Changelog", "/changelog"],
              ["Download", "/download"],
            ]}
          />


          {/* =================================================
              SOLUTIONS
          ================================================= */}

          <FooterColumn
            title="For Business"
            links={[
              ["Retail & Shops", "/solutions/retail"],
              ["Wholesale", "/solutions/wholesale"],
              ["Manufacturing", "/solutions/manufacturing"],
              ["Restaurants", "/solutions/restaurants"],
              ["Services", "/solutions/services"],
              ["Freelancers", "/solutions/freelancers"],
              ["Small Business", "/solutions/small-business"],
            ]}
          />


          {/* =================================================
              RESOURCES
          ================================================= */}

          <FooterColumn
            title="Resources"
            links={[
              ["Help Center", "/help"],
              ["Documentation", "/docs"],
              ["Guides", "/guides"],
              ["Invoice Templates", "/templates"],
              ["GST Billing", "/gst"],
              ["Contact Us", "/contact"],
              ["Feedback", "/feedback"],
            ]}
          />


          {/* =================================================
              COMPANY
          ================================================= */}

          <FooterColumn
            title="Company"
            links={[
              ["About DorsBill", "/about"],
              ["Security", "/security"],
              ["Careers", "/careers"],
              ["What's New", "/updates"],
              ["Privacy", "/privacy"],
              ["Terms", "/terms"],
              ["Dorspo", "/dorspo"],
            ]}
          />

        </div>


        {/* =====================================================
            FEATURE STRIP
        ===================================================== */}

        <div className="mt-20 grid border-y border-black/[0.08] sm:grid-cols-3">

          <FooterFeature
            number="01"
            title="Simple by design"
            description="Everything you need to create and manage bills without unnecessary complexity."
          />

          <FooterFeature
            number="02"
            title="Built for business"
            description="From local shops to growing businesses, DorsBill adapts to how you work."
          />

          <FooterFeature
            number="03"
            title="Your data, your rules"
            description="Keep your billing data close and choose where and how you store it."
          />

        </div>


        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          {/* Copyright */}

          <div>
            <p className="text-[11px] text-[#777]">
              © {new Date().getFullYear()} DorsBill. All rights reserved.
            </p>

            <p className="mt-1.5 text-[10px] text-[#aaa]">
              A product by Dorspo.
            </p>
          </div>


          {/* Social */}

          <div className="flex flex-wrap items-center gap-6">

            <a
              href="#"
              className="text-[11px] text-[#777] transition-colors hover:text-black"
            >
              X
            </a>

            <a
              href="#"
              className="text-[11px] text-[#777] transition-colors hover:text-black"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="text-[11px] text-[#777] transition-colors hover:text-black"
            >
              Instagram
            </a>

            <a
              href="#"
              className="text-[11px] text-[#777] transition-colors hover:text-black"
            >
              GitHub
            </a>

          </div>


          {/* Tagline */}

          <div className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#aaa]">
            Your data. Your rules.
          </div>

        </div>

      </div>

    </footer>
  );
}


/* =========================================================
   FOOTER COLUMN
========================================================= */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>

      <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#555]">
        {title}
      </h3>

      <div className="mt-7 space-y-4">

        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            className="group flex w-fit items-center gap-1.5 text-[12px] text-[#777] transition-all duration-200 hover:translate-x-0.5 hover:text-[#222]"
          >
            <span>{label}</span>

            <ArrowUpRight
              size={10}
              strokeWidth={1.5}
              className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
            />
          </a>
        ))}

      </div>

    </div>
  );
}


/* =========================================================
   PROMISE
========================================================= */

function FooterPromise({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-2.5">

      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ebeae5]">
        <Check
          size={10}
          strokeWidth={2}
          className="text-[#555]"
        />
      </span>

      <span className="text-[11px] text-[#777]">
        {text}
      </span>

    </div>
  );
}


/* =========================================================
   FEATURE
========================================================= */

function FooterFeature({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="px-0 py-8 sm:px-8 lg:first:pl-0 lg:last:pr-0">

      <p className="text-[9px] font-medium tracking-[0.14em] text-[#aaa]">
        {number}
      </p>

      <h3 className="mt-4 text-[13px] font-medium text-[#333]">
        {title}
      </h3>

      <p className="mt-2 max-w-[280px] text-[11px] leading-[1.7] text-[#888]">
        {description}
      </p>

    </div>
  );
}