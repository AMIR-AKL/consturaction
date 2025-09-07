import React from "react";
import { SiComma } from "react-icons/si";

type PropComments = {
	comment: {
		src: string;
		title: string;
		text: string;
		name: string;
		job: string;
	};
};

export default function Comments({ comment }: PropComments) {
	return (
		<div className="sm:h-55 flex items-center gap-4 bg-white rounded-lg overflow-hidden shadow">
			<div className="max-sm:max-h-40 w-1/3">
				<img
					className="size-full object-cover"
					src={comment.src}
					alt="profile"
				/>
			</div>
			<div className="space-y-4 w-1/2">
				<div>
					<h2 className="font-dana-bold text-lg text-gray-700 max-sm:text-sm">
						{comment.title}
					</h2>
					<p className="font-dana-regular tracking-tighter text-gray-400 max-w-sm text-xs sm:text-sm">
						{comment.text}
					</p>
				</div>
				<div className="flex items-center gap-2">
					<div className="flex rotate-180">
						<SiComma className="text-gray-300" size={30} />
						<SiComma className="text-gray-300" size={30} />
					</div>
					<div>
						<h2 className="font-dana-bold text-sm sm:text-base">{comment.name}</h2>
						<h5 className="text-xs font-dana-regular text-gray-500">
							{comment.job}
						</h5>
					</div>
				</div>
			</div>
		</div>
	);
}
