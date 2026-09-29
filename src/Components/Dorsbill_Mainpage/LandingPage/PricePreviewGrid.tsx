import { Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

export default function PricePreviewGrid() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="mt-20 w-full max-w-[1050px]">

      {/* =====================================================
          VIDEO CONTAINER
      ===================================================== */}

      <div
        className="
          group
          relative
          h-[600px]
          w-full
          overflow-hidden
          rounded-2xl
          border
          border-black/[0.08]
          bg-[#111]
          shadow-[0_25px_70px_rgba(0,0,0,0.08)]
        "
      >

        {/* =================================================
            LOCAL VIDEO
        ================================================= */}

        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/videos/dorsbill-pricing.mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>


        {/* =================================================
            SUBTLE OVERLAY
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-black/[0.05]
          "
        />


        {/* =================================================
            MUTE / UNMUTE
        ================================================= */}

        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="
            absolute
            bottom-5
            right-5
            z-10
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-black/40
            text-white
            shadow-lg
            backdrop-blur-md
            transition-all
            duration-200
            hover:scale-105
            hover:bg-black/60
          "
        >
          {isMuted ? (
            <VolumeX
              size={16}
              strokeWidth={1.7}
            />
          ) : (
            <Volume2
              size={16}
              strokeWidth={1.7}
            />
          )}
        </button>

      </div>

    </div>
  );
}