import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { TrustStats } from "@/components/sections/trust-stats";
import { About } from "@/components/sections/about";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Features } from "@/components/sections/features";
import { AppShowcase } from "@/components/sections/app-showcase";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Benefits } from "@/components/sections/benefits";
import { Reports } from "@/components/sections/reports";
import { Security } from "@/components/sections/security";
import { WhoIsItFor } from "@/components/sections/who-is-it-for";
import { Roadmap } from "@/components/sections/roadmap";
import { FAQ } from "@/components/sections/faq";
import { Download } from "@/components/sections/download";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <About />
        <WhyChooseUs />
        <Features />
        <AppShowcase />
        <HowItWorks />
        <Benefits />
        <Reports />
        <Security />
        <WhoIsItFor />
        <Roadmap />
        <FAQ />
        <Download />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
