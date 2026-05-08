import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-red-600/30">
      <Hero />
    </main>
  );
}