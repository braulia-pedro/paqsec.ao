"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import CountUp from "react-countup";

// Importa dinamicamente só no client
const ResponsiveContainer = dynamic(
  () => import("recharts").then((mod) => mod.ResponsiveContainer),
  { ssr: false }
);
const LineChart = dynamic(
  () => import("recharts").then((mod) => mod.LineChart),
  { ssr: false }
);
const Line = dynamic(
  () => import("recharts").then((mod) => mod.Line),
  { ssr: false }
);
const XAxis = dynamic(
  () => import("recharts").then((mod) => mod.XAxis),
  { ssr: false }
);
const YAxis = dynamic(
  () => import("recharts").then((mod) => mod.YAxis),
  { ssr: false }
);
const Tooltip = dynamic(
  () => import("recharts").then((mod) => mod.Tooltip),
  { ssr: false }
);

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 700 },
  { name: "Mar", value: 900 },
  { name: "Apr", value: 1400 },
  { name: "May", value: 1800 },
  { name: "Jun", value: 2400 },
];

export default function StatsChart3D() {
  const [inView, setInView] = useState(false);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width; // 0 → 1
    const y = (e.clientY - top) / height; // 0 → 1
    const rotateX = (y - 0.5) * 20; // inclinação vertical
    const rotateY = (x - 0.5) * -20; // inclinação horizontal
    setTransform({ rotateX, rotateY });
  };

  return (
    <motion.div
      className="w-full h-96 perspective-1000"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: "easeOut" }}
      onViewportEnter={() => setInView(true)}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTransform({ rotateX: 0, rotateY: 0 })}
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full bg-gradient-dark rounded-2xl shadow-2xl border border-white/10 p-6 transition-transform duration-200 ease-out"
      >
        <h2 className="text-xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Crescimento Futurista
        </h2>

        <ResponsiveContainer width="100%" height="75%">
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip
              contentStyle={{
                background: "#0f172a",
                border: "1px solid #1e40af",
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="url(#blueGradient)"
              strokeWidth={3}
              dot={{ r: 6, stroke: "#1e3a8a", strokeWidth: 2, fill: "#3b82f6" }}
              isAnimationActive={inView}
              animationDuration={2000}
            />
            <defs>
              <linearGradient id="blueGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>

        {/* Contador animado */}
        <div className="text-center mt-4 text-2xl font-bold">
          {inView && (
            <CountUp
              end={2400}
              duration={2}
              separator="."
              prefix="+"
              className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
