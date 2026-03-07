import React from "react";
import { MdCode, MdTableChart, MdTimer } from "react-icons/md";
const RoadmapCard = () => {
	return (
		<article className="grid grid-cols-[40px_1fr] gap-4 pb-5">
			{/* decorative line */}
			{/* icon */}
			<div className="relative ">
				<div className="bg-primary/30 h-10 flex justify-center items-center w-10 rounded-full ">
					<MdCode className="text-3xl text-center text-primary" />
				</div>
				{/*main line */}
				<div className="w-0.5 h-[calc(100%+4rem)] bg-linear-to-b from-[#137fec] to-[#233648] text-slate-800 absolute top-0 left-5 -z-1">
					.
				</div>
			</div>

			{/* roadmap */}
			<div className="bg-primary/25 rounded-lg p-5">
				<p className="text-xs tracking-widest font-bold text-primary mb-3">
					PHASE 1
				</p>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h3 className="text-bold text-2xl max-sm:mb-3 font-bold">Foundations</h3>

				<div className="bg-primary/20 p-2 w-24 flex justify-between rounded-2xl">
					<MdTimer className="text-gray-400" />
					<p className="text-xs font-semibold text-gray-400">4-6 Weeks</p>
				</div>
        </div>
				

        <p className="text-gray-200 font-medium mt-5 tracking-wide">The bedrock of the web. Learn how to structure documents, style them beautifully, and add basic interactivity using the core languages of the internet.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-between lg:items-center">
          
          <div className="mt-9">
            <div className="flex gap-2 items-center">
            <MdTableChart />
            <h3 className="font-semibold text-xl ">Core Skills</h3>
          </div>

          <ul className="flex flex-wrap gap-3 mt-5">
            <li className="px-3 py-2  bg-primary/40 text-blue-200 font-semibold text-sm border-2 border-blue-600 rounded-xl">HTML</li>
            <li className="px-3 py-2  bg-primary/40 text-blue-200 font-semibold text-sm border-2 border-blue-600 rounded-xl">Javascript (core)</li>
              <li className="px-3 py-2  bg-primary/40 text-blue-200 font-semibold text-sm border-2 border-blue-600 rounded-xl">Responsive design</li>
                <li className="px-3 py-2  bg-primary/40 text-blue-200 font-semibold text-sm border-2 border-blue-600 rounded-xl">Git & Github</li>
          </ul>
          </div>
          

          <div className="bg-slate-800 mt-9 p-5 rounded-lg">
           <h3 className="text-primary font-semibold mb-3 text-lg">OUTCOME</h3>
           <p>You&apos;ll be able to build pixel-perfect, mobile-friendly landing pages and simple interactive apps like calculators or to-do lists</p>
          </div>
         
        </div>

        </div>

        
		
		</article>
	);
};

export default RoadmapCard;
