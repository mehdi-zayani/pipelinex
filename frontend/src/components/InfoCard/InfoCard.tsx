"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  title: string;
  value: string | number | null;
  barColor?: string; // color of the side bar
  textColor?: string; // color of the text and icon
  Icon?: LucideIcon; // optional icon
}

export default function InfoCard({
  title,
  value,
  barColor = "bg-gray-500",
  textColor = "text-gray-900",
  Icon,
}: InfoCardProps) {
  return (
    <motion.div
      className="flex min-w-[180px] rounded-xl shadow-lg overflow-hidden cursor-default"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.03 }}
    >
      {/* Colored side bar */}
      <div className={`w-2 ${barColor}`} />

      {/* Card content */}
      <div className="flex-1 p-5 bg-white flex flex-col items-center justify-center gap-2">
        {/* Card title */}
        <h2 className="text-sm font-semibold text-gray-500">{title}</h2>

        {/* Value with optional icon */}
        <div className="flex items-center gap-2">
          {Icon && <Icon className={`w-6 h-6 ${textColor}`} />}
          <p className={`text-2xl font-bold ${textColor}`}>{value ?? "Loading..."}</p>
        </div>
      </div>
    </motion.div>
  );
}
