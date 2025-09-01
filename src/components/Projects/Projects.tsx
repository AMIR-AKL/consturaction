import React from "react";
import TitleElementor from "../TitleElementor/TitleElementor";
import Projectox from "../ProjectBox/Projectox";
import Btn from "../Btn/Btn";
import TextBox from "../TextBox/TextBox";

const projectsItem = [
	{
		id: 1,
		title: "مجتمع سیتادیوم",
		text: "ما با استفاده از تکنولوژی های نوین و به روز، به طور مداوم در جستجوی روش های بهبود یافته برای ارائه بهترین کیفیت در پروژه های ساختمانی خود هستیم....",
		city: "Yazd",
		year: "۱۴۰۳",
		src: "/image/Sitadiom.jpg",
	},
	{
		id: 2,
		title: "پل طبعیت",
		text: "ما با استفاده از تکنولوژی های نوین و به روز، به طور مداوم در جستجوی روش های بهبود یافته برای ارائه بهترین کیفیت در پروژه های ساختمانی خود هستیم....",
		city: "Tehran",
		year: "۱۴۰۱",
		src: "/image/Projects.webp",
	},
	{
		id: 3,
		title: "برج تجاری نوین",
		text: "ما با استفاده از تکنولوژی های نوین و به روز، به طور مداوم در جستجوی روش های بهبود یافته برای ارائه بهترین کیفیت در پروژه های ساختمانی خود هستیم....",
		city: "Tehran",
		year: "۱۴۰۳",
		src: "/image/Modern.webp",
	},
];

export default function Projects(props: { box: boolean; title: boolean }) {
	return (
		<section dir="rtl" className="mt-30">
			<div className="container">
				{props.title && (
					<TitleElementor
						headtitle={"projects"}
						maintitle={"پروژه های انجام شده شرکت ما"}
						bottomtitle={"با هدف جلب رضایت مشتریان"}
					/>
				)}
				{/* projects contianer */}
				<div className="mt-30">
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
						{projectsItem.map((project) => (
							<Projectox
								key={project.id}
								title={project.title}
								text={project.text}
								city={project.city}
								year={project.year}
								src={project.src}
							/>
						))}
					</div>
					{props.box && (
						<TextBox
							title={"همه پروژه های شرکت ساختمانی"}
							text={
								"ما میتوانید همه پروژه های گروه ساختمانی ما را در صفحه پروژه های شرکت مشاهده کنید."
							}
							link={"/"}
						/>
					)}
				</div>
			</div>
		</section>
	);
}
