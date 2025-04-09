import React from "react";

import "./style.css";

// custom animation styles

const AutoScrollCarousel = ({ images, direction = "left", size = "w-full h-64" }) => {
  const isVertical = direction === "top" || direction === "bottom";

  const animationClass = {
    left: "scroll-left",
    right: "scroll-right",
    top: "scroll-top",
    bottom: "scroll-bottom",
  }[direction];

  return (
    <div className={`overflow-hidden relative ${size}`}>
      <div
        className={`flex ${isVertical ? "flex-col" : "flex-row"} ${animationClass} gap-2`}
      >
        {[...images, ...images].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`carousel-${i}`}
            className={`${
              isVertical ? "w-full h-1/3" : "w-full md:w-full h-auto"
            } object-cover flex-shrink-0`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoScrollCarousel;
