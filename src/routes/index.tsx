import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustProblems } from "@/components/site/TrustProblems";
import { Services } from "@/components/site/Services";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { WhyProcess } from "@/components/site/WhyProcess";
import { Reels } from "@/components/site/Reels";
import { About } from "@/components/site/About";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

const title = "Jenx plumber | Plumbing Services in Cardiff";
const description =
  "Jenx plumber — precise, tidy plumbing work in Cardiff. Leak repair, drain cleaning, water heaters, pipe repair and emergency plumbing. Plumb-Life-Play.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Nav />
      <main>
        <Hero />
        <TrustProblems />
        <Services />
        <BeforeAfter />
        <WhyProcess />
        <Reels />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
