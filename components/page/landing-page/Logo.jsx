import React from "react";
import { Sparkles } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Sparkles className="w-6 h-6 text-blue-500" />
      <span className="text-white text-xl font-bold">Interactify</span>
    </div>
  );
}
