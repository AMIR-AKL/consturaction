import Landing from "@/components/Landing/Landing";
import Projects from "@/components/Projects/Projects";
import React from "react";
const selection = [
	{
		id: 1,
		option: [
			{ id: 1, title: "-- شهرها --" },
			{ id: 2, title: "Tehran" },
			{ id: 3, title: "Yazd" },
			{ id: 4, title: "Mashhad" },
		],
	},
	{
		id: 2,
		option: [
			{ id: 1, title: "--  سال پایان --" },
			{ id: 2, title: "1401" },
			{ id: 3, title: "1402" },
		],
	},
	{
		id: 3,

		option: [
			{ id: 1, title: "--  براساس خدمت --" },
			{ id: 2, title: "ایمن سازی بنا" },
			{ id: 3, title: "بازسازی ساختمان" },
			{ id: 4, title: "بازسازی منزل" },
			{ id: 5, title: "دکوراسیون داخلی" },
			{ id: 6, title: "ساخت آپارتمان" },
			{ id: 7, title: "ساخت ویلا" },
		],
	},
];

type PropSelect = {
	option: { id: number; title: string }[];
};

function Select({ option }: PropSelect) {
	return (
		<select className="bg-gray-100 p-2.5 w-70 font-dana-medium rounded-lg border border-gray-400">
			{option.map((item) => (
				<option key={item.id} value={item.title}>
					{item.title}
				</option>
			))}
		</select>
	);
}

export default function ProjectsPage() {
	return (
		<>
			<Landing
				link=""
				texten="projects"
				textfas="پروژه ها"
				bg="bg-projects"
				des
				className="!h-130"
				cover={"bg-secondary/80"}
			/>
			<div className="mt-10 container">
				<div
					className="flex justify-between bg-white p-4 rounded-lg shadow w-9/10 mx-auto"
					dir="rtl"
				>
					<div className="flex gap-4">
						{selection.map((select) => (
							<Select key={select.id} option={select.option} />
						))}
					</div>
					<button className="bg-zinc-900 text-white p-2 w-40 cursor-pointer rounded-lg">
						اعمال فیلترها
					</button>
				</div>
			</div>
			<Projects title={false} box={false} />
		</>
	);
}
