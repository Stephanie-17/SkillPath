import React from "react";
import { MdCheckCircle, MdLayers, MdTerminal, MdTimer } from "react-icons/md";

const DashboardHeader = () => {
	return (
		<header className="bg-primary/25 p-5 rounded-xl">
			<span className="text-xs md:text-sm text-primary font-bold flex gap-2 items-center ">
				<MdCheckCircle /> ACTIVE GOAL
			</span>
			<h1 className="font-extrabold text-3xl md:text-4xl mt-2">
				Junior Web Developer
			</h1>
			<div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-end">
				<div>
					<p className="text-sm md:text-base text-slate-300 my-5 font-medium max-w-3xl ">
						Master the essentials of modern web development. This path takes you
						from absolute foundations to building full-stack applications with
						industry-standard tools.
					</p>
          <div className="flex gap-4 flex-wrap">
            <span className="bg-primary/35 py-2 px-3 text-white rounded-full text-xs flex gap-2 items-center font-semibold"><MdTimer /> 6-9 Months</span>
            <span className="bg-primary/35 py-2 px-3 text-white rounded-full text-xs flex gap-2 items-center font-semibold"><MdLayers/> 3 major milestones</span>
            <span className="bg-primary/35 py-2 px-3 text-white rounded-full text-xs flex gap-2 items-center font-semibold"><MdTerminal/> 12 Projects</span>
          </div>
				</div>

        <div>
          <p className="font-semibold mb-3 text-sm">Web Developer score: 72%</p>
          <button className="bg-primary py-3 px-5 rounded-xl font-bold">Resume Learning</button>
        </div>
			</div>
		</header>
	);
};

export default DashboardHeader;
