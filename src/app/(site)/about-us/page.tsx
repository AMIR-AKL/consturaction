import Landing from "@/components/Landing/Landing";
import Setting from "@/components/Setting/Setting";
import React from "react";
export const metadata = {
	title: "About",
};
export default function AboutUs() {
	return (
		<>
			<Landing texten="About Us" textfas="درباره ما" bg="bg-about" />
			<Setting />
		</>
	);
}
