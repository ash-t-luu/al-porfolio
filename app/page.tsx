import ProjectSection from "./components/project-section";
import AboutSection from "./components/about";
import HeroSection from "./components/hero-section";
import { Suspense } from "react";
// replaces children prop in layout.tsx

export default async function Home(): Promise<{}> {
  // change the entry point of url to the domain of where i will be hosting this
  const result = await fetch('http://localhost:3000/projects.json', { cache: "force-cache" });

  if (!result.ok) {
    throw new Error(`Failed to fetch projects. Status: ${result.status}`);
  }

  const projects = await result.json();

  if (!projects) {
    throw new Error(`Failed to render projects. Status: ${projects.status}`);
  }

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <Suspense fallback={<p>Loading Projects...</p>} >
        <ProjectSection projects={projects} />
      </Suspense>
    </main>
  );
}