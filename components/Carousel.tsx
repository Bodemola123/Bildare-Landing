"use client";

import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/Rectangle1.png",
  "/Rectangle2.png",
  "/Rectangle3.png",
  "/Rectangle4.png",
];

const Carousel = () => {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [rowWidth, setRowWidth] = useState(0);

  useEffect(() => {
    // Measure total width of one row for seamless loop
    if (topRef.current) {
      setRowWidth(topRef.current.scrollWidth / 2); // because we duplicated images
    }
  }, []);

  return (
    <div className="w-full overflow-hidden relative py-10 space-y-6 min-h-screen flex flex-col justify-center">
      
      {/* Top row - scroll left */}
      <div className="overflow-hidden relative">
        <motion.div
          ref={topRef}
          className="flex gap-6"
          animate={{ x: [-0, -rowWidth] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 24, ease: "linear" },
          }}
        >
          {[...images, ...images].map((src, i) => (
<div
  key={`top-${i}`}
  className="shrink-0 w-136 h-112.5 rounded-3xl overflow-hidden"
>
  <Image
    src={src}
    alt={`Top carousel ${i}`}
    width={544}      // can be anything, overridden by CSS
    height={445}     // can be anything
    style={{ width: "544px", height: "445px" }} // enforce size
  />
</div>
          ))}
        </motion.div>
      </div>

      {/* Bottom row - scroll right */}
      <div className="overflow-hidden relative">
        <motion.div
          ref={bottomRef}
          className="flex gap-6"
          animate={{ x: [-rowWidth, 0] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 24, ease: "linear" },
          }}
        >
          {[...images, ...images].reverse().map((src, i) => (
<div
  key={`bottom-${i}`}
  className="shrink-0 w-136 h-111.25 rounded-3xl overflow-hidden"
>
  <Image
    src={src}
    alt={`Bottom carousel ${i}`}
    width={544}
    height={445}
       style={{ width: "544px", height: "445px" }} // enforce size
  />
</div>

          ))}
        </motion.div>
      </div>

    </div>
  );
};

export default Carousel;
