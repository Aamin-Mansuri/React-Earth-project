import React, { useRef, useState } from "react";

const ComparisonSlider = (pic) => {
  const sliderRef = useRef(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updateSlider = (clientX) => {
    const rect = sliderRef.current.getBoundingClientRect();

    let x = clientX - rect.left;
    let percent = (x / rect.width) * 100;

    percent = Math.max(0, Math.min(100, percent));

    setPosition(percent);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    updateSlider(e.clientX);
  };

  return (
    <div className="w-full flex justify-center p-5">
      <div
        ref={sliderRef}
        className="relative w-full max-w-5xl h-125 overflow-hidden rounded-2xl select-none"
        onMouseMove={handleMouseMove}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
      >
        {/* Bottom Image */}
        <img
          src={pic.beforeImg}
          alt="before"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Top Image */}
        <img
          src={pic.afterImg}
          alt="after"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        />

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white z-20"
          style={{
            left: `${position}%`,
            transform: "translateX(-50%)",
          }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 z-30 w-10 h-10 bg-white border-4 border-black rounded-full flex items-center justify-center shadow-xl cursor-ew-resize"
          style={{
            left: `${position}%`,
            transform: "translate(-50%, -50%)",
          }}
          onMouseDown={() => setDragging(true)}
        >
          ⇆
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 z-30 bg-black/60 text-white px-3 py-1 rounded">
          After
        </div>

        <div className="absolute top-4 right-4 z-30 bg-black/60 text-white px-3 py-1 rounded">
          Before
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlider;
