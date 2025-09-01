import React from "react";
import { IoSettingsOutline } from "react-icons/io5";

function Setting() {
	return (
		<div className=" absolute top-0 left-0 h-full w-full bg-zinc-950/85 z-50">
			<div className="bg-secondary text-white flex items-center py-2 px-5 rounded-lg gap-2 absolute top-20 left-0 right-0 mx-auto w-65">
				<IoSettingsOutline className="size-10 text-white animate-spin" />
				<h3 className="font-dana-medium text-2xl">
					درحال توسعه{" "}
					<span className="animate-dot1">.</span>
					<span className="animate-dot2">.</span>
					<span className="animate-dot3">.</span>
				</h3>
			</div>
		</div>
	);
}

export default Setting;
