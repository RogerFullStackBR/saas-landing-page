// components
import { Brands } from "@/components/Brands";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Integrations } from "@/components/Integrations";
import { Testimonials } from "@/components/Testimonials";

// implement lenis smooth scroll
import { ReactLenis } from "lenis/dist/lenis-react";

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <Hero />
        <Brands />
        <Features />
        <Integrations />
        <Testimonials />
        {/* temporaty div  */}
        <div className="h-[8000px]"></div>
      </ReactLenis>
    </>
  );
}
