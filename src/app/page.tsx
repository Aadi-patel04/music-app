import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white">
      <h1 className="text-2xl text-center bg-yellow-600 m-0 "> outer page  </h1>

      <HeroSection/>
    </main>
  );
}
