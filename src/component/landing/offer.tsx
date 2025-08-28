"use client";

import { useEffect, useState } from "react";
import { Button } from "@/component/ui/button";

export default function Offer() {
  const [timeLeft, setTimeLeft] = useState<number>(3600); // 1 hour countdown

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const format = (t: number) => {
    const h = Math.floor(t / 3600);
    const m = Math.floor((t % 3600) / 60);
    const s = t % 60;
    return `${h.toString().padStart(2, "0")}h ${m
      .toString()
      .padStart(2, "0")}m ${s.toString().padStart(2, "0")}s`;
  };

  return (
    <section className="container mx-auto px-6 py-20 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl shadow-lg text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
        Special Offer
      </h2>
      <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
        Limited time discount for first-time users.
      </p>

      <div className="text-3xl md:text-4xl font-mono font-bold text-indigo-600 mb-8">
        {format(timeLeft)}
      </div>

      <Button
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition"
        asChild
      >
        <a href="/book">Book Now</a>
      </Button>
    </section>
  );
}
