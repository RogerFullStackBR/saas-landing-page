// components
import { Hero } from "@/components/Hero";

// implement lenis smooth scroll
import { ReactLenis } from "lenis/dist/lenis-react";

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <Hero />
        {/* temporaty div  */}
        <div className="h-[8000px]"></div>
      </ReactLenis>
    </>
  );
}
