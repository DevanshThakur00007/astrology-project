"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/component/ui/button";  
import { Card } from "@/component/ui/card";
import { Star, ThumbsUp, ShieldCheck } from "lucide-react";
import Link from "next/link";

interface Badge {
  label: string;
  icon: "Star" | "ThumbsUp" | "ShieldCheck";
}

interface HeroData {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
  badges: Badge[];
}


const iconMap: Record<Badge["icon"], React.ComponentType<{ className?: string }>> = {
  Star,
  ThumbsUp,
  ShieldCheck,
};

export default function Hero() {
  const [data, setData] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/hero")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load hero section.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;
  if (!data) return null;

  return (
    <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl shadow-lg">
  
  <div className="flex-1 flex flex-col justify-center space-y-6 text-center md:text-left">
    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
      {data.title}
    </h1>
    <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
      {data.subtitle}
    </p>

    <Button
      asChild
      className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition"
    >
      <Link href={data.ctaLink}>{data.ctaText}</Link>
   
    </Button>

    
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
      {data.badges.map((badge, idx) => {
        const Icon = iconMap[badge.icon];
        return (
          <Card
            key={idx}
            className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <Icon className="w-5 h-5 text-indigo-600" />
            <span className="text-gray-700 font-medium">{badge.label}</span>
          </Card>
        );
        // {console.log(data?.ctaText)}
      })}
    </div>
  </div>

  
  <div className="flex-1 flex justify-center md:justify-end mb-10 md:mb-0">
    <Image
      src={data.imageUrl}
      alt="Astrologer"
      width={450}
      height={450}
      className="rounded-3xl shadow-xl object-cover"
    />
  </div>
</section>

  );
}
