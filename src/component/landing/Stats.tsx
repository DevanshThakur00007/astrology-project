import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";

const stats = [
  { value: "3000+", label: "Sessions" },
  { value: "10+", label: "Years Experience" },
  { value: "98%", label: "Happy Clients" },
  { value: "24/7", label: "Support" },
];

export default function Stats() {
  return (
    <section className="container mx-auto px-6 py-16 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-lg">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
        Our Achievements
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {stats.map((s) => (
          <Card
            key={s.label}
            className="flex flex-col items-center justify-center p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <CardHeader className="mb-2">
              <CardTitle className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                {s.value}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 dark:text-gray-300 text-center text-sm">
              {s.label}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
