"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute right-[15%] top-[35%] h-96 w-96 rounded-full bg-violet-600/20 blur-3xl"
        animate={{ x: [0, -70, 0], y: [0, 50, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[10%] left-[40%] h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 40, 0], scale: [1, 1.25, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}