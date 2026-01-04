import { usePageTitle } from "@/hooks/use-page-title";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Services from "@/components/landing/Services";
import CTA from "@/components/landing/CTA";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import ClientsSection from "@/components/landing/Clients";
import SEOAudit from "@/components/SEOAudit";
import SEO from "@/components/SEO";
import {
  LocalBusinessSchema,
  OrganizationSchema
} from "@/components/SchemaMarkup";

export default function Home() {
  usePageTitle("Home");

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <SEO />
      <OrganizationSchema />
      <LocalBusinessSchema />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CTA />
        {/* <ClientsSection /> */}
        <Contact />
      </main>
      <Footer />
      <SEOAudit />
    </div>
  );
}
