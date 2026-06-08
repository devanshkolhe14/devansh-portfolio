import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="
      fixed
      pointer-events-none
      z-0
      w-[400px]
      h-[400px]
      rounded-full
      blur-[120px]
      bg-purple-600/20
      transition-all
      duration-200
      "
      style={{
        left: position.x - 200,
        top: position.y - 200,
      }}
    />
  );
}