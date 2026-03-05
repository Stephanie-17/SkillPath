import React from "react";
const Hero = () => {
	return (
    <section className="flex justify-center relative pb-27 mt-30">
      	<section className="  p-5 flex flex-col items-center ">
          {/* Decorative elements */}
          <div
						className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none"
					>
						<div
							className="absolute top-0 right-0 w-125 h-125 bg-primary/30 rounded-full blur-[120px]"
						></div>
						<div
							className="absolute bottom-0 left-0 w-100 h-100 bg-blue-600/20 rounded-full blur-[100px]"
						></div>
					</div>

			{/* Hero Text */}

      <div className=" border text-xs border-primary bg-primary/10 rounded-3xl px-7 py-1 mb-5">
        <p className="text-primary">★ Welcome to SkillPath ★</p>
      </div>
			<div className="text-center mb-10 max-sm:w-90 sm:w-[70%]   md:pl-5">
				<h1 className=" font-extrabold text-4xl md:text-5xl lg:text-7xl mb-5 lg:mb-10">
					A Structured Trackable Roadmap to Becoming a  <span className="text-primary">Junior Web Developer</span>
				</h1>
				<p className="font-medium md:text-lg text-gray-400">
					SkillPath helps you turn ordered progression. Skip the tutorial hell and follow a path meticulously designed for employment.
				</p>
			</div>
		<div className="flex gap-4">
			<button className="bg-primary shadow-[4px_0_12px] rounded-lg shadow-primary px-6 py-3 font-bold text-sm">Start Your Roadmap &rarr;</button>
			<button className="bg-transparent border-2 rounded-lg px-6 py-3  text-sm border-slate-500">Full Path Breakdown</button>
		</div>
		</section>
    </section>
	
	);
};

export default Hero;
