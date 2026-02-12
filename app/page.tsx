import CTASection from "@/components/Landing/CTASection";
import Hero from "@/components/Landing/Hero";
import PopularPaths from "@/components/Landing/PopularPaths";
import WhySkillPath from "@/components/Landing/whySkillPath";


export default function Home() {
  return (
    <main className="">
     <Hero />
     <PopularPaths/>
     <WhySkillPath />
     <CTASection/>
    </main>
  );
}
