import CTASection from "@/components/Landing/CTASection";
import Hero from "@/components/Landing/Hero";
import Phases from "@/components/Landing/Phases";
import PopularPaths from "@/components/Landing/PopularPaths";
import WhySkillPath from "@/components/Landing/whySkillPath";


export default function Home() {
  return (
    <main className="">
     <Hero />
     <Phases/>
     <WhySkillPath />
     <CTASection/>
    </main>
  );
}
