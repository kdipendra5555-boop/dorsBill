import { Download } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full border-b border-black/10 bg-[#f7f6f2]">
      <nav className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-6 lg:px-10">

        {/* ================= LOGO ================= */}
        <a href="/" className="flex items-center gap-2.5">
          {/* DorsBill Icon */}
          <div className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-black">
            <div className="absolute -left-1 h-6 w-6 rounded-full bg-[#f7f6f2]" />
            <div className="absolute left-[8px] h-5 w-5 rounded-full bg-black" />
          </div>

          {/* Brand */}
          <span className="text-[22px] font-semibold tracking-[-0.7px] text-[#171717]">
            dorsbill
          </span>
        </a>

        {/* ================= CENTER NAV ================= */}
        <div className="hidden items-center gap-10 md:flex">
          <a
            href="#features"
            className="text-[13px] font-medium text-[#3f3f3f] transition-colors hover:text-black"
          >
            Features
          </a>

          <a
            href="#templates"
            className="text-[13px] font-medium text-[#3f3f3f] transition-colors hover:text-black"
          >
            Templates
          </a>

          <a
            href="#how-it-works"
            className="text-[13px] font-medium text-[#3f3f3f] transition-colors hover:text-black"
          >
            How it Works
          </a>

          <a
            href="#faq"
            className="text-[13px] font-medium text-[#3f3f3f] transition-colors hover:text-black"
          >
            FAQ
          </a>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="flex items-center gap-4">

          {/* Download */}
          <button
            className="
              flex h-9 items-center gap-2
              rounded-[5px]
              bg-[#292825]
              px-4
              text-[12px]
              font-medium
              text-white
              shadow-sm
              transition-all
              hover:bg-black
              active:scale-[0.98]
            "
          >
            <Download size={14} strokeWidth={1.8} />
            <span>Download</span>
          </button>

          {/* Divider */}
          <div className="hidden h-6 w-px bg-black/10 sm:block" />

          {/* By Dorspo */}
          <span className="hidden text-[12px] font-medium text-[#444] sm:block">
            By Dorspo
          </span>
        </div>
      </nav>
    </header>
  );
}