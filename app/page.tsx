import ProjectSection from "./components/project-section";
import AboutSection from "./components/about";
import HeroSection from "./components/hero-section";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <Suspense fallback={<p>Loading Projects...</p>} >
        <ProjectSection />
      </Suspense>
    </main>
  );
}