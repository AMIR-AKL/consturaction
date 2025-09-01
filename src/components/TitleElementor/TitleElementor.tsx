import React from "react";

type Props = {
	headtitle?: string;
	maintitle?: string;
	bottomtitle?: string;
};

export default function TitleElementor({
	headtitle,
	maintitle,
	bottomtitle,
}: Props) {
	return (
		<div className="text-center space-y-4">
			<h2 className="font-staatliches-regular text-5xl text-gray-300 uppercase">
				{headtitle}
			</h2>
			<h3 className="font-dana-bold text-2xl">{maintitle}</h3>
			<h4 className="font-dana-regular text-gray-400 tracking-tighter text-sm">
				{bottomtitle}
			</h4>
		</div>
	);
}
