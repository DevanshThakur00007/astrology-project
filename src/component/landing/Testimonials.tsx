"use client";

import { useEffect, useState } from "react";
import { Testimonial } from "@/types";  
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function Testimonials() {
  const [data, setData] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then(setData)
      .catch(() => setData([]));
  }, []);

  if (!data.length) return null;

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="mb-12 text-3xl font-extrabold text-center text-gray-900 dark:text-white">
        What Clients Say
      </h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        className="group"
      >
        {data.map((t) => (
          <SwiperSlide key={t.name}>
            <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={t.imageUrl}
                  alt={t.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover border-2 border-indigo-500"
                />
                <span className="font-semibold text-gray-900 dark:text-white">{t.name}</span>
              </div>
              <p className="text-center text-gray-700 dark:text-gray-300 text-sm md:text-base">
                {t.feedback}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
