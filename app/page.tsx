//Mas para produção: remova a função generateMockResponse do EmailChecker.tsx e use apenas o
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import CTA from "../components/CTA";
import BlogCard from "../components/BlogCard";
import FuturisticSlider from "@/components/FuturisticSlider";
import HeroSlider from "@/components/HeroSlider";

export default function HomePage() {
  return (
    <div className="font-sans bg-black text-white space-y-20">

      <Hero/>  
      <HeroSlider/> 
      <About />
      <FuturisticSlider/>
      <Services />

      <BlogCard/>
      <CTA/>

    </div>
  );
}
