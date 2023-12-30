import ProjectSection from "./components/project-section";
import AboutSection from "./components/about";
import HeroSection from "./components/hero-section";
import { Suspense } from "react";
// replaces children prop in layout.tsx

export default async function Home(): Promise<{}> {
  // change the entry point of url to the domain of where i will be hosting this
  async function getData() {
    const url = process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : `https://${process.env.VERCEL_URL}`;

    const result = await fetch(url + `/projects.json`, { cache: "force-cache" });

    if (!result.ok) {
      console.log(`Failed to fetch projects. Status: ${result.status}`);
      console.log('Response:', await result.text());
    }

    const projectsData = await result.json();

    if (!projectsData) {
      console.log(`Failed to render projects. Status: ${projects.status}`);
    }

    return projectsData;
  }

  const projects = await getData();

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