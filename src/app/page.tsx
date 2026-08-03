import Footer from "@/components/footer";
import { Header } from "@/components/header";
import HeroSession from "@/components/hero-session";
import ServiceSession from "@/components/service-session";
import TestimonialsSession from "@/components/testimonials-session";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <Header />

      <main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-between bg-background sm:items-start gap-8">
        <HeroSession />
        <ServiceSession />
        <TestimonialsSession />
      </main>

      <Footer />
    </div>
  );
}
