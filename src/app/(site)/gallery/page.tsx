import Landing from "@/components/Landing/Landing";
import Setting from "@/components/Setting/Setting";
import React from "react";
export const metadata = {
	title: {
		absolute: "Gallery",
	},
};
export default function Gallery() {
	return (
		<>
			<Landing texten="Gallery" textfas="گالری تصویر" bg="bg-gallery" />
			<Setting />
		</>
	);
}
