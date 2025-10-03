
// BreachesList.tsx
"use client";
import { useState } from "react";
import { ShieldAlert } from "lucide-react";
export default function BreachesList({ details }: { details: any[] }) {
  const [expanded, setExpanded] = useState(false);
  if (!details || details.length === 0) return null;
  const shown = expanded ? details : details.slice(0, 3);
  return (
    <div className="mt-3 space-y-2">
      {shown.map((b, idx) => (
        <div key={idx} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm">
          <div className="flex items-center gap-2"><ShieldAlert className="w-4 h-4 text-red-400" /><span className="font-medium">{b.Name}</span></div>
          <span className="text-white/60 text-xs">{b.BreachDate}</span>
        </div>
      ))}
      {details.length > 3 && (<button onClick={() => setExpanded(!expanded)} className="text-xs text-blue-400 hover:underline mt-2">{expanded ? "Ver menos" : `Ver todos (${details.length})`}</button>)}
    </div>
  );
}


