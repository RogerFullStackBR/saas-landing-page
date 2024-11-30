// components
import { Brands } from "@/components/Brands";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";

// implement lenis smooth scroll
import { ReactLenis } from "lenis/dist/lenis-react";

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <Hero />
        <Brands />
        <Features />
        {/* temporaty div  */}
        <div className="h-[8000px]"></div>
      </ReactLenis>
    </>
  );
}
