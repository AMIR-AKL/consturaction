import "@/styles/globals.css";
import ConstructionContextProvider from "@/context/constructionContext";

export const metadata = {
	title: "Projects",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return <ConstructionContextProvider>{children}</ConstructionContextProvider>;
}
