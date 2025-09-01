import BoxNews from "@/components/BoxNews/BoxNews";
import BoxNews2 from "@/components/BoxNews2/BoxNews2";
import Date from "@/components/Date/Date";
import Landing from "@/components/Landing/Landing";
import TextBox from "@/components/TextBox/TextBox";
import TitleElementor from "@/components/TitleElementor/TitleElementor";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { LuMessagesSquare } from "react-icons/lu";

function BlogItem(props: {
	src: string;
	title: string;
	date: string;
	className: string;
}) {
	return (
		<div className={`relative rounded-md overflow-hidden ${props.className}`}>
			<div
				className={`absolute top-0 left-0 h-full w-full bg-gradient-to-t from-zinc-950/80 to-zinc-950/10 to-90% bg-blend-darken`}
			></div>
			<img
				src={props.src}
				className="object-cover h-full w-full bg-cover bg-center"
				alt=""
			/>
			<div className=" absolute bottom-5 right-5">
				<h3 className=" font-dana-bold text-white text-xl">{props.title}</h3>
				<div className="text-sm text-white font-dana-regular flex items-center gap-5 p-2">
					<Date date={props.date} />
					<p className="flex gap-1">
						<LuMessagesSquare className="size-4" />
						بدون دیدگاه
					</p>
				</div>
			</div>
		</div>
	);
}
function SortItem(props: { img: string; title: string }) {
	return (
		<div className="flex items-center justify-start gap-4 px-1.5 bg-white group shadow-[0px_0px_50px_0px_rgba(0,0,0,0.04)]">
			<div className="h-full w-15 bg-gray-200 group-hover:bg-amber-400 transition-colors py-4 flex items-center justify-center -skew-x-10">
				<img src={`/image/${props.img}`} className="size-6" alt="" />
			</div>
			<h3 className="font-dana-bold">{props.title}</h3>
		</div>
	);
}

const articles = [
	{
		id: 1,
		title: "بتن اکسپوز چیست و مشخصات فنی آن کدامند؟",
		text: "فراد به دلایل متعددی تصمیم به فروش ملک خود می‌گیرند. این دلایل هر چه که باشند، هنگامی که خانه را برای فروش...",
		date: "۱۰ فروردین ۱۴۰۴",
		src: "/image/Blog1.webp",
	},
	{
		id: 2,
		title: "توجه به ایده تی وی وال در دکوراسیون خانه",
		text: "فراد به دلایل متعددی تصمیم به فروش ملک خود می‌گیرند. این دلایل هر چه که باشند، هنگامی که خانه را برای فروش...",
		date: "۱۰ فروردین ۱۴۰۴",
		src: "/image/Blog.webp",
	},
	{
		id: 3,
		title: "دلایل و علت نم دیوار چیست؟",
		text: "فراد به دلایل متعددی تصمیم به فروش ملک خود می‌گیرند. این دلایل هر چه که باشند، هنگامی که خانه را برای فروش...",
		date: "۱۰ فروردین ۱۴۰۴",
		src: "/image/Blog2.webp",
	},
	{
		id: 4,
		title: "آشنایی با انواع درب ضد سرقت برای خانه های مسکونی",
		text: "فراد به دلایل متعددی تصمیم به فروش ملک خود می‌گیرند. این دلایل هر چه که باشند، هنگامی که خانه را برای فروش...",
		date: "۱۰ فروردین ۱۴۰۴",
		src: "/image/Blog3.webp",
	},
	{
		id: 5,
		title: "مهم‌ترین علت و دلایل فروش نرفتن ملک و خانه شما",
		text: "فراد به دلایل متعددی تصمیم به فروش ملک خود می‌گیرند. این دلایل هر چه که باشند، هنگامی که خانه را برای فروش...",
		date: "۱۰ فروردین ۱۴۰۴",
		src: "/image/Blog4.webp",
	},
	{
		id: 6,
		title: "گزارش تصویری پروژه مجتمع تهران",
		text: "فراد به دلایل متعددی تصمیم به فروش ملک خود می‌گیرند. این دلایل هر چه که باشند، هنگامی که خانه را برای فروش...",
		date: "۱۰ فروردین ۱۴۰۴",
		src: "/image/Rectangle-52.png",
	},
	{
		id: 7,
		title: "راهنمای خرید شیشه دوجداره ساختمان",
		text: "فراد به دلایل متعددی تصمیم به فروش ملک خود می‌گیرند. این دلایل هر چه که باشند، هنگامی که خانه را برای فروش...",
		date: "۱۰ فروردین ۱۴۰۴",
		src: "/image/Rectangle-54.png",
	},
];

