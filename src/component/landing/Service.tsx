import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";
import { Calendar, Heart, Star, Sun } from "lucide-react";

const services = [
  { icon: Star, title: "Career Guidance", desc: "Navigate your career path with clarity and confidence." },
  { icon: Heart, title: "Relationship Insights", desc: "Understand love compatibility and strengthen bonds." },
  { icon: Calendar, title: "Daily Horoscope", desc: "Get personalized predictions every day." },
  { icon: Sun, title: "Spiritual Healing", desc: "Balance your energy and find inner peace." },
];

export default function Services() {
  return (
    <section className="container mx-auto px-6 py-16 bg-white dark:bg-gray-900 rounded-3xl shadow-lg">
      <h2 className="mb-12 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
        Our Services
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <Card
              key={s.title}
              className="flex flex-col items-start p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <CardHeader className="flex items-center gap-3 mb-4">
                <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                  {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 dark:text-gray-300 text-sm">
                {s.desc}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
