import React, { ReactElement } from "react";
import Btn from "../Btn/Btn";
import ItemBox from "../ItemBox/ItemBox";

export default function Landing(props: {
	texten: string;
	textfas: string;
	link?: string;
	bg: string;
	children?: ReactElement;
	des?: boolean;
	cover?: string;
	className?: string;
}) {
	return (
		<section
			dir="rtl"
			className={`${props.bg} relative flex flex-col max-md:h-280 h-175 ${props.className}`}
		>
			<div
				className={`absolute top-0 bottom-0 left-0 w-full h-full ${props.cover} backdrop-brightness-50`}
			></div>
			<section className="max-sm:container flex flex-col items-center justify-center space-y-8 h-full z-10 relative text-white max-w-2xl mt-30 mx-auto text-center">
				<h1 className="font-staatliches-regular text-5xl md:text-7xl tracking-widest">
					{props.texten}
				</h1>
				<h2 className="font-dana-bold text-3xl md:text-5xl tracking-tight">
					{props.textfas}
				</h2>
				{props.des && (
					<p className="max-sm:text-sm text-xl font-dana-medium">
						شرکت ما یک شرکت ساختمان سازی برجسته در ایران است که در زمینه طراحی و
						ساخت ساختمان های مدرن و کیفیت بالا فعالیت می کند. ما به عنوان یک تیم
						متشکل از مهندسان و متخصصان با تجربه، به ارائه خدمات حرفه ای و
						استاندارد در زمینه ساخت و ساز می پردازیم.
					</p>
				)}
				{props.link && (
					<Btn
						text="درباره ما بیشتر بدانید"
						className={"text-indigo-950 bg-gray-200 tracking-tight"}
						link={props.link}
					/>
				)}
			</section>
			{props.children}
		</section>
	);
}
