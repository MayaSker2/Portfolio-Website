import { useEffect, useRef } from "react";

export default function Snow() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    function createSnow() {
      const snow = document.createElement("div");
      snow.className = "snowflake";
      const size = Math.random() * 6 + 2;
      snow.style.width = size + "px";
      snow.style.height = size + "px";
      snow.style.left = Math.random() * container.offsetWidth + "px";
      snow.style.animationDuration = Math.random() * 5 + 5 + "s";
      snow.style.opacity = Math.random();
      container.appendChild(snow);
      setTimeout(() => snow.remove(), 10000);
    }

    const interval = setInterval(createSnow, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
    >
    </div>
  );
}
