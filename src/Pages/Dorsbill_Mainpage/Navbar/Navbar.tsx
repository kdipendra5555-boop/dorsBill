import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Download,
  LogIn,
  Search,
  X,
} from "lucide-react";

import FeaturesDropdown from "../../../Components/Dorsbill_Mainpage/Navbar_DropDown/FeaturesDropdown";
import SolutionsDropdown from "../../../Components/Dorsbill_Mainpage/Navbar_DropDown/SolutionsDropdown";
import TemplatesDropdown from "../../../Components/Dorsbill_Mainpage/Navbar_DropDown/TemplatesDropdown";
import ResourcesDropdown from "../../../Components/Dorsbill_Mainpage/Navbar_DropDown/ResourcesDropdown";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header
      className="
        sticky
        top-0
        z-[100]
        w-full
        border-b
        border-black/10
        bg-[#f7f6f2]
      "
    >
      <nav
        className="
          mx-auto
          flex
          h-[68px]
          max-w-[1400px]
          items-center
          px-6
          lg:px-10
        "
      >

        {/* =====================================================
            LEFT SECTION
        ===================================================== */}

        <div className="flex min-w-0 items-center">

          {/* ================= LOGO ================= */}

          <Link
            to="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label="DorsBill Home"
          >
            {/* DorsBill Icon */}
            <div className="relative h-7 w-7 overflow-hidden rounded-full bg-black">
              <div className="absolute -left-1 h-6 w-6 rounded-full bg-[#f7f6f2]" />

              <div className="absolute left-2 h-5 w-5 rounded-full bg-black" />
            </div>

            {/* Brand */}
            <span
              className="
                text-[22px]
                font-semibold
                tracking-[-0.7px]
                text-[#171717]
              "
            >
              dorsbill
            </span>
          </Link>


          {/* ================= NAVIGATION ================= */}

          <div
            className="
              ml-14
              hidden
              items-center
              gap-8
              md:flex
            "
          >
            <FeaturesDropdown />

            <SolutionsDropdown />

            <TemplatesDropdown />

            <ResourcesDropdown />

            {/* Pricing */}
            <Link
              to="/pricing"
              className="
                whitespace-nowrap
                text-[13px]
                font-medium
                text-[#3f3f3f]
                transition-colors
                hover:text-black
              "
            >
              Pricing
            </Link>
          </div>
        </div>


        {/* =====================================================
            RIGHT SECTION
        ===================================================== */}

        <div className="ml-auto flex shrink-0 items-center gap-3">

          {/* ================= SEARCH ================= */}

          <div
            className={`
              flex
              h-9
              items-center
              overflow-hidden
              rounded-[6px]
              border
              transition-all
              duration-300
              ease-out

              ${
                searchOpen
                  ? "w-[220px] border-black/15 bg-white"
                  : "w-9 border-transparent bg-transparent"
              }
            `}
          >

            {/* Search / Close */}
            <button
              type="button"
              onClick={() => setSearchOpen((prev) => !prev)}
              aria-label={
                searchOpen
                  ? "Close search"
                  : "Open search"
              }
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                text-[#444]
                transition-colors
                hover:text-black
              "
            >
              {searchOpen ? (
                <X
                  size={16}
                  strokeWidth={1.8}
                />
              ) : (
                <Search
                  size={16}
                  strokeWidth={1.8}
                />
              )}
            </button>


            {/* Search Input */}
            <input
              type="text"
              placeholder="Search DorsBill..."
              autoFocus={searchOpen}
              className={`
                h-full
                min-w-0
                flex-1
                bg-transparent
                pr-3
                text-[12px]
                text-[#222]
                outline-none
                placeholder:text-[#999]
                transition-opacity
                duration-200

                ${
                  searchOpen
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                }
              `}
            />
          </div>


          {/* ================= GENERATE WITH AI ================= */}

          <button
            type="button"
            className="
              hidden
              h-9
              items-center
              gap-2
              whitespace-nowrap
              rounded-[6px]
              border
              border-black/10
              bg-white
              px-3.5
              text-[12px]
              font-medium
              text-[#292825]
              shadow-sm
              transition-all
              hover:border-black/20
              hover:bg-[#fafafa]
              md:flex
            "
          >
            Generate with AI
          </button>


          {/* ================= DOWNLOAD ================= */}

          <button
            type="button"
            className="
              flex
              h-9
              items-center
              gap-2
              whitespace-nowrap
              rounded-[5px]
              bg-[#292825]
              px-4
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
            <Download
              size={14}
              strokeWidth={1.8}
            />

            <span>
              Download
            </span>
          </button>


          {/* ================= LOGIN ================= */}

          <button
            type="button"
            className="
              hidden
              h-9
              items-center
              gap-2
              whitespace-nowrap
              rounded-[6px]
              px-3
              text-[12px]
              font-medium
              text-[#333]
              transition-all
              hover:bg-black/[0.05]
              hover:text-black
              sm:flex
            "
          >
            <LogIn
              size={14}
              strokeWidth={1.8}
            />

            <span>
              Login
            </span>
          </button>


          {/* ================= DIVIDER ================= */}

          <div
            className="
              hidden
              h-6
              w-px
              bg-black/10
              lg:block
            "
          />


          {/* ================= DORSPO ================= */}

          <span
            className="
              hidden
              whitespace-nowrap
              text-[12px]
              font-medium
              text-[#444]
              lg:block
            "
          >
            By Dorspo
          </span>

        </div>
      </nav>
    </header>
  );
}