import AboutSection from "./components/about";
import HeroSection from "./components/hero-section";

// replaces children prop in layout.tsx
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
