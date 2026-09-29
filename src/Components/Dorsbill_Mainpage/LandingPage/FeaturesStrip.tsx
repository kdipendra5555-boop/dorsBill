import {
  Cloud,
  FileText,
  Folder,
  Zap,
} from "lucide-react";

export default function FeaturesStrip() {
  return (
    <section className="w-full border-y border-black/[0.08] bg-[#f7f6f2]">

      <div className="mx-auto flex min-h-[150px] max-w-[1400px] items-stretch px-6 lg:px-10">

        {/* =================================================
            FEATURE 1
        ================================================= */}

        <FeatureItem
          icon={<Folder size={32} strokeWidth={1.5} />}
          title="Save Anywhere"
          description="Keep your data on your local disk."
        />


        {/* =================================================
            FEATURE 2
        ================================================= */}

        <FeatureItem
          icon={<Cloud size={32} strokeWidth={1.5} />}
          title="Optional Google Drive Backup"
          description="Backup anytime, only if you want."
        />


        {/* =================================================
            FEATURE 3
        ================================================= */}

        <FeatureItem
          icon={<FileText size={32} strokeWidth={1.5} />}
          title="Beautiful Templates"
          description="Professional & customizable."
        />


        {/* =================================================
            FEATURE 4
        ================================================= */}

        <FeatureItem
          icon={<Zap size={32} strokeWidth={1.5} />}
          title="Lightweight & Fast"
          description="Built for everyday use."
        />


        {/* =================================================
            BRAND MESSAGE
        ================================================= */}

        <div className="hidden flex-1 items-center justify-center px-10 lg:flex">

          <p
            className="
              text-[11px]
              font-medium
              uppercase
              leading-[1.7]
              tracking-[0.2em]
              text-[#888]
            "
          >
            Your data.
            <br />
            Your rules.
          </p>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   FEATURE ITEM
========================================================= */

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        flex
        min-h-[150px]
        flex-1
        items-center
        gap-6
        border-r
        border-black/[0.07]
        px-7
        py-8
        first:border-l
        sm:px-8
        lg:px-10
      "
    >

      {/* =================================================
          ICON
      ================================================= */}

      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-white
          text-[#222]
          shadow-[0_2px_10px_rgba(0,0,0,0.03)]
        "
      >
        {icon}
      </div>


      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="min-w-0">

        <p
          className="
            text-[14px]
            font-semibold
            tracking-[-0.2px]
            text-[#292929]
          "
        >
          {title}
        </p>

        <p
          className="
            mt-2
            max-w-[210px]
            text-[11px]
            leading-[1.6]
            text-[#777]
          "
        >
          {description}
        </p>

      </div>

    </div>
  );
}