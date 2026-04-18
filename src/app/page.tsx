import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Works } from "@/components/Works";
import { EngineeringApproach } from "@/components/EngineeringApproach";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 font-sans selection:bg-amber-200 selection:text-amber-900">
      <Header />

      <main className="flex-1 w-full">
        <About />
        <Hero />
        <Works />
        <EngineeringApproach />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