const lastNews = [
	{
		id: 1,
		title: "دلایل و علت نم دیوار چیست؟",
		text: "افراد به دلایل متعددی تصمیم به فروش ملک خود می‌گیرند. این دلایل هر چه که باشند، هنگامی که خانه را برای فروش ملک می‌گذارید، در صورت جذب نشدن...",
		src: "/image/Blog2.webp",
	},
	{
		id: 2,
		title: "گزارش تصویری پروژه مجتمع تهران",
		text: "افراد به دلایل متعددی تصمیم به فروش ملک خود می‌گیرند. این دلایل هر چه که باشند، هنگامی که خانه را برای فروش ملک می‌گذارید، در صورت جذب نشدن...",
		src: "/image/Rectangle-52.png",
	},
	{
		id: 3,
		title: "راهنمای خرید شیشه دوجداره ساختمان",
		text: "افراد به دلایل متعددی تصمیم به فروش ملک خود می‌گیرند. این دلایل هر چه که باشند، هنگامی که خانه را برای فروش ملک می‌گذارید، در صورت جذب نشدن...",
		src: "/image/Rectangle-54.png",
	},
];

export default function Blog() {
	return (
		<>
			<Landing
				texten="Blog"
				textfas="وبلاگ"
				bg="bg-blog"
				className="!h-120"
				cover="bg-secondary/80"
			>
				<div className="bg-white z-50 w-9/10 md:w-7/10 mx-auto rounded-lg shadow-2xl flex items-center h-12  sm:h-15 overflow-hidden -mb-5">
					<div className="w-full">
						<input
							className="w-full h-full p-2 font-dana-medium border-none outline-none"
							type="search"
							placeholder="جستجو ..."
						/>
					</div>
					<div className="bg-amber-400 h-full flex items-center justify-center w-20 cursor-pointer hover:bg-amber-500 transition-colors">
						<BiSearch className="size-6" />
					</div>
				</div>
			</Landing>

			{/* grid blog */}
			<div dir="rtl" className="container mt-25">
				<div className="grid md:grid-cols-2 md:grid-rows-2 gap-5">
					<BlogItem
						src="/image/Blog.webp"
						title="توجه به ایده تی وی وال در دکوراسیون خونه"
						date="۵ شهریور ۱۴۰۴"
						className="max-md:max-h-52 max-h-110 h-full md:row-span-2"
					/>
					<BlogItem
						src="/image/Blog1.webp"
						title="آشنایی با انواع درب ضدسرقت برای خانه های مسکونی"
						date="۵ شهریور ۱۴۰۴"
						className="max-h-52"
					/>
					<BlogItem
						src="/image/Blog2.webp"
						title="دلایل علت نم دیوار چیست؟"
						date="۵ شهریور ۱۴۰۴"
						className="max-h-52"
					/>
				</div>
			</div>

			{/* cateory */}
			<div dir="rtl" className="container mt-20">
				<TitleElementor headtitle="category" maintitle="دسته بندی مقالات" />
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-8/10 mx-auto mt-10">
					<SortItem img="Vector-3.svg" title="مفاهیم معماری" />
					<SortItem img="Vector-4.svg" title="مجوزها" />
					<SortItem img="Vector-6.svg" title="قوانین ساخت و ساز" />
					<SortItem img="Vector-1-1.svg" title="تکنولوژی های ساخت و ساز" />
					<SortItem img="Vector-2.svg" title="ایده طراحی" />
					<SortItem img="Vector-5.svg" title="اخبار" />
				</div>
			</div>

			{/*Articles*/}
			<div dir="rtl" className="mt-20 container">
				<TitleElementor
					headtitle="articles"
					maintitle="آخرین مقالات"
					bottomtitle="جهت آگهی مخاطبان ما"
				/>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
					{articles.map((article) => (
						<BoxNews
							key={article.id}
							title={article.title}
							text={article.text}
							date={article.date}
							src={article.src}
						/>
					))}
				</div>
			</div>

			{/* last News */}
			<div dir="rtl" className="container mt-20">
				<TitleElementor headtitle="news" maintitle="آخرین اخبار" />
				<div className="grid lg:grid-cols-2 gap-5">
					{lastNews.map((news) => (
						<BoxNews2
							key={news.id}
							title={news.title}
							text={news.text}
							src={news.src}
						/>
					))}
				</div>
				<TextBox
					title="همه اخبار مربوط به شرکت"
					text="شما میتوانید همه اخبار را در صفحه مخصوص مشاهده کنید."
					link="/"
				/>
			</div>
		</>
	);
}
