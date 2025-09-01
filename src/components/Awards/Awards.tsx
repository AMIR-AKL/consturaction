import React from "react";
import TitleElementor from "../TitleElementor/TitleElementor";
import AwardSlider from "../AwardSlider/AwardSlider";
import Btn from "../Btn/Btn";

export default function Awards() {
	return (
		<section dir="rtl" className="mt-10 py-5 container">
			<TitleElementor
				headtitle="awards"
				maintitle="گواهینامه ها و افتخارات شرکت"
				bottomtitle="افتخار ما رضایت شماست"
			/>
			{/* main */}
			<div className="mt-20 flex max-lg:flex-col gap-5 lg:justify-between">
				<div className="relative video-container mx-auto max-w-80 lg:max-w-sm mt-5">
					<div className="rounded-lg overflow-hidden">
						<img className="" src="/image/Certificate.webp" alt="" />
					</div>
				</div>
				<div className="lg:w-2/3 space-y-4 mt-20">
					<h2 className="text-lg font-dana-medium tracking-tight">
						افتخار ما رضایت مشتریان مجموعه است
					</h2>
					<p className="text-sm font-dana-regular text-gray-400">
						ما در طول سال ها توانسته ایم با پروژه های متعدد و متنوع، اعتماد و
						رضایت مشتریان خود را بدست آوریم. از ساختمان های مسکونی تا پروژه های
						عمومی و صنعتی، ما توانسته ایم در هر زمینه ای که فعالیت می کنیم،
						استانداردهای بالا را حفظ کنیم و پروژه های با کیفیتی را به اتمام
						برسانیم. از ابتدا کیفیت اصلی ترین و مهم ترین هدف ما بوده است.{" "}
					</p>

					<AwardSlider />

					<Btn
						link={"/about-us"}
						text={"درباره گروه ساختمانی ما"}
						className={"bg-gray-800 text-white w-45"}
					/>
				</div>
			</div>
		</section>
	);
}
