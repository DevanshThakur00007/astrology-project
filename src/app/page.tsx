import Hero from "@/component/landing/Hero";
import Stats from "@/component/landing/Stats";
import Services from "@/component/landing/Service";
import Testimonials from "@/component/landing/Testimonials";
import Offer from "@/component/landing/offer";

export default function HomePage() {
  return (
   <main className="flex flex-col">
      <Hero />
      <Stats />
      <Services />
      <Testimonials />
      <Offer />
    </main>
  );
}
