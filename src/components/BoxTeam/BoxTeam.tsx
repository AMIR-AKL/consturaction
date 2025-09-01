import React from "react";

type Props = {
	src: string;
	name: string;
	job: string;
};

export default function BoxTeam({ src, name, job }: Props) {
	return (
		<div className="bg-white border-2 border-gray-300 flex flex-col items-center team relative max-md:saturate-80 md:saturate-20 hover:saturate-100 group transition-all">
			<div className="w-full">
				<div className="z-1 relative max-w-full p-4">
					<img
						className="object-contain group-hover:scale-105 transition-transform"
						src={src}
						alt=""
					/>
				</div>
			</div>
			<div className="z-1 absolute text-center bottom-10 mx-auto left-5 right-5 bg-amber-300 p-2 rounded-lg md:opacity-0 group-hover:opacity-100 transition-opacity">
				<h2 className="font-dana-bold">{name}</h2>
				<h4 className="font-dana-regular">{job}</h4>
			</div>
		</div>
	);
}
