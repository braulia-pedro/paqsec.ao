// src/components/Card3D.tsx
"use client";
import React, { useRef } from "react";

export default function Card3D({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const el = useRef<HTMLDivElement | null>(null);

  function handleMove(e: React.PointerEvent) {
    const elRect = el.current!.getBoundingClientRect();
    const x = e.clientX - elRect.left;
    const y = e.clientY - elRect.top;
    const px = (x / elRect.width) - 0.5; // -0.5 .. 0.5

  }

  function handleLeave() {
    if (!el.current) return;
    el.current.style.transition = "transform 450ms cubic-bezier(.2,.8,.2,1)";
    el.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    setTimeout(() => (el.current!.style.transition = ""), 500);
  }

  return (
    <div
      ref={el}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`rounded-2xl bg-black/60 border border-white/8 shadow-2xl transform-gpu will-change-transform ${className}`}
      style={{ transformStyle: "preserve-3d" }}
      role="group"
    >
      <div className="p-6">{children}</div>
    </div>
  );
}
