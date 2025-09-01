import React from "react";
import { MdCalendarMonth } from "react-icons/md";

export default function Date(props: { date: string }) {
	return (
		<p className="flex font-dana-regular gap-1">
			<MdCalendarMonth className="size-4" />
			{props.date}
		</p>
	);
}
