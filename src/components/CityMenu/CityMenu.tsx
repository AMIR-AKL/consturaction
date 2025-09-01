"use client";
import React, { useState } from "react";
import Btn from "../Btn/Btn";
type CityInfo = {
	title: string;
	des: string;
	info: {
		done: number;
		progress: number;
		percent: number;
	};
};

type CitiesInfo = {
	تهران: CityInfo;
	مشهد: CityInfo;
	تبریز: CityInfo;
	یزد: CityInfo;
};

const citiesInfo: CitiesInfo = {
	تهران: {
		title: "تهران، محل اصلی فعالیت شرکت ما",
		des: "ما در طول سال ها توانسته ایم با پروژه های متعدد و متنوع، اعتماد و رضایت مشتریان خود را بدست آوریم. از ساختمان های مسکونی و تجاری تا پروژه های عمومی و صنعتی، ما توانسته ایم در هر زمینه ای که فعالیت می کنیم، استانداردهای بالا را حفظ کنیم و پروژه های با کیفیتی را به اتمام برسانیم. ما به عنوان یک شرکت ساختمان سازی، به ارائه خدمات جامع و کامل به مشتریان خود متعهد هستیم.",
		info: { done: 270, progress: 7, percent: 97 },
	},
	مشهد: {
		title: "مشهد، شهر دوم فعالیت شرکت ما",
		des: "ما در طول سال ها توانسته ایم با پروژه های متعدد و متنوع، اعتماد و رضایت مشتریان خود را بدست آوریم. از ساختمان های مسکونی و تجاری تا پروژه های عمومی و صنعتی، ما توانسته ایم در هر زمینه ای که فعالیت می کنیم، استانداردهای بالا را حفظ کنیم و پروژه های با کیفیتی را به اتمام برسانیم. ما به عنوان یک شرکت ساختمان سازی، به ارائه خدمات جامع و کامل به مشتریان خود متعهد هستیم.",
		info: { done: 190, progress: 4, percent: 99 },
	},
	تبریز: {
		title: "تبریز، شهر سوم فعالیت شرکت ما",
		des: "ما در طول سال ها توانسته ایم با پروژه های متعدد و متنوع، اعتماد و رضایت مشتریان خود را بدست آوریم. از ساختمان های مسکونی و تجاری تا پروژه های عمومی و صنعتی، ما توانسته ایم در هر زمینه ای که فعالیت می کنیم، استانداردهای بالا را حفظ کنیم و پروژه های با کیفیتی را به اتمام برسانیم. ما به عنوان یک شرکت ساختمان سازی، به ارائه خدمات جامع و کامل به مشتریان خود متعهد هستیم.",
		info: { done: 110, progress: 5, percent: 99 },
	},
	یزد: {
		title: "یزد، شهر چهارم فعالیت شرکت ما",
		des: "ما در طول سال ها توانسته ایم با پروژه های متعدد و متنوع، اعتماد و رضایت مشتریان خود را بدست آوریم. از ساختمان های مسکونی و تجاری تا پروژه های عمومی و صنعتی، ما توانسته ایم در هر زمینه ای که فعالیت می کنیم، استانداردهای بالا را حفظ کنیم و پروژه های با کیفیتی را به اتمام برسانیم. ما به عنوان یک شرکت ساختمان سازی، به ارائه خدمات جامع و کامل به مشتریان خود متعهد هستیم.",
		info: { done: 76, progress: 3, percent: 92 },
	},
};
type CityKeys = keyof CitiesInfo;
export default function CityMenu() {
	const cities = Object.keys(citiesInfo) as CityKeys[];
	const [selectedCity, setSelectedCity] = useState<CityKeys>("تهران");

	return (
		<>
			<div className="flex items-center">
				{cities.map((city) => (
					<p
						key={city}
						className={`text-xl font-dana-medium border-b-2 p-4 cursor-pointer hover:text-amber-300 ${
							selectedCity === city ? "text-amber-300" : "text-white"
						}`}
						onClick={() => setSelectedCity(city)}
					>
						{city}
					</p>
				))}
			</div>
			<div className="mt-10 py-5">
				{selectedCity && (
					<div className="flex flex-col items-center w-8/10 mx-auto space-y-8">
						<h2 className="text-2xl font-dana-bold text-amber-300">
							{citiesInfo[selectedCity].title}
						</h2>
						<p className="text-gray-400 font-dana-regular">
							{citiesInfo[selectedCity].des}
						</p>
						{/* city info */}
						<div className="grid grid-cols-3 items-center text-center *:not-last:border-l-2 *:px-2 *:py-4">
							<div>
								<h3 className="font-dana-bold text-lg md:text-3xl">
									{citiesInfo[selectedCity].info.done.toLocaleString("fa-ir")}+
								</h3>
								<p className="text-gray-400 font-dana-medium text-xs sm:text-sm">
									پروژه انجام شده
								</p>
							</div>
							<div>
								<h3 className="font-dana-bold text-lg md:text-3xl">
									{citiesInfo[selectedCity].info.progress.toLocaleString(
										"fa-ir"
									)}
									+
								</h3>
								<p className="text-gray-400 font-dana-medium text-xs sm:text-sm">
									پروژه درحال انجام
								</p>
							</div>
							<div>
								<h3 className="font-dana-bold text-lg md:text-3xl">
									{citiesInfo[selectedCity].info.percent.toLocaleString(
										"fa-ir"
									)}
									%
								</h3>
								<p className="text-gray-400 font-dana-medium text-xs sm:text-sm">
									درصد رضایت ساکنین
								</p>
							</div>
						</div>
						<Btn
							link={"/"}
							text={`مشاهده پروژه های ${selectedCity}`}
							className={" bg-gray-600 hover:bg-gray-700"}
						/>
					</div>
				)}
			</div>
		</>
	);
}
