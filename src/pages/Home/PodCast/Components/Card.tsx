import { Play, X } from "lucide-react";
import { useState } from "react";

type cardProps = {
  src: string;
  title: string;
  videoId?: string;
};

const Card = ({ src, title, videoId }: cardProps) => {
  const [isOpen, isSetOpen] = useState(false);

  return (
    <>
      <div
        className="
          rounded-2xl overflow-hidden
          shadow-md hover:shadow-xl
          transition-all duration-300
          bg-white flex-1
        "
      >
        {/* Image Container */}
        <div className="relative">
          <img
            src={src}
            alt="Thumbnail of yt Video"
            className="w-full h-[220px] sm:h-[300px] lg:h-[350px] object-cover"
          />

          {/* Gradient Overlay - hidden on mobile */}
          <div
            className="
              hidden sm:block
              absolute inset-0
              bg-gradient-to-t
              from-[#3F8CB5]/80
              via-[#296585]/50
              to-[#296585]/40
            "
          />

          {/* Play Button - visible on all devices */}
          <div
            className="
              absolute top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              w-12 h-12 sm:w-14 sm:h-14
              rounded-full bg-red-500
              flex items-center justify-center
              hover:scale-110
              transition-transform
              cursor-pointer
            "
            onClick={() => isSetOpen(true)}
          >
            <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-1" />
          </div>

          {/* Desktop Title */}
          <div
            className="
              hidden sm:block
              absolute bottom-0 left-0 right-0
              p-5
              text-white
              font-[1000]
              text-xl lg:text-2xl
            "
          >
            {title}
          </div>
        </div>

        {/* Mobile Title */}
        <div
          className="
            block sm:hidden
            p-4
            text-black
            font-bold
            text-lg
          "
        >
          {title}
        </div>

        {/* Video Modal */}
        {isOpen && (
          <div
            className="
              fixed inset-0 z-[99999]
              bg-black/80
              flex items-center justify-center
              p-4
            "
            onClick={() => isSetOpen(false)}
          >
            <div
              className="
                relative
                w-[95%]
                sm:w-[90%]
                max-w-4xl
                aspect-video
              "
              onClick={(e) => e.stopPropagation()}
            >
              <X
                className="
                  absolute -top-10 right-0
                  w-8 h-8
                  text-white
                  cursor-pointer
                "
                onClick={() => isSetOpen(false)}
              />

              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${videoId || '2fo9FdN8fao'}?autoplay=1`}
                allow="autoplay"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;