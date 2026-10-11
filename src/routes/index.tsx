import { createFileRoute } from "@tanstack/react-router";
import { Starfield } from "@/components/Starfield";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yassine Yousfi — Full Stack Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Yassine Yousfi, full stack engineer at Société Générale CIB. Building robust, scalable software — from intuitive interfaces to resilient backends.",
      },
      { property: "og:title", content: "Yassine Yousfi — Full Stack Engineer" },
      {
        property: "og:description",
        content:
          "Full stack engineer turning complex problems into elegant, performant applications. Explore selected work and get in touch.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Starfield />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="relative z-10 border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Yassine Yousfi. Crafted among the stars.
      </footer>
    </div>
  );
}
