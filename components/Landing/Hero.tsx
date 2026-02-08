import React from "react";
import Search from "./Search";
const Hero = () => {
	return (
    <section className="flex justify-center relative">
      	<section className="mt-10  p-5 flex flex-col items-center ">
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
			<div className="text-center mb-6 max-sm:w-90 sm:w-[70%]  md:pl-5">
				<h1 className=" font-extrabold text-4xl md:text-5xl lg:text-7xl mb-5 lg:mb-10">
					Choose the <span className="text-primary">right skill</span>, not just the next course.
				</h1>
				<p className="font-medium md:text-lg text-gray-400">
					SkillPath guides you from confusion to clarity by helping you choose
					the right ,compare,learning paths, and stay on track toward real outcomes.
				</p>
			</div>
			<Search />
		</section>
    </section>
	
	);
};

export default Hero;
