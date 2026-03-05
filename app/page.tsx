import CTASection from "@/components/Landing/CTASection";
import Hero from "@/components/Landing/Hero";
import Phases from "@/components/Landing/Phases";
import Technology from "@/components/Landing/Technology";
import WhySkillPath from "@/components/Landing/SkillPathSystem";


export default function Home() {
  return (
    <main className="">
     <Hero />
     <Phases/>
     <Technology />
     <WhySkillPath />
     <CTASection/>
    </main>
  );
}
