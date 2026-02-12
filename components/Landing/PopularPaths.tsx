import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import PopularPathCard from "./PopularPathCard";
import { popularPathInfo } from "@/data/popularPathData";

const PopularPaths = () => {
	return (
		<section className="bg-white/5 py-10  sm:py-20 px-5 lg:px-10">
			<div>
				<header className="flex flex-col gap-2 mb-10">
					<h1 className="font-bold text-3xl md:text-4xl">
						Popular Career Paths
					</h1>
					<div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
						<p className="text-white/50">
							Validated by current hiring trends and real world salary data.
						</p>
						<Link href={"/"}>
							<p className="text-primary flex gap-3 items-center">
								View all paths <FaArrowRight />
							</p>
						</Link>
					</div>
				</header>

				<section className="flex max-sm:flex-col flex-wrap gap-4 lg:gap-15 lg:ml-10 items-center max-lg:justify-center">
					{popularPathInfo.map((path) => (
						<PopularPathCard
							key={path.id}
							iconPath={path.iconPath}
							pathName={path.pathName}
							description={path.description}
							whyItsPopular={path.whyItsPopular}
							textColorOfWhyItsPopular={path.textColorOfWhyItsPopular}
							benefit={path.benefit}
						/>
					))}
				</section>
			</div>
		</section>
	);
};

export default PopularPaths;
