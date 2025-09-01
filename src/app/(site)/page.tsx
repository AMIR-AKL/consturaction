import Btn from "@/components/Btn/Btn";
import ItemBox from "@/components/ItemBox/ItemBox";
import Landing from "@/components/Landing/Landing";
import Technology from "@/components/Technology/Technology";
import Projects from "@/components/Projects/Projects";
import Location from "@/components/Location/Location";
import Services from "@/components/Services/Services";
import Awards from "@/components/Awards/Awards";
import Team from "@/components/Team/Team";
import News from "@/components/News/News";
export default function Home() {
	return (
		<>
			<Landing
				texten="Construction engineers"
				textfas="گروه مهندسین ساختمانی"
				link="about-us"
				bg="bg-home"
				des
				cover={"bg-secondary/80"}
			>
				<section
					dir="rtl"
					className="box-border -mb-36 mt-10 z-30 mx-auto max-md:max-w-9/10 md:max-w-8/10 grid grid-cols-1 md:grid-cols-12 rounded-2xl shadow"
				>
					<div className="bg-amber-300 p-8 max-md:space-y-2 md:space-y-4 md:col-span-5 max-md:rounded-t-lg max-md:flex max-md:flex-col max-md:items-center max-md:text-center md:rounded-r-2xl text-right">
						<h3 className="font-dana-bold">افتخار ما</h3>
						<h2 className="font-dana-bold sm:text-xl md:text-2xl">
							۳۰ سال تجربه و جلب اعتماد و رضایت مشتریان
						</h2>
						<p className="font-dana-regular tracking-tight text-sm text-gray-600">
							ما در طول سال ها توانسته ایم با پروژه های متعدد و متنوع، از
							ساختمان های مسکونی و تجاری تا صنعتی، ما توانسته ایم در هر زمینه ای
							که فعالیت می کنیم.
						</p>
						<Btn
							text="خدمات ما"
							className={"w-30 text-white bg-gray-700 hover:bg-gray-500"}
							link="/services"
						/>
					</div>
					<div className="bg-gray-50 md:col-span-7 md:flex md:flex-wrap md:rounded-l-2xl">
						<ItemBox
							text=""
							icon={"check"}
							className={"border-b border-l"}
							count="+۲۷۰"
							title=" پروژه انجام شده "
						/>
						<ItemBox
							text=""
							icon={"calender"}
							className={"border-b"}
							count="+30"
							title="سابقه و تجربه"
						/>
						<ItemBox
							text=""
							icon={"hourglass"}
							className={"md:border-l max-md:border-b"}
							count="+۷"
							title="پروژه در حال اجرا "
						/>
						<ItemBox
							className=""
							text=""
							icon={"users"}
							count="+178"
							title="مشتریان مجموعه "
						/>
					</div>
				</section>
			</Landing>
			{/*start section technology */}
			<Technology />
			{/*end section technology */}

			{/*start section projects */}
			<Projects title={true} box={true} />
			{/*end section projects */}

			{/*start section location */}
			<Location />
			{/*end section location */}

			{/* start section services */}
			<Services />
			{/* end section services */}

			{/* start section Awards*/}
			<Awards />
			{/* end section Awards*/}

			{/* start section Team */}
			<Team />
			{/* end section Team */}

			{/* start section News */}
			<News />
			{/* end section News */}
		</>
	);
}
