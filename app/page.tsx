import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { Philosophy } from "@/components/Philosophy";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-5xl px-6 pt-20 md:px-12">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
