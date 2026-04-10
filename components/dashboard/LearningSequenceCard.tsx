import React from "react";
import {
	MdCheck,
	MdCss,
	MdHistoryEdu,
	MdHtml,
	MdJavascript,
} from "react-icons/md";

const LearningSequenceCard = () => {
	return (
		<article className="grid grid-cols-[40px_1fr] mt-5 gap-3 sm:gap-5">
			<div className="relative ">
				<div className="bg-primary h-7 flex justify-center items-center w-7 rounded-full shadow-2xl shadow-primary">
					<MdCheck className="text-2xl text-center " />
				</div>
				{/*main line */}
				<div className="w-0.5 h-[calc(100%+4rem)] bg-linear-to-b from-[#137fec] to-[#233648] text-transparent absolute top-7 left-3 -z-1">
					.
				</div>
			</div>
			{/* Roadmap sequence */}
			<div>
				<div className="bg-primary/30 border border-primary rounded-lg p-5">
					<div className="flex justify-between items-center">
						<div>
							<h2 className="text-2xl font-semibold">Phase 1: Foundations</h2>
							<p className="text-gray-300 text-sm">
								The building blocks of the web
							</p>
						</div>
						<span className="text-xs bg-blue-300/80 px-4 py-1 text-blue-800 font-bold uppercase tracking-widest rounded-lg">
							Completed
						</span>
					</div>

					<ul className="mt-5 flex flex-col gap-4">
						<li className="bg-primary/15 border border-primary/60 rounded-xl p-3 flex gap-3 items-center">
							<MdHtml className="text-2xl" />
							<div>
								<h3 className="tracking-wide font-semibold">HTML5</h3>
								<p className="text-gray-400 text-sm">
									Semantic tags & Structure
								</p>
							</div>
						</li>
						<li className="bg-primary/15 border border-primary/60 rounded-xl p-3 flex gap-3 items-center">
							<MdCss className="text-2xl" />
							<div>
								<h3 className="tracking-wide font-semibold">CSS3</h3>
								<p className="text-gray-400 text-sm">
									Flexbox, Grid & Responsive
								</p>
							</div>
						</li>

						<li className="bg-primary/15 border border-primary/60 rounded-xl p-3 flex gap-3 items-center">
							<MdJavascript className="text-2xl" />
							<div>
								<h3 className="tracking-wide font-semibold">JS Basics</h3>
								<p className="text-gray-400 text-sm">Variables, Loops, DOM</p>
							</div>
						</li>

						<li className="bg-primary/15 border border-primary/60 rounded-xl p-3 flex gap-3 items-center">
							<MdHistoryEdu className="text-2xl" />
							<div>
								<h3 className="tracking-wide font-semibold">Project</h3>
								<p className="text-gray-400 text-sm">Personal Portfolio site</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</article>
	);
};

export default LearningSequenceCard;
