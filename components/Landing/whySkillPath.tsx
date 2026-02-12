import React from "react";
import Image from "next/image";
import { whySkillPathInfo } from "@/data/whySkillPathInfo";
const WhySkillPath = () => {
	return (
		<section className=" px-5 md:px-10 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:justify-between">

			<div>
        <header>
           <h2 className="font-bold text-3xl sm:text-4xl mb-5">Why SkillPath?</h2>
           <p className="text-white/50 mb-10">We focus on ROI and outcome-driven data to ensure your learning leads to real career advancement. Every path is engineered for success</p>
        </header>

				<ul className="flex flex-col gap-6 mb-8">
          {
						whySkillPathInfo.map(reason=>(
							<li key={reason.id} className="flex gap-3">
								<div className="bg-primary/10 text-primary h-12 w-12 p-2 ">icon</div>
								<div className="flex flex-col gap-2">
									<h3 className="text-lg font-semibold">{reason.reason}</h3>
									<p className="text-white/50">{reason.description}</p>
								</div>
							</li>
						))
					}
				</ul>
      </div>

      <div className="relative">
        <div className="rounded-2xl max-h-138 overflow-hidden shadow-2xl border border-white/10 aspect-square sm:aspect-video lg:aspect-square">
				<Image
					className="h-fit  w-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
					alt="People working in a modern office with data dashboards on screens"
					src="/whySkillPath.png"
          width={200}
          height={200}
				/>
				<div className="absolute inset-0 bg-linear-to-t from-background-dark/80 to-transparent"></div>
				<div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 w-[90%] lg:w-[75%] ">
					<div className="flex items-center gap-3 mb-2">
						<div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
							<span className="material-symbols-outlined">🔗</span>
						</div>
						<div>
							<p className="text-xs text-white/70 uppercase tracking-widest font-bold">
								Career Impact
							</p>
							<p className="text-lg font-bold text-white">
								Average Salary Increase: +42%
							</p>
						</div>
					</div>
				</div>
			</div>
      </div>
			
		</section>
	);
};

export default WhySkillPath;
