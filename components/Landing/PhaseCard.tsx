import React from "react";
import { FaCheckCircle } from "react-icons/fa";

interface PhaseCardProps {
	id: number;
	header: string;
	section: string[];
}
const PhaseCard = ({ id, header, section }: PhaseCardProps) => {
	return (
		<article className="p-6 w-full max-w-100 bg-slate-900/50 border-2 rounded-lg border-blue-400 hover:border-primary/50 hover:shadow-xs hover:shadow-primary transition-all duration-500">
			<span className="bg-primary/20 text-primary px-2 py-1 font-bold text-xs rounded-full ">
				PHASE O{id}
			</span>

			<h3 className="font-bold text-xl my-5">{header}</h3>

			<ul className="flex flex-col gap-4">
				{section.map((sect) => (
					<li key={sect}>
						<div className="flex items-center gap-3 ">
							<FaCheckCircle className="text-primary" />
							<p className=" text-gray-400">
								{sect}
							</p>
						</div>
					</li>
				))}
			</ul>
		</article>
	);
};

export default PhaseCard;
