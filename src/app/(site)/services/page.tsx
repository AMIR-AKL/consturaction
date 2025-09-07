import CommentsSlider from "@/components/Comments/CommentsSlider";
import Landing from "@/components/Landing/Landing";
import Services from "@/components/Services/Services";
import TitleElementor from "@/components/TitleElementor/TitleElementor";
import React from "react";

// services data
const data = [
	{
		id: 1,
		title: "ساخت آپارتمان",
		text: "ما با استفاده از تکنولوژی های نوین و به روز، به طور مداوم در جستجوی روش های بهبود یافته است.",
		src: "https://a.meharat.com/constructionco-ml/wp-content/uploads/2023/08/iconscout-19.svg",
	},
	{
		id: 2,
		title: "ساخت ویلا",
		text: "ما با استفاده از تکنولوژی های نوین و به روز، به طور مداوم در جستجوی روش های بهبود یافته است.",
		src: "https://a.meharat.com/constructionco-ml/wp-content/uploads/2023/08/Vector-1.svg",
	},
	{
		id: 3,
		title: "بازسازی ساختمان",
		text: "ما با استفاده از تکنولوژی های نوین و به روز، به طور مداوم در جستجوی روش های بهبود یافته است.",
		src: "https://a.meharat.com/constructionco-ml/wp-content/uploads/2023/08/iconscout-8804622.svg",
	},
	{
		id: 4,
		title: "دکوراسیون داخلی",
		text: "ما با استفاده از تکنولوژی های نوین و به روز، به طور مداوم در جستجوی روش های بهبود یافته است.",
		src: "https://a.meharat.com/constructionco-ml/wp-content/uploads/2023/08/iconscout-3418222.svg",
	},
	{
		id: 5,
		title: "ساخت آپارتمان",
		text: "ما با استفاده از تکنولوژی های نوین و به روز، به طور مداوم در جستجوی روش های بهبود یافته است.",
		src: "https://a.meharat.com/constructionco-ml/wp-content/uploads/2023/08/iconscout-19.svg",
	},
	{
		id: 6,
		title: "ایمن سازی بنا",
		text: "ما با استفاده از تکنولوژی های نوین و به روز، به طور مداوم در جستجوی روش های بهبود یافته است.",
		src: "https://a.meharat.com/constructionco-ml/wp-content/uploads/2023/08/iconscout-19.svg",
	},
	{
		id: 7,
		title: "بازسازی منازل",
		text: "ما با استفاده از تکنولوژی های نوین و به روز، به طور مداوم در جستجوی روش های بهبود یافته است.",
		src: "https://a.meharat.com/constructionco-ml/wp-content/uploads/2023/08/iconscout-8804622.svg",
	},
];

// comments data
const comments = [
	{
		id: 1,
		src: "/image/Man.webp",
		title: "بازسازی با طراحی بینظیر!",
		text: "ما در طول سال ها توانسته ایم با پروژه های متعدد و متنوع، اعتماد و رضایت مشتریان خود را بدست آوریم. از ساختمان های مسکونی تا پروژه های عمومی و صنعتی.",
		name: "امیرحسین کریمی",
		job: "دکوراسیون داخلی",
	},
	{
		id: 2,
		src: "/image/Rectangle-3776.jpg",
		title: "بازسازی با طراحی بینظیر!",
		text: "ما در طول سال ها توانسته ایم با پروژه های متعدد و متنوع، اعتماد و رضایت مشتریان خود را بدست آوریم. از ساختمان های مسکونی تا پروژه های عمومی و صنعتی.",
		name: "حمیدرضا محمدی",
		job: "بازسازی منازل",
	},
	{
		id: 3,
		src: "/image/Rectangle-3777.jpg",
		title: "بازسازی با طراحی بینظیر!",
		text: "ما در طول سال ها توانسته ایم با پروژه های متعدد و متنوع، اعتماد و رضایت مشتریان خود را بدست آوریم. از ساختمان های مسکونی تا پروژه های عمومی و صنعتی.",
		name: "ارسلان عابدی",
		job: "بازسازی منازل",
	},
];

export default function ServicesPage() {
	return (
		<>
			<Landing
				texten="services"
				textfas="خدمات ما"
				bg="bg-services"
				cover="bg-secondary/80"
				des
				className="!h-120"
			/>
			<Services linkItem={false} data={data} />

			{/* section steps */}
			<section
				dir="rtl"
				className="bg-services2 !h-auto services relative overflow-hidden my-20 max-sm:after:!h-[45%] sm:after:!h-1/2 max-sm:after:!w-30 max-lg:after:!left-1/3 lg:after:!h-full"
			>
				<div className="container">
					<div className="flex flex-col lg:flex-row lg:items-center justify-between py-10">
						{/* right div */}
						<div className="lg:w-6/10">
							<h1 className="md:text-2xl font-dana-bold">
								تنها سه گام تا شروع ساخت پروژه شما...
							</h1>
							<p className="text-xs md:text-sm text-gray-400 font-dana-regular mt-5">
								ما با استفاده از تکنولوژی های نوین و به روز، به طور مداوم در
								جستجوی روش های بهبود یافته است.
							</p>
							<div className="mt-10 space-y-4">
								{[1, 2, 3].map((item) => (
									<div key={item} className="flex grid-cols-2 md:gap-8">
										<div className="text-6xl md:text-8xl max-w-15 w-full font-dana-bold text-amber-500 text-center">
											{item}
										</div>
										<div className="space-y-2">
											<h2 className="md:text-xl font-dana-bold">
												ارسال درخواست
											</h2>
											<p className="text-xs md:text-sm text-gray-500 font-dana-regular max-w-lg">
												ما در طول سال ها توانسته ایم با پروژه های متعدد و متنوع،
												اعتماد و رضایت مشتریان خود را بدست آوریم.
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
						{/* left div */}
						<div className="lg:w-4/10 max-lg:mt-15">
							<div className="lg:w-90 max-sm:h-50 sm:h-70 lg:h-auto w-full rounded-sm overflow-hidden z-10 relative">
								<img
									src="/image/Man-services.webp"
									className="size-full object-cover"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* section comments */}
			<section dir="rtl" className="my-10">
				<TitleElementor
					headtitle="comments"
					maintitle="نظرات شما"
					bottomtitle="با هدف جلب رضایت مشتریان"
				/>
				<div>
					<CommentsSlider data={comments} />
				</div>
			</section>
		</>
	);
}
