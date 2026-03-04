import React from "react";
import { FaCheckCircle } from "react-icons/fa";

interface PhaseCardProps {
	id: number;
	header: string;
	section: string[];
}
const PhaseCard = ({ id, header, section }: PhaseCardProps) => {
	return (
		<article className="p-6 w-full max-w-120 bg-slate-900/50 border rounded-lg border-slate-700 hover:border-primary/50 hover:shadow-xs hover:shadow-primary">
			<span className="bg-primary/20 text-primary px-2 py-1 font-bold text-xs rounded-full ">
				PHASE O{id}
			</span>

			<h3 className="font-bold text-lg my-5">{header}</h3>

			<ul>
				{section.map((sect) => (
					<li key={sect}>
						<div className="flex items-center gap-3 ">
							<FaCheckCircle className="text-primary" />
							<p className="font-semibold text-gray-500">
								{sect}
							</p>
						</div>
					</li>
				))}

				<li></li>
				<li></li>
			</ul>
		</article>
	);
};

export default PhaseCard;
