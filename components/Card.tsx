"use client";
import { ReactNode } from "react";

type CardProps = {
  icon: ReactNode;
  title: string;
  desc: string;
};

export default function Card({ icon, title, desc }: CardProps) {
  return (
    <div
      className="p-8 rounded-2xl border border-white/10 bg-white/5 shadow-xl cursor-pointer transition hover:bg-white/10 hover:shadow-2xl">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-300 mt-2">{desc}</p>
    </div>
  );
}