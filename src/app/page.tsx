import HeroSession from "@/components/hero-session";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-between bg-background sm:items-start">
        <HeroSession />
      </main>
    </div>
  );
}
