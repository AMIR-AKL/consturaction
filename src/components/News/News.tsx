import React from "react";
import BoxNews from "../BoxNews/BoxNews";
import Btn from "../Btn/Btn";
import NewsSwiper from "./NewsSwiper";

export default function News() {
	return (
		<section dir="rtl" className="mt-20 py-10 container">
			<div className="">
				{/* right */}
				<div className="space-y-4 mb-10">
					<h2 className="font-morabba-bold text-4xl">Blog</h2>
					<h2 className="font-dana-bold text-3xl">آخرین اخبار و مقالات</h2>
					<p className="text-sm font-dana-regular">
						ما در طول سال ها توانسته ایم با پروژه های متعدد و متنوع، اعتماد و
						رضایت مشتریان خود را بدست آوریم. از ساختمان های مسکونی تا پروژه های
						عمومی و صنعتی است.
					</p>
					<Btn
						text={"مشاهده همه"}
						link={"/"}
						className={"w-30 bg-gray-800 text-white"}
					/>
				</div>
				{/* left */}
				<>
					<NewsSwiper />
				</>
				{/* <div className="grid grid-cols-3 gap-4 p-4">
					<BoxNews
						src={"/image/Blog1.webp"}
						date={"۵ شهریور ۱۴۰۴"}
						title={"بتن اکسپوز چیست و مشخصات فنی آن کدامند؟"}
						text={`افراد به دلایل متعددی تصمیم به فروش ملک خود می‌گیرند. این دلایل هر چه که باشند، هنگامی که خانه را برای فروش...`}
					/>
					<BoxNews
						src={"/image/Blog.webp"}
						date={"۱۸ تیر ۱۴۰۳"}
						title={"توجه به ایده تی وی وال در دکوراسیون خانه"}
						text={`افراد به دلایل متعددی تصمیم به فروش ملک خود می‌گیرند. این دلایل هر چه که
				باشند، هنگامی که خانه را برای فروش...`}
					/>
					<BoxNews
						src={"/image/Blog2.webp"}
						date={"۸ دی ۱۴۰۴"}
						title={"دلایل و علت نم دیوار چیست؟"}
						text={`افراد به دلایل متعددی تصمیم به فروش ملک خود می‌گیرند. این دلایل هر چه که
				باشند، هنگامی که خانه را برای فروش...`}
					/>
				</div> */}
			</div>
		</section>
	);
}
